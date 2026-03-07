const LOADER_STYLES = `
  .loader {
    background-color: oklch(98.5% 0 0);
    position: fixed;
    inset: 0;
    transform: skewX(10deg);
    transition: all 800ms ease;
    border: none;
    z-index: 999;

    &.left {
      transform: skewX(10deg) translateX(-20%);

      &.loaded {
        transform: skewX(10deg) translateX(-120%);
      }
    }

    &.right {
      transform: skewX(10deg) translateX(20%);

      &.loaded {
        transform: skewX(10deg) translateX(120%);
      }
    }
  }
  #loader-indicator {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: oklch(20.5% 0 0);
    width: 4rem;
    height: 4rem;
    z-index: 999;
  }
`;

const LOADER_BODY = `
  <div class="loader left"></div>
  <div class="loader right"></div>
  <div id="loader-indicator" role="status" aria-label="Loading">
    <svg stroke="currentColor" viewBox="0 0 24 24">
      <style>
        .spinner {
          transform-origin: center;
          animation: rotate 2s linear infinite;
        }

        .spinner circle {
          stroke-linecap: round;
          animation: grow 1.5s ease-in-out infinite;
        }

        @keyframes rotate {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes grow {
          0% {
            stroke-dasharray: 0 150;
            stroke-dashoffset: 0;
          }

          50% {
            stroke-dasharray: 42 150;
            stroke-dashoffset: -16;
          }

          95%,
          100% {
            stroke-dasharray: 42 150;
            stroke-dashoffset: -59;
          }
        }
      </style>
      <g class="spinner">
        <circle cx="12" cy="12" r="9.5" fill="none" stroke-width="2"></circle>
      </g>
    </svg>
  </div>
  <noscript>
    <style>
      .loader, #loader-indicator { display: none !important; }
    </style>
  </noscript>
  <script>
    window.addEventListener("load", function () {
      const loaders = document.querySelectorAll(".loader");
      const loaderIndicator = document.getElementById("loader-indicator");
      loaderIndicator?.remove();
      loaders.forEach((loader) => {
        loader.classList.add("loaded");
      });
      const fallback = setTimeout(function () { loaders.forEach((loader) => loader.remove()); }, 400);
      loaders.forEach((loader) => {
        loader.addEventListener("transitionend", function () {
          clearTimeout(fallback);
          loader.remove();
        });
      });
    });
  </script>
`;

export default function addLoaderPlugin() {
  return {
    name: "vite-plugin-add-loader",
    enforce: "post",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        // Meta tag to disable loader
        const NO_LOADER_TAG = /<meta\s+name=["']no-loader["']\s*\/?>/i;

        if (NO_LOADER_TAG.test(html)) {
          return html.replace(NO_LOADER_TAG, "");
        }

        const withStyle = html.replace("</head>", `<style>${LOADER_STYLES}</style>\n</head>`);
        return withStyle.replace(/<body([^>]*)>/, `<body$1>${LOADER_BODY}`);
      },
    },
  };
}
