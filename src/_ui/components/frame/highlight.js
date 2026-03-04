export function dedentHtml(raw) {
  const lines = raw.replace(/^\s*\n|\n\s*$/g, "").split("\n");
  const nonEmpty = lines.filter((line) => line.trim());
  if (nonEmpty.length === 0) return raw.trim();

  const minIndent = Math.min(
    ...nonEmpty.map((line) => {
      const match = line.match(/^(\s*)/);
      return match ? match[1].length : 0;
    }),
  );

  return lines.map((line) => line.slice(minIndent)).join("\n");
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function highlightTag(tagText) {
  const tagOpen = /^(<\/?)(\w[\w.-]*)/.exec(tagText);
  if (!tagOpen) return escapeHtml(tagText);

  const parts = [];
  const bracket = tagOpen[1];
  const tagName = tagOpen[2];

  parts.push(`<span class="hl-bracket">${escapeHtml(bracket)}</span>`);
  parts.push(`<span class="hl-tag">${escapeHtml(tagName)}</span>`);

  let rest = tagText.slice(tagOpen[0].length);
  const ATTR_REGEX = /([\w@:.\-]+)(?:(\s*=\s*)("[^"]*"|'[^']*'|[^\s>]*))?|(\/?>)/g;
  let attrMatch;

  while ((attrMatch = ATTR_REGEX.exec(rest)) !== null) {
    const beforeIndex = ATTR_REGEX.lastIndex - attrMatch[0].length;
    const textBefore = rest.slice(0, beforeIndex);

    if (textBefore && !textBefore.match(/^\s*$/)) {
      parts.push(escapeHtml(textBefore));
    } else if (textBefore) {
      parts.push(textBefore);
    }

    rest = rest.slice(ATTR_REGEX.lastIndex);
    ATTR_REGEX.lastIndex = 0;

    if (attrMatch[4]) {
      parts.push(`<span class="hl-bracket">${escapeHtml(attrMatch[4])}</span>`);
      break;
    }

    const attrName = attrMatch[1];
    parts.push(`<span class="hl-attr">${escapeHtml(attrName)}</span>`);

    if (attrMatch[2] !== undefined) {
      parts.push(`<span class="hl-punct">${escapeHtml(attrMatch[2])}</span>`);
      parts.push(`<span class="hl-value">${escapeHtml(attrMatch[3])}</span>`);
    }
  }

  if (rest) {
    parts.push(escapeHtml(rest));
  }

  return parts.join("");
}

export function highlightHtml(raw) {
  const TOKEN_PATTERNS = [
    { type: "comment", regex: /<!--[\s\S]*?-->/g },
    { type: "tag", regex: /<\/?[a-zA-Z][^>]*\/?>/g },
  ];

  const tokens = [];

  for (const { type, regex } of TOKEN_PATTERNS) {
    let match;
    while ((match = regex.exec(raw)) !== null) {
      tokens.push({
        type,
        start: match.index,
        end: match.index + match[0].length,
        text: match[0],
      });
    }
  }

  tokens.sort((a, b) => a.start - b.start);

  const filtered = [];
  let lastEnd = 0;
  for (const token of tokens) {
    if (token.start >= lastEnd) {
      filtered.push(token);
      lastEnd = token.end;
    }
  }

  const parts = [];
  let cursor = 0;

  for (const token of filtered) {
    if (token.start > cursor) {
      parts.push(escapeHtml(raw.slice(cursor, token.start)));
    }

    if (token.type === "comment") {
      parts.push(`<span class="hl-comment">${escapeHtml(token.text)}</span>`);
    } else {
      parts.push(highlightTag(token.text));
    }

    cursor = token.end;
  }

  if (cursor < raw.length) {
    parts.push(escapeHtml(raw.slice(cursor)));
  }

  return parts.join("");
}
