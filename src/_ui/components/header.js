class Header extends HTMLElement {
  connectedCallback() {
    const fixed = this.hasAttribute("fixed") || false;
    this.innerHTML = `
      <header
        class="flex p-4 justify-center slide-down-in border-b transition duration-400${fixed ? " fixed inset-x-0 border-transparent z-99" : " relative border-border z-50"}">
        <div class="sect-container flex-row justify-between">
          <a href="/">
            <img src="/logo.svg" alt="Logo" class="hidden xs:block h-10 object-contain" />
            <img src="/logo-icon.svg" alt="Logo" class="xs:hidden h-10 object-contain" />
          </a>

          <!-- DESKTOP NAV -->
          <div class="flex gap-6 items-center">
            <nav class="hidden md:flex gap-6">
              <div class="flex gap-2 group relative">
                <a href="/library/">Library</a>
                <svg class="size-4 transition-transform duration-400 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
                <div class="flex flex-col gap-2 min-w-3xs rounded-xl border border-border p-2 absolute top-full left-1/2 -translate-x-1/2 translate-y-4 bg-background opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-50">
                  <a href="/library/components/" class="flex items-center gap-2 p-2 rounded-lg hover:bg-foreground transition duration-400">
                    <div class="flex items-center justify-center size-10 bg-surface rounded-lg">
                      <svg viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path d="M16.5098 5.01L14.5498 3.05C13.1498 1.65 10.8498 1.65 9.44977 3.05L7.48977 5.01C7.09977 5.4 7.09977 6.04 7.48977 6.43L11.2998 10.24C11.6898 10.63 12.3198 10.63 12.7098 10.24L16.5198 6.43C16.8998 6.04 16.8998 5.4 16.5098 5.01Z"/>
                        <path d="M5.01 7.49172L3.05 9.45172C1.65 10.8517 1.65 13.1517 3.05 14.5517L5.01 16.5117C5.4 16.9017 6.03 16.9017 6.42 16.5117L10.23 12.7017C10.62 12.3117 10.62 11.6817 10.23 11.2917L6.43 7.49172C6.04 7.10172 5.4 7.10172 5.01 7.49172Z"/>
                        <path d="M20.9491 9.45172L18.9891 7.49172C18.5991 7.10172 17.9691 7.10172 17.5791 7.49172L13.7691 11.3017C13.3791 11.6917 13.3791 12.3217 13.7691 12.7117L17.5791 16.5217C17.9691 16.9117 18.5991 16.9117 18.9891 16.5217L20.9491 14.5617C22.3491 13.1517 22.3491 10.8517 20.9491 9.45172Z"/>
                        <path d="M7.48907 18.9891L9.44907 20.9491C10.8491 22.3491 13.1491 22.3491 14.5491 20.9491L16.5091 18.9891C16.8991 18.5991 16.8991 17.9691 16.5091 17.5791L12.6991 13.7691C12.3091 13.3791 11.6791 13.3791 11.2891 13.7691L7.47907 17.5791C7.09907 17.9591 7.09907 18.5991 7.48907 18.9891Z"/>
                      </svg>
                    </div>
                    Components
                  </a>
                  <a href="/library/pages/" class="flex items-center gap-2 p-2 rounded-lg hover:bg-foreground transition duration-400">
                    <div class="flex items-center justify-center size-10 bg-surface rounded-lg">
                      <svg viewBox="0 0 37.5 37.5" class="size-6" fill="currentColor">
                        <path d="M35.5,2.75H2c-1.105,0-2,0.896-2,2v28c0,1.105,0.895,2,2,2h33.5c1.104,0,2-0.895,2-2v-28C37.5,3.646,36.604,2.75,35.5,2.75   z M31.084,5.254c0.871,0,1.578,0.707,1.578,1.58c0,0.871-0.707,1.578-1.578,1.578c-0.873,0-1.58-0.707-1.58-1.578   C29.504,5.961,30.211,5.254,31.084,5.254z M26.625,5.254c0.873,0,1.58,0.707,1.58,1.58c0,0.871-0.707,1.578-1.58,1.578   c-0.871,0-1.578-0.707-1.578-1.578C25.047,5.961,25.754,5.254,26.625,5.254z M22.166,5.254c0.873,0,1.58,0.707,1.58,1.58   c0,0.871-0.707,1.578-1.58,1.578c-0.871,0-1.578-0.707-1.578-1.578C20.588,5.961,21.295,5.254,22.166,5.254z M33.5,30.75H4V10.416   h29.5V30.75z M31.916,18.334H5.584v-6h26.332V18.334z M17.795,23.793H5.584v-3.666h12.211V23.793z M17.795,29.084H5.584v-3.666   h12.211V29.084z M31.75,23.793H19.539v-3.666H31.75V23.793z M31.75,29.084H19.539v-3.666H31.75V29.084z"/>
                      </svg>
                    </div>
                    Pages
                  </a>
                </div>
              </div>
              <a href="/credits/">Credits</a>
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
            <!-- MOBILE NAV -->
            <div class="flex md:hidden">
              <input type="checkbox" name="mobile-menu" id="mobile-menu" class="peer sr-only" aria-label="Mobile menu toggle button" />
              <label class="flex flex-col w-6 gap-1.5 py-2 cursor-pointer" for="mobile-menu">
                <div class="w-full h-0.5 bg-text"></div>
                <div class="w-full h-0.5 bg-text"></div>
                <div class="w-full h-0.5 bg-text"></div>
              </label>
              <div
                class="absolute flex top-18 inset-x-0 bg-background shadow-lg p-4 origin-top scale-y-0 opacity-0 peer-checked:scale-y-100 peer-checked:opacity-100 transition duration-400 z-50"
              >
                <nav class="flex flex-col items-center w-full gap-2">
                  <a href="/library/" class="flex w-full text-center justify-center text-lg tracking-wide">Library</a>
                  <a href="/credits/" class="flex w-full text-center justify-center text-lg tracking-wide">Credits</a>
                </nav>
              </div>
            </div>
            <!-- END MOBILE NAV -->
          </div>
          <!-- END DESKTOP NAV -->
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
          header.classList.add("border-border", "bg-background/80", "backdrop-blur-sm");
          header.classList.remove("border-transparent");
        } else {
          header.classList.remove("border-border", "bg-background/80", "backdrop-blur-sm");
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
