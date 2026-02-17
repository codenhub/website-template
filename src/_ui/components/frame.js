const ICON_COPY = `<svg viewBox="0 0 800 800" class="size-4 overflow-visible" fill="currentColor"><path fill-rule="evenodd" d="m649.5 117.8c28.4 5.1 52.7 14.9 72.4 34.7 22.4 22.4 32.1 50.6 36.6 84.1 4.3 32.2 4.3 73.3 4.3 124.1v190.2c0 50.9 0 91.9-4.3 124.1-4.5 33.5-14.2 61.7-36.6 84.1-22.4 22.4-50.6 32.1-84.1 36.6-32.2 4.3-73.2 4.3-124.1 4.3h-115.7c-50.9 0-91.9 0-124.2-4.3-33.5-4.5-61.7-14.2-84.1-36.6-19.7-19.7-29.6-44-34.7-72.4-66.7-10.5-117.8-68.2-117.8-137.9v-225.3c0-68.4 0-122.6 5.7-165 5.9-43.6 18.2-78.9 46.1-106.7 27.8-27.9 63.1-40.2 106.8-46.1 42.3-5.7 96.5-5.7 164.9-5.7h150.9c69.7 0 127.4 51.1 137.9 117.8zm-58.6-5.4c-11.3-32.9-42.5-56.6-79.3-56.6h-148.8c-71 0-121.4 0.1-159.6 5.2-37.4 5-59 14.5-74.8 30.2-15.7 15.8-25.1 37.3-30.2 74.8-5.1 38.2-5.2 88.6-5.2 159.6v223.2c0 36.8 23.7 68 56.6 79.3-0.8-22.7-0.8-48.4-0.8-77.2v-190.2c0-50.8 0-91.9 4.4-124.1 4.5-33.5 14.1-61.7 36.5-84.1 22.4-22.4 50.6-32 84.1-36.5 32.3-4.4 73.3-4.4 124.2-4.4h115.7c28.8 0 54.5 0 77.2 0.8zm-382.4 131.6c-3.8 28.1-3.8 65.4-3.8 118.8v186c0 53.4 0 90.7 3.8 118.8 3.7 27.3 10.4 41.8 20.7 52.1 10.3 10.3 24.7 17 52 20.6 28.1 3.8 65.4 3.9 118.8 3.9h111.6c53.4 0 90.7-0.1 118.8-3.9 27.3-3.6 41.8-10.3 52.1-20.6 10.3-10.3 17-24.8 20.6-52.1 3.8-28.1 3.9-65.4 3.9-118.8v-186c0-53.4-0.1-90.7-3.9-118.8-3.6-27.3-10.3-41.7-20.6-52-10.3-10.3-24.8-17-52.1-20.7-28.1-3.8-65.4-3.9-118.8-3.9h-111.6c-53.4 0-90.7 0.1-118.8 3.9-27.3 3.7-41.7 10.4-52 20.7-10.3 10.3-17 24.7-20.7 52z"/></svg>`;
const ICON_CHECK = `<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
const ICON_CODE = `<svg viewBox="0 0 24 24" class="size-3.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
const ICON_EYE = `<svg viewBox="0 0 24 24" class="size-3.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>`;
const ICON_DESKTOP = `<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`;
const ICON_TABLET = `<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>`;
const ICON_MOBILE = `<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`;

const MIN_WIDTH = 320;
const HEIGHT_SYNC_INTERVAL_MS = 200;
const HEIGHT_SETTLE_MS = 5_000;
const TRANSITION_DURATION_MS = 320;
const COPY_FEEDBACK_MS = 1_500;

function dedentHtml(raw) {
  const lines = raw.replace(/^\s*\n|\n\s*$/g, "").split("\n");
  const nonEmpty = lines.filter((l) => l.trim());
  if (nonEmpty.length === 0) return raw.trim();

  const minIndent = Math.min(
    ...nonEmpty.map((l) => {
      const match = l.match(/^(\s*)/);
      return match ? match[1].length : 0;
    }),
  );

  return lines.map((l) => l.slice(minIndent)).join("\n");
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function collectParentStyles() {
  const parts = [];

  for (const node of document.querySelectorAll(
    'link[rel="stylesheet"], style',
  )) {
    if (node.tagName === "LINK") {
      parts.push(`<link rel="stylesheet" href="${node.href}" />`);
    } else {
      parts.push(`<style>${node.textContent}</style>`);
    }
  }

  return parts.join("\n");
}

function buildSrcdoc(bodyHtml) {
  const styles = collectParentStyles();

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${styles}
        <style>
          html, body {
            margin: 0;
            padding: 0;
            min-height: 0;
            overflow: hidden;
            background: transparent;
          }
          body {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        </style>
      </head>
      <body>${bodyHtml}</body>
    </html>
  `;
}

class Frame extends HTMLElement {
  #heightSyncTimer = null;

  #resizeObserver = null;

  #pendingTimeouts = new Set();

  #dragAbortController = null;

  connectedCallback() {
    this.style.cssText = "display:block;width:100%;";

    const title = this.getAttribute("title") || "Component";
    const rawHtml = this.innerHTML;
    const codeText = dedentHtml(rawHtml);

    this.innerHTML = `
      <div class="relative flex flex-col w-full h-fit gap-4">
        <!-- Toolbar -->
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-4">
            <span class="font-semibold text-text truncate">${title}</span>
            <div class="flex items-center bg-surface rounded-md p-1 gap-0.5">
              <button data-tab="preview" class="frame-tab active flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-medium transition-colors duration-200">
                ${ICON_EYE} Preview
              </button>
              <button data-tab="code" class="frame-tab flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-medium transition-colors duration-200">
                ${ICON_CODE} Code
              </button>
            </div>
          </div>
          <div class="flex items-center gap-1">
            <div class="frame-viewport-group flex items-center gap-0.5">
              <button data-width="100%" title="Desktop" class="frame-vp active flex items-center justify-center size-7 rounded transition-colors duration-200">${ICON_DESKTOP}</button>
              <button data-width="768" title="Tablet · 768px" class="frame-vp flex items-center justify-center size-7 rounded transition-colors duration-200">${ICON_TABLET}</button>
              <button data-width="375" title="Mobile · 375px" class="frame-vp flex items-center justify-center size-7 rounded transition-colors duration-200">${ICON_MOBILE}</button>
            </div>
            <span class="frame-width-label text-[11px] font-mono text-text-secondary tabular-nums min-w-14 text-center select-none">100%</span>
            <button class="frame-copy hidden items-center justify-center gap-1.5 px-2 py-1 rounded border border-border text-[11px] font-medium text-text-secondary hover:text-text hover:border-border-hover transition-colors duration-200">
              ${ICON_COPY} Copy
            </button>
          </div>
        </div>

        <!-- Preview panel -->
        <div class="frame-preview relative flex w-full border border-border rounded-xl overflow-hidden bg-border">
          <div class="frame-sizer relative w-full overflow-hidden" style="min-width:${MIN_WIDTH}px">
            <iframe class="frame-iframe w-full border-0 block" style="height:0" sandbox="allow-scripts allow-same-origin"></iframe>
            <div class="frame-handle absolute right-0 top-0 bottom-0 w-4 cursor-col-resize flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 z-10">
              <div class="w-1 h-8 rounded-full bg-primary"></div>
            </div>
          </div>
        </div>

        <!-- Code panel -->
        <div class="frame-code hidden border border-border rounded-xl overflow-auto bg-neutral-900">
          <pre class="p-4 text-xs leading-relaxed text-neutral-300 font-mono whitespace-pre overflow-x-auto"><code>${escapeHtml(codeText)}</code></pre>
        </div>
      </div>
    `;

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

  #q(sel) {
    return this.querySelector(sel);
  }

  #qAll(sel) {
    return this.querySelectorAll(sel);
  }

  #setTimeout(fn, ms) {
    const id = window.setTimeout(() => {
      this.#pendingTimeouts.delete(id);
      fn();
    }, ms);
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
      const iframeDoc =
        iframe.contentDocument || iframe.contentWindow?.document;
      if (!iframeDoc) return;

      const contentHeight = iframeDoc.documentElement.scrollHeight;
      iframe.style.height = `${contentHeight}px`;
    } catch {
      // Cross-origin — silently ignore
    }
  }

  #startHeightSync() {
    this.#stopHeightSync();

    const iframe = this.#q(".frame-iframe");
    if (!iframe) return;

    // Use ResizeObserver on the iframe body when possible
    try {
      const iframeDoc =
        iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        this.#resizeObserver = new ResizeObserver(() => {
          this.#syncIframeHeight();
        });
        this.#resizeObserver.observe(iframeDoc.documentElement);
      }
    } catch {
      // Cross-origin — fall back to interval polling only
    }

    // Interval as a safety net for images loading, etc.
    this.#heightSyncTimer = window.setInterval(() => {
      this.#syncIframeHeight();
    }, HEIGHT_SYNC_INTERVAL_MS);

    // Stop interval after a generous settling period
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
    this.#qAll(".frame-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        const isPreview = btn.dataset.tab === "preview";

        this.#qAll(".frame-tab").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        this.#q(".frame-preview")?.classList.toggle("hidden", !isPreview);
        this.#q(".frame-code")?.classList.toggle("hidden", isPreview);

        this.#q(".frame-viewport-group")?.classList.toggle(
          "hidden",
          !isPreview,
        );
        this.#q(".frame-width-label")?.classList.toggle("hidden", !isPreview);

        const copyBtn = this.#q(".frame-copy");
        if (copyBtn) {
          copyBtn.classList.toggle("hidden", isPreview);
          copyBtn.classList.toggle("flex", !isPreview);
        }
      });
    });
  }

  #bindViewports() {
    this.#qAll(".frame-vp").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.#qAll(".frame-vp").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const sizer = this.#q(".frame-sizer");
        const container = this.#q(".frame-preview");
        const label = this.#q(".frame-width-label");
        if (!sizer || !container || !label) return;

        const targetWidth = btn.dataset.width;

        sizer.style.transition = "width 0.3s ease";

        if (targetWidth === "100%") {
          sizer.style.width = "100%";
          label.textContent = "100%";
        } else {
          const parsed = Number.parseInt(targetWidth, 10);
          const px = Number.isNaN(parsed)
            ? container.offsetWidth
            : Math.min(parsed, container.offsetWidth);
          sizer.style.width = `${px}px`;
          label.textContent = `${px}px`;
        }

        // Remove transition after animation so drag resize stays snappy
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

    // Use an AbortController so we can tear down drag listeners on disconnect
    this.#dragAbortController = new AbortController();
    const { signal } = this.#dragAbortController;

    let startX = 0;
    let startW = 0;

    const onMove = (e) => {
      const maxW = container.offsetWidth;
      const newW = Math.max(
        MIN_WIDTH,
        Math.min(startW + e.clientX - startX, maxW),
      );
      sizer.style.width = `${newW}px`;
      label.textContent = newW >= maxW - 2 ? "100%" : `${newW}px`;
      this.#syncIframeHeight();
    };

    const onUp = (e) => {
      handle.releasePointerCapture(e.pointerId);
      handle.classList.remove("!opacity-100");
      handle.removeEventListener("pointermove", onMove);
      handle.removeEventListener("pointerup", onUp);

      this.#qAll(".frame-vp").forEach((b) => b.classList.remove("active"));
    };

    handle.addEventListener(
      "pointerdown",
      (e) => {
        e.preventDefault();
        startX = e.clientX;
        startW = sizer.offsetWidth;
        sizer.style.transition = "none";
        handle.classList.add("!opacity-100");

        handle.setPointerCapture(e.pointerId);
        handle.addEventListener("pointermove", onMove);
        handle.addEventListener("pointerup", onUp);
      },
      { signal },
    );
  }

  #bindCopy(codeText) {
    const btn = this.#q(".frame-copy");
    if (!btn) return;

    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(codeText);
        btn.innerHTML = `${ICON_CHECK} Copied!`;
        btn.classList.add("text-green-600", "border-green-400");
      } catch {
        btn.innerHTML = `${ICON_CHECK} Error`;
      }

      this.#setTimeout(() => {
        btn.innerHTML = `${ICON_COPY} Copy`;
        btn.classList.remove("text-green-600", "border-green-400");
      }, COPY_FEEDBACK_MS);
    });
  }
}

customElements.define("custom-frame", Frame);
