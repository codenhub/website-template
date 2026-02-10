class Header extends HTMLElement {
  connectedCallback() {
    const fixed = this.hasAttribute("fixed") || false;
    this.innerHTML = `
      <header
        class="flex p-4 justify-center slide-down-in border-b transition duration-400${fixed ? " fixed inset-x-0 border-transparent z-99" : " border-border"}">
        <div class="sect-container flex-row justify-between">
          <a href="/">
            <img src="/logo.svg" alt="Logo" class="h-10 object-contain" />
          </a>

          <!-- DESKTOP NAV -->
          <div class="hidden md:flex gap-6 items-center">
            <nav class="flex gap-6">
              <a href="#why-this-template" class="hover:font-semibold hover:tracking-wide transition-all duration-400">Why us?</a>
              <a href="#features" class="hover:font-semibold hover:tracking-wide transition-all duration-400">Features</a>
              <a href="#testimonials" class="hover:font-semibold hover:tracking-wide transition-all duration-400">Testimonials</a>
              <a href="#faq" class="hover:font-semibold hover:tracking-wide transition-all duration-400">FAQ</a>
            </nav>
            <a href="https://github.com/codenhub/website-template" target="_blank" class="primary-btn">
              <svg viewBox="0 0 20 20" fill="currentColor" class="size-4">
                <path
                  transform="translate(-84.000000, -7399.000000)"
                  d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                ></path>
              </svg>
              Get template
            </a>
          </div>
          <!-- END DESKTOP NAV -->

          <!-- MOBILE NAV -->
          <div class="flex md:hidden">
            <input type="checkbox" name="mobile-menu" id="mobile-menu" class="peer sr-only" aria-label="Mobile menu toggle button" />
            <label class="flex flex-col w-6 gap-1.5 py-2 cursor-pointer" for="mobile-menu">
              <div class="w-full h-0.5 bg-text"></div>
              <div class="w-full h-0.5 bg-text"></div>
              <div class="w-full h-0.5 bg-text"></div>
            </label>
            <div
              class="absolute flex top-18 inset-x-0 bg-background shadow-lg p-4 origin-top scale-y-0 opacity-0 peer-checked:scale-y-100 peer-checked:opacity-100 transition duration-400"
            >
              <nav class="flex flex-col items-center w-full gap-2">
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

    const header = document.querySelector("header");
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";

      if (direction === "down") {
        header.classList.add("-translate-y-1/1");
      }

      if (direction === "up") {
        header.classList.remove("-translate-y-1/1");
        if (currentScrollY > 0) {
          header.classList.add(
            "border-border",
            "bg-background/80",
            "backdrop-blur-sm",
          );
          header.classList.remove("border-transparent");
        } else {
          header.classList.remove(
            "border-border",
            "bg-background/80",
            "backdrop-blur-sm",
          );
          header.classList.add("border-transparent");
        }
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    if (fixed) document.addEventListener("scroll", onScroll, { passive: true });
  }
}

customElements.define("custom-header", Header);
