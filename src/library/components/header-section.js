class HeaderSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="sect relative overflow-hidden">
        <div class="sect-container items-baseline">
          <h2 class="split-chars">Components Library</h2>
          <p
            class="text-lg tracking-normal max-w-2xl text-text-secondary -mt-6 split-text"
          >
            A curated collection of production-ready UI components. Copy,
            paste, and customize to ship faster.
          </p>
          <div class="flex gap-4 items-center w-full">
            <a
              href="/library/components/buttons/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg
                viewBox="0 0 1920 1920"
                class="size-4"
                fill="currentColor"
              >
                <path
                  d="M0 426.667C0 191.025 191.025 0 426.667 0c235.641 0 426.666 191.025 426.666 426.667 0 235.641-191.025 426.666-426.666 426.666C191.025 853.333 0 662.308 0 426.667zm853.333 640.003V1920H0v-853.33h853.333zM1360 1920v-346.67h-346.67v-160H1360v-346.66h160v346.66h346.67v160H1520V1920h-160zm560-1066.667L1440 0 960 853.333h960z"
                />
              </svg>
              <p class="font-medium mr-2">Buttons</p>
              <span class="px-2 py-1 bg-foreground rounded-full text-sm"
                >4</span
              >
            </a>
            <a
              href="/library/components/cards/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" class="size-4">
                <path d="M13 0H3V2H13V0Z" />
                <path d="M2 4H14V6H2V4Z" />
                <path d="M1 8H15V15H1V8Z" />
              </svg>
              <p class="font-medium mr-2">Cards</p>
              <span class="px-2 py-1 bg-foreground rounded-full text-sm"
                >5</span
              >
            </a>
            <a
              href="/library/components/headers/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg
                viewBox="0 0 35 35"
                fill="currentColor"
                class="size-4 rotate-180"
              >
                <path
                  d="M0,0v25.366h35V0H0z M32.879,23.245H2.121V2.121h30.758V23.245z"
                />
                <rect y="28.283" width="35" height="6.717" />
              </svg>
              <p class="font-medium mr-2">Headers</p>
              <span class="px-2 py-1 bg-foreground rounded-full text-sm"
                >3</span
              >
            </a>
            <a
              href="/library/components/footers/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg
                viewBox="0 0 35 35"
                fill="currentColor"
                class="size-4"
              >
                <path
                  d="M0,0v25.366h35V0H0z M32.879,23.245H2.121V2.121h30.758V23.245z"
                />
                <rect y="28.283" width="35" height="6.717" />
              </svg>
              <p class="font-medium mr-2">Footers</p>
              <span class="px-2 py-1 bg-foreground rounded-full text-sm"
                >5</span
              >
            </a>
            <a
              href="/library/components/cta/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                class="size-6"
                stroke="currentColor"
                stroke-width="8%"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M7 7L5.5 5.5M15 7L16.5 5.5M5.5 16.5L7 15M11 5L11 3M5 11L3 11M17.1603 16.9887L21.0519 15.4659C21.4758 15.3001 21.4756 14.7003 21.0517 14.5346L11.6992 10.8799C11.2933 10.7213 10.8929 11.1217 11.0515 11.5276L14.7062 20.8801C14.8719 21.304 15.4717 21.3042 15.6375 20.8803L17.1603 16.9887Z"
                />
              </svg>
              <p class="font-medium mr-2">Call to Action</p>
              <span class="px-2 py-1 bg-foreground rounded-full text-sm"
                >3</span
              >
            </a>
            <a
              href="/library/components/contact/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" class="size-6">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.58579 2.58579C3 3.17157 3 4.11438 3 6V16C3 18.8284 3 20.2426 3.87868 21.1213C4.51998 21.7626 5.44655 21.9359 7 21.9827V19C7 18.4477 7.44772 18 8 18C8.55228 18 9 18.4477 9 19L9 22H15V19C15 18.4477 15.4477 18 16 18C16.5523 18 17 18.4477 17 19L17 21.9827C18.5534 21.9359 19.48 21.7626 20.1213 21.1213C21 20.2426 21 18.8284 21 16V6C21 4.11438 21 3.17157 20.4142 2.58579C19.8284 2 18.8856 2 17 2H7C5.11438 2 4.17157 2 3.58579 2.58579ZM8 8C7.44772 8 7 8.44772 7 9C7 9.55228 7.44772 10 8 10H16C16.5523 10 17 9.55228 17 9C17 8.44772 16.5523 8 16 8H8ZM8 14L16 14C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12L8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14Z"
                      />
                    </svg>
              <p class="font-medium mr-2">Contact</p>
              <span class="px-2 py-1 bg-foreground rounded-full text-sm"
                >2</span
              >
            </a>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("header-section", HeaderSection);
