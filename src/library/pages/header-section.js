class PagesHeaderSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="sect relative overflow-hidden">
        <div class="sect-container items-baseline">
          <h2 class="text-title-lg split-chars">Pages Library</h2>
          <p
            class="text-body text-lg tracking-normal max-w-2xl text-text-secondary -mt-6 split-text"
          >
            Selection of complete pages, from landing pages to full websites.
            Copy, paste, and customize to ship faster.
          </p>
        </div>
      </section>
    `;
  }
}

customElements.define("pages-header-section", PagesHeaderSection);
