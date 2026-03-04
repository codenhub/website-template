function collectParentStyles() {
  const parts = [];

  for (const node of document.querySelectorAll('link[rel="stylesheet"], style')) {
    if (node.tagName === "LINK") {
      parts.push(`<link rel="stylesheet" href="${node.href}" />`);
    } else {
      parts.push(`<style>${node.textContent}</style>`);
    }
  }

  return parts.join("\n");
}

export function buildSrcdoc(bodyHtml) {
  const styles = collectParentStyles();

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${styles}
        <style>
          html, body {
            margin: 0;
            padding: 0;
            min-height: 0;
            overflow: hidden;
            background: transparent;
          }
          body {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        </style>
      </head>
      <body>${bodyHtml}</body>
    </html>
  `;
}
