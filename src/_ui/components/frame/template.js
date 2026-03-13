import { MIN_WIDTH } from "./constants.js";
import { highlightHtml } from "./highlight.js";
import { ICON_CODE, ICON_COPY, ICON_DESKTOP, ICON_EYE, ICON_MOBILE, ICON_TABLET } from "./icons.js";

export function buildFrameMarkup({ title, codeText, attribution }) {
  const attributionHtml = attribution
    ? `<p class="text-xs text-text-secondary truncate [&_a]:text-xs [&_a]:underline [&_a]:underline-offset-2">${attribution}</p>`
    : "";

  return `
    <div class="relative flex flex-col w-full h-fit gap-4">
      <!-- Toolbar -->
      <div class="flex items-center flex-wrap justify-between gap-2">
        <div class="flex items-center gap-4">
          <span class="font-semibold text-text truncate">${title}</span>
          <div class="flex items-center bg-surface rounded-md p-1 gap-0.5">
            <button data-tab="preview" class="frame-tab active flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-medium transition-colors duration-200">
              ${ICON_EYE} Preview
            </button>
            <button data-tab="code" class="frame-tab flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-medium transition-colors duration-200">
              ${ICON_CODE} Code
            </button>
          </div>
        </div>
        <div class="flex items-center gap-1">
          <div class="frame-viewport-group flex items-center gap-0.5">
            <button data-width="100%" title="Desktop" class="frame-vp active flex items-center justify-center size-7 rounded transition-colors duration-200">${ICON_DESKTOP}</button>
            <button data-width="768" title="Tablet · 768px" class="frame-vp flex items-center justify-center size-7 rounded transition-colors duration-200">${ICON_TABLET}</button>
            <button data-width="375" title="Mobile · 375px" class="frame-vp flex items-center justify-center size-7 rounded transition-colors duration-200">${ICON_MOBILE}</button>
          </div>
          <span class="frame-width-label px-2 py-1 rounded-full bg-foreground text-xs font-mono text-text-secondary tabular-nums text-center select-none">100%</span>
          <button class="frame-copy hidden items-center justify-center gap-1.5 px-2 py-1 rounded border border-border text-[11px] font-medium text-text-secondary hover:text-text hover:border-border-hover transition-colors duration-200">
            ${ICON_COPY} Copy
          </button>
        </div>
      </div>

      <!-- Preview panel -->
      <div class="frame-preview relative flex w-full border border-border rounded-xl overflow-hidden">
        <div class="frame-dot-grid absolute inset-0 pointer-events-none" style="background-image:radial-gradient(circle, var(--color-border) 1px, transparent 1px); background-size:20px 20px; background-position:10px 10px;"></div>
        <div class="frame-sizer relative w-full overflow-hidden" style="min-width:${MIN_WIDTH}px">
          <iframe class="frame-iframe w-full border-0 block" style="height:0"></iframe>
          <div class="frame-handle absolute right-0 top-0 bottom-0 w-4 cursor-col-resize flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 z-10">
            <div class="w-1 h-8 rounded-full bg-primary"></div>
          </div>
        </div>
      </div>

      <!-- Code panel -->
      <div class="frame-code hidden border border-border rounded-xl overflow-auto bg-slate-950">
        <style>
          .hl-bracket { color: #7c8896; }
          .hl-tag     { color: #7ee787; }
          .hl-attr    { color: #79c0ff; }
          .hl-punct   { color: #7c8896; }
          .hl-value   { color: #a5d6ff; }
          .hl-comment { color: #546370; font-style: italic; }
          .frame-code *::selection {
            background-color: #f1f5f9;
            color: #020617;
          }
        </style>
        <pre class="p-4 text-xs leading-relaxed text-[#c9d1d9] font-mono whitespace-pre overflow-x-auto"><code>${highlightHtml(codeText)}</code></pre>
      </div>

      ${attributionHtml}
    </div>
  `;
}
