class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header
        class="flex p-4 justify-center bg-background/80 backdrop-blur-sm fixed inset-x-0 slide-down-in border-b border-transparent z-99 transition-all duration-400">
        <div class="sect-container flex-row justify-between">
          <a href="#">
            <img src="/logo.svg" alt="Logo" class="h-10 object-contain" />
          </a>

          <!-- DESKTOP NAV -->
          <div class="hidden md:flex gap-4 items-center">
            <nav class="flex gap-4">
              <a href="#why-this-template" class="hover:font-semibold hover:tracking-wide transition-all duration-400">Why us?</a>
              <a href="#features" class="hover:font-semibold hover:tracking-wide transition-all duration-400">Features</a>
              <a href="#testimonials" class="hover:font-semibold hover:tracking-wide transition-all duration-400">Testimonials</a>
              <a href="#faq" class="hover:font-semibold hover:tracking-wide transition-all duration-400">FAQ</a>
            </nav>
            <a href="https://github.com/codenhub/website-template" target="_blank" class="primary-btn">Get template</a>
          </div>
          <!-- END DESKTOP NAV -->

          <!-- MOBILE NAV -->
          <div class="flex md:hidden">
            <input type="checkbox" id="mobile-menu" class="peer sr-only" />
            <label class="flex flex-col w-6 gap-1.5 py-2 cursor-pointer" for="mobile-menu">
              <div class="w-full h-0.5 bg-neutral-950"></div>
              <div class="w-full h-0.5 bg-neutral-950"></div>
              <div class="w-full h-0.5 bg-neutral-950"></div>
            </label>
            <div
              class="absolute flex top-18 inset-x-0 bg-background shadow-lg p-4 max-h-0 opacity-0 peer-checked:max-h-max peer-checked:opacity-100 transition-all duration-400"
              style="interpolate-size: allow-keywords">
              <nav class="flex flex-col w-full gap-2">
                <a href="#why-this-template" class="flex w-full text-center justify-center text-lg tracking-wide">Why us?</a>
                <a href="#features" class="flex w-full text-center justify-center text-lg tracking-wide">Features</a>
                <a href="#testimonials" class="flex w-full text-center justify-center text-lg tracking-wide">Testimonials</a>
                <a href="#faq" class="flex w-full text-center justify-center text-lg tracking-wide">FAQ</a>
                <a href="https://github.com/codenhub/website-template" target="_blank" class="primary-btn">Get template</a>
              </nav>
            </div>
          </div>
          <!-- END MOBILE NAV -->
        </div>
      </header>
    `;

    // HIDE/SHOW ON SCROLL
    let lastScrollY = window.scrollY;
    document.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      if (direction === "down") {
        header.classList.add("-translate-y-1/1");
        header.classList.remove("border-neutral-300");
      }
      if (direction === "up") {
        header.classList.remove("-translate-y-1/1");
        // ADD SHADOW IF NOT TOP
        header.classList.toggle("border-transparent", !(currentScrollY > 0));
        header.classList.toggle("border-neutral-300", currentScrollY > 0);
      }
      lastScrollY = currentScrollY;
    });
    // END HIDE/SHOW ON SCROLL
  }
}

customElements.define("custom-header", Header);
