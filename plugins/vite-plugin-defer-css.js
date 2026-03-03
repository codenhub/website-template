const STYLESHEET_RE =
  /<link\b(?=[^>]*\brel\s*=\s*(?:"stylesheet"|'stylesheet'|stylesheet(?=[\s>])))(?=[^>]*\bhref\s*=)[^>]*\/?\s*>/gi;
const STYLESHEET_REL_ATTR_RE = /\brel\s*=\s*(?:"stylesheet"|'stylesheet'|stylesheet(?=[\s>]))/i;
const LINK_TAG_END_RE = /\/?\s*>$/;

export default function deferCssPlugin() {
  return {
    name: "vite-plugin-defer-css",
    enforce: "post",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        let noscript = "";
        const transformed = html.replace(STYLESHEET_RE, (linkTag) => {
          noscript += `    ${linkTag.replace(LINK_TAG_END_RE, ">")}\n`;

          return linkTag
            .replace(STYLESHEET_REL_ATTR_RE, 'rel="preload"')
            .replace(
              LINK_TAG_END_RE,
              ' as="style" onload="this.onload=null;this.rel=\'stylesheet\'">',
            );
        });

        if (!noscript) {
          return transformed;
        }

        return transformed.replace("</head>", `  <noscript>\n${noscript}  </noscript>\n  </head>`);
      },
    },
  };
}
