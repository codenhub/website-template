class HeaderSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="sect relative overflow-hidden">
        <div class="sect-container items-baseline">
          <h2 class="split-chars">Pages Library</h2>
          <p
            class="text-lg tracking-normal max-w-2xl text-text-secondary -mt-6 split-text"
          >
            Selection of complete pages, from landing pages to full websites.
            Copy, paste, and customize to ship faster.
          </p>
        </div>
      </section>
    `;
  }
}

customElements.define("header-section", HeaderSection);
