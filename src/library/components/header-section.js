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
          <div class="flex gap-4 items-center flex-wrap w-full">
            <a
              href="/library/components/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg viewBox="0 0 32 32" class="size-4" fill="currentColor">
                <path d="M29.895,12.52c-0.235-0.704-0.829-1.209-1.549-1.319l-7.309-1.095l-3.29-6.984C17.42,2.43,16.751,2,16,2  s-1.42,0.43-1.747,1.122l-3.242,6.959l-7.357,1.12c-0.72,0.11-1.313,0.615-1.549,1.319c-0.241,0.723-0.063,1.507,0.465,2.046  l5.321,5.446l-1.257,7.676c-0.125,0.767,0.185,1.518,0.811,1.959c0.602,0.427,1.376,0.469,2.02,0.114l6.489-3.624l6.581,3.624  c0.646,0.355,1.418,0.311,2.02-0.114c0.626-0.441,0.937-1.192,0.811-1.959l-1.259-7.686l5.323-5.436  C29.958,14.027,30.136,13.243,29.895,12.52z" id="XMLID_328_"/>
              </svg>
              <p class="font-medium mr-2">Featured</p>
              <span class="px-2 py-1 bg-surface rounded-full text-sm">10</span>
            </a>
            <a
              href="/library/components/alerts/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg viewBox="0 0 24 24" fill="none" class="size-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" />
              </svg>
              <p class="font-medium mr-2">Alerts</p>
              <span class="px-2 py-1 bg-surface rounded-full text-sm">6</span>
            </a>
            <a
              href="/library/components/badges/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg viewBox="0 0 24 24" fill="none" class="size-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="m2 14 2-2-2-2" /><path d="m22 14-2-2 2-2" />
              </svg>
              <p class="font-medium mr-2">Badges</p>
              <span class="px-2 py-1 bg-surface rounded-full text-sm">8</span>
            </a>
            <a
              href="/library/components/blog/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg viewBox="0 0 24 24" fill="none" class="size-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" /><path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6Z" />
              </svg>
              <p class="font-medium mr-2">Blog</p>
              <span class="px-2 py-1 bg-surface rounded-full text-sm">4</span>
            </a>
            <a
              href="/library/components/buttons/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg viewBox="0 0 1920 1920" class="size-4" fill="currentColor">
                <path
                  d="M0 426.667C0 191.025 191.025 0 426.667 0c235.641 0 426.666 191.025 426.666 426.667 0 235.641-191.025 426.666-426.666 426.666C191.025 853.333 0 662.308 0 426.667zm853.333 640.003V1920H0v-853.33h853.333zM1360 1920v-346.67h-346.67v-160H1360v-346.66h160v346.66h346.67v160H1520V1920h-160zm560-1066.667L1440 0 960 853.333h960z"
                />
              </svg>
              <p class="font-medium mr-2">Buttons</p>
              <span class="px-2 py-1 bg-surface rounded-full text-sm">12</span>
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
              <span class="px-2 py-1 bg-surface rounded-full text-sm">10</span>
            </a>
            <a
              href="/library/components/contact/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" class="size-5">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.58579 2.58579C3 3.17157 3 4.11438 3 6V16C3 18.8284 3 20.2426 3.87868 21.1213C4.51998 21.7626 5.44655 21.9359 7 21.9827V19C7 18.4477 7.44772 18 8 18C8.55228 18 9 18.4477 9 19L9 22H15V19C15 18.4477 15.4477 18 16 18C16.5523 18 17 18.4477 17 19L17 21.9827C18.5534 21.9359 19.48 21.7626 20.1213 21.1213C21 20.2426 21 18.8284 21 16V6C21 4.11438 21 3.17157 20.4142 2.58579C19.8284 2 18.8856 2 17 2H7C5.11438 2 4.17157 2 3.58579 2.58579ZM8 8C7.44772 8 7 8.44772 7 9C7 9.55228 7.44772 10 8 10H16C16.5523 10 17 9.55228 17 9C17 8.44772 16.5523 8 16 8H8ZM8 14L16 14C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12L8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14Z" />
              </svg>
              <p class="font-medium mr-2">Contact</p>
              <span class="px-2 py-1 bg-surface rounded-full text-sm">4</span>
            </a>
            <a
              href="/library/components/cta/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg viewBox="0 0 24 24" fill="none" class="size-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 7L5.5 5.5M15 7L16.5 5.5M5.5 16.5L7 15M11 5L11 3M5 11L3 11M17.1603 16.9887L21.0519 15.4659C21.4758 15.3001 21.4756 14.7003 21.0517 14.5346L11.6992 10.8799C11.2933 10.7213 10.8929 11.1217 11.0515 11.5276L14.7062 20.8801C14.8719 21.304 15.4717 21.3042 15.6375 20.8803L17.1603 16.9887Z" />
              </svg>
              <p class="font-medium mr-2">Call to Action</p>
              <span class="px-2 py-1 bg-surface rounded-full text-sm">11</span>
            </a>
            <a
              href="/library/components/faq/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg viewBox="0 0 24 24" fill="none" class="size-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" />
              </svg>
              <p class="font-medium mr-2">FAQ</p>
              <span class="px-2 py-1 bg-surface rounded-full text-sm">5</span>
            </a>
            <a
              href="/library/components/features/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg viewBox="0 0 24 24" fill="none" class="size-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <p class="font-medium mr-2">Features</p>
              <span class="px-2 py-1 bg-surface rounded-full text-sm">4</span>
            </a>
            <a
              href="/library/components/footers/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg viewBox="0 0 35 35" fill="currentColor" class="size-4">
                <path
                  d="M0,0v25.366h35V0H0z M32.879,23.245H2.121V2.121h30.758V23.245z"
                />
                <rect y="28.283" width="35" height="6.717" />
              </svg>
              <p class="font-medium mr-2">Footers</p>
              <span class="px-2 py-1 bg-surface rounded-full text-sm">5</span>
            </a>
            <a
              href="/library/components/headers/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg viewBox="0 0 35 35" fill="currentColor" class="size-4 rotate-180">
                <path
                  d="M0,0v25.366h35V0H0z M32.879,23.245H2.121V2.121h30.758V23.245z"
                />
                <rect y="28.283" width="35" height="6.717" />
              </svg>
              <p class="font-medium mr-2">Headers</p>
              <span class="px-2 py-1 bg-surface rounded-full text-sm">6</span>
            </a>
            <a
              href="/library/components/heroes/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg viewBox="0 0 24 24" fill="none" class="size-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
              </svg>
              <p class="font-medium mr-2">Heroes</p>
              <span class="px-2 py-1 bg-surface rounded-full text-sm">4</span>
            </a>
            <a
              href="/library/components/inputs/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg viewBox="0 0 24 24" fill="none" class="size-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
              </svg>
              <p class="font-medium mr-2">Inputs</p>
              <span class="px-2 py-1 bg-surface rounded-full text-sm">8</span>
            </a>
            <a
              href="/library/components/pricing/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg viewBox="0 0 24 24" fill="none" class="size-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <p class="font-medium mr-2">Pricing</p>
              <span class="px-2 py-1 bg-surface rounded-full text-sm">4</span>
            </a>
            <a
              href="/library/components/stats/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg viewBox="0 0 24 24" fill="none" class="size-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" />
              </svg>
              <p class="font-medium mr-2">Stats</p>
              <span class="px-2 py-1 bg-surface rounded-full text-sm">5</span>
            </a>
            <a
              href="/library/components/steps/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg viewBox="0 0 24 24" fill="none" class="size-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 20h9" /><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" /><path d="m15 5 3 3" />
              </svg>
              <p class="font-medium mr-2">Steps</p>
              <span class="px-2 py-1 bg-surface rounded-full text-sm">6</span>
            </a>
            <a
              href="/library/components/team/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg viewBox="0 0 24 24" fill="none" class="size-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <p class="font-medium mr-2">Team</p>
              <span class="px-2 py-1 bg-surface rounded-full text-sm">6</span>
            </a>
            <a
              href="/library/components/testimonials/"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-border-hover transition-colors duration-400"
            >
              <svg viewBox="0 0 24 24" fill="none" class="size-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <p class="font-medium mr-2">Testimonials</p>
              <span class="px-2 py-1 bg-surface rounded-full text-sm">3</span>
            </a>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("header-section", HeaderSection);
