import {
  COPY_FEEDBACK_MS,
  HEIGHT_SETTLE_MS,
  HEIGHT_SYNC_INTERVAL_MS,
  MIN_WIDTH,
  TRANSITION_DURATION_MS,
} from "./constants.js";
import { dedentHtml } from "./highlight.js";
import { ICON_CHECK, ICON_COPY } from "./icons.js";
import { buildSrcdoc } from "./srcdoc.js";
import { buildFrameMarkup } from "./template.js";

export class Frame extends HTMLElement {
  #heightSyncTimer = null;

  #resizeObserver = null;

  #pendingTimeouts = new Set();

  #dragAbortController = null;

  connectedCallback() {
    this.style.cssText = "display:block;width:100%;";

    const title = this.getAttribute("title") || "Component";

    const attributionTemplate = this.querySelector("template[data-attribution]");
    const attribution = attributionTemplate?.innerHTML.trim() || null;
    attributionTemplate?.remove();

    const rawHtml = this.innerHTML;
    const codeText = dedentHtml(rawHtml);

    this.innerHTML = buildFrameMarkup({ title, codeText, attribution });

    this.#initIframe(rawHtml);
    this.#bindTabs();
    this.#bindViewports();
    this.#bindResize();
    this.#bindCopy(codeText);
  }

  disconnectedCallback() {
    this.#stopHeightSync();
    this.#clearAllTimeouts();
    this.#dragAbortController?.abort();
    this.#dragAbortController = null;
  }

  #q(selector) {
    return this.querySelector(selector);
  }

  #qAll(selector) {
    return this.querySelectorAll(selector);
  }

  #setTimeout(callback, delayMs) {
    const id = window.setTimeout(() => {
      this.#pendingTimeouts.delete(id);
      callback();
    }, delayMs);

    this.#pendingTimeouts.add(id);
    return id;
  }

  #clearAllTimeouts() {
    for (const id of this.#pendingTimeouts) {
      window.clearTimeout(id);
    }
    this.#pendingTimeouts.clear();
  }

  #initIframe(rawHtml) {
    const iframe = this.#q(".frame-iframe");
    if (!iframe) return;

    iframe.srcdoc = buildSrcdoc(rawHtml);
    iframe.addEventListener("load", () => {
      this.#syncIframeHeight();
      this.#startHeightSync();
    });
  }

  #syncIframeHeight() {
    const iframe = this.#q(".frame-iframe");
    if (!iframe) return;

    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!iframeDoc) return;

      iframe.style.height = "0";
      const contentHeight = iframeDoc.documentElement.scrollHeight;
      iframe.style.height = `${contentHeight}px`;
    } catch {
      return;
    }
  }

  #startHeightSync() {
    this.#stopHeightSync();

    const iframe = this.#q(".frame-iframe");
    if (!iframe) return;

    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        this.#resizeObserver = new ResizeObserver(() => {
          this.#syncIframeHeight();
        });
        this.#resizeObserver.observe(iframeDoc.documentElement);
      }
    } catch {
      // Cross-origin iframes can fail here.
    }

    this.#heightSyncTimer = window.setInterval(() => {
      this.#syncIframeHeight();
    }, HEIGHT_SYNC_INTERVAL_MS);

    this.#setTimeout(() => {
      if (this.#heightSyncTimer !== null) {
        window.clearInterval(this.#heightSyncTimer);
        this.#heightSyncTimer = null;
      }
    }, HEIGHT_SETTLE_MS);
  }

  #stopHeightSync() {
    if (this.#heightSyncTimer !== null) {
      window.clearInterval(this.#heightSyncTimer);
      this.#heightSyncTimer = null;
    }

    if (this.#resizeObserver) {
      this.#resizeObserver.disconnect();
      this.#resizeObserver = null;
    }
  }

  #bindTabs() {
    this.#qAll(".frame-tab").forEach((button) => {
      button.addEventListener("click", () => {
        const isPreview = button.dataset.tab === "preview";

        this.#qAll(".frame-tab").forEach((tab) => tab.classList.remove("active"));
        button.classList.add("active");

        this.#q(".frame-preview")?.classList.toggle("hidden", !isPreview);
        this.#q(".frame-code")?.classList.toggle("hidden", isPreview);

        this.#q(".frame-viewport-group")?.classList.toggle("hidden", !isPreview);
        this.#q(".frame-width-label")?.classList.toggle("hidden", !isPreview);

        const copyButton = this.#q(".frame-copy");
        if (copyButton) {
          copyButton.classList.toggle("hidden", isPreview);
          copyButton.classList.toggle("flex", !isPreview);
        }
      });
    });
  }

  #bindViewports() {
    this.#qAll(".frame-vp").forEach((button) => {
      button.addEventListener("click", () => {
        this.#qAll(".frame-vp").forEach((viewportButton) =>
          viewportButton.classList.remove("active"),
        );
        button.classList.add("active");

        const sizer = this.#q(".frame-sizer");
        const container = this.#q(".frame-preview");
        const label = this.#q(".frame-width-label");
        if (!sizer || !container || !label) return;

        const targetWidth = button.dataset.width;
        sizer.style.transition = "width 0.3s ease";

        if (targetWidth === "100%") {
          sizer.style.width = "100%";
          label.textContent = "100%";
        } else {
          const parsed = Number.parseInt(targetWidth ?? "", 10);
          const widthPx = Number.isNaN(parsed)
            ? container.offsetWidth
            : Math.min(parsed, container.offsetWidth);
          sizer.style.width = `${widthPx}px`;
          label.textContent = `${widthPx}px`;
        }

        this.#setTimeout(() => {
          sizer.style.transition = "none";
          this.#syncIframeHeight();
        }, TRANSITION_DURATION_MS);
      });
    });
  }

  #bindResize() {
    const handle = this.#q(".frame-handle");
    const sizer = this.#q(".frame-sizer");
    const container = this.#q(".frame-preview");
    const label = this.#q(".frame-width-label");
    if (!handle || !sizer || !container || !label) return;

    this.#dragAbortController = new AbortController();
    const { signal } = this.#dragAbortController;

    let startX = 0;
    let startWidth = 0;

    const onMove = (event) => {
      const maxWidth = container.offsetWidth;
      const nextWidth = Math.max(
        MIN_WIDTH,
        Math.min(startWidth + event.clientX - startX, maxWidth),
      );
      sizer.style.width = `${nextWidth}px`;
      label.textContent = nextWidth >= maxWidth - 2 ? "100%" : `${nextWidth}px`;
      this.#syncIframeHeight();
    };

    const onUp = (event) => {
      handle.releasePointerCapture(event.pointerId);
      handle.classList.remove("!opacity-100");
      handle.removeEventListener("pointermove", onMove);
      handle.removeEventListener("pointerup", onUp);

      this.#qAll(".frame-vp").forEach((button) => button.classList.remove("active"));
    };

    handle.addEventListener(
      "pointerdown",
      (event) => {
        event.preventDefault();
        startX = event.clientX;
        startWidth = sizer.offsetWidth;
        sizer.style.transition = "none";
        handle.classList.add("!opacity-100");

        handle.setPointerCapture(event.pointerId);
        handle.addEventListener("pointermove", onMove);
        handle.addEventListener("pointerup", onUp);
      },
      { signal },
    );
  }

  #bindCopy(codeText) {
    const button = this.#q(".frame-copy");
    if (!button) return;

    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(codeText);
        button.innerHTML = `${ICON_CHECK} Copied!`;
        button.classList.add("text-green-600", "border-green-400");
      } catch {
        button.innerHTML = `${ICON_CHECK} Error`;
      }

      this.#setTimeout(() => {
        button.innerHTML = `${ICON_COPY} Copy`;
        button.classList.remove("text-green-600", "border-green-400");
      }, COPY_FEEDBACK_MS);
    });
  }
}

customElements.define("custom-frame", Frame);
