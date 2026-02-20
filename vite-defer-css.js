export default function deferAllCssPlugin() {
  return {
    name: "vite-plugin-defer-all-css",
    enforce: "post",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        const cssLinks = [];
        const transformedHtml = html.replace(/<link rel="stylesheet"([^>]*)>/g, (match, attrs) => {
          cssLinks.push(`<link rel="stylesheet"${attrs}>`);

          return `<link rel="preload" as="style"${attrs} onload="this.onload=null;this.rel='stylesheet'">`;
        });

        if (cssLinks.length === 0) {
          return transformedHtml;
        }

        const noscriptBlock = `<noscript>\n${cssLinks.join("\n")}\n</noscript>`;

        return transformedHtml.replace("</head>", `${noscriptBlock}\n</head>`);
      },
    },
  };
}
