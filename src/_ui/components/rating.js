class Rating extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="flex gap-1">
        <svg
          viewBox="0 0 24 24"
          class="size-5"
          fill="currentColor"
        >
          <path
            d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"
          />
        </svg>
        <svg
          viewBox="0 0 24 24"
          class="size-5"
          fill="currentColor"
        >
          <path
            d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"
          />
        </svg>
        <svg
          viewBox="0 0 24 24"
          class="size-5"
          fill="currentColor"
        >
          <path
            d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"
          />
        </svg>
        <svg
          viewBox="0 0 24 24"
          class="size-5"
          fill="currentColor"
        >
          <path
            d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"
          />
        </svg>
        <svg
          viewBox="0 0 24 24"
          class="size-5"
          fill="currentColor"
        >
          <path
            d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"
          />
        </svg>
      </div>
    `;
  }
}

customElements.define("custom-rating", Rating);
