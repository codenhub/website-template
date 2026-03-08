# Project structure rules

Use this document when deciding where files, markup, styles, and scripts belong.

## Source of truth

- `src/library/pages/` contains page implementations and page templates.
- `src/library/components/` contains reusable demo blocks and manifests for discovery.
- `src/_ui/styles/` contains shared global styles and tokens.
- `src/_ui/components/` and `src/_ui/scripts/` contain shared UI primitives and logic.
- `src/_public/` contains static assets copied directly to the build output.

## New landing pages

- Create new landing pages in `src/library/pages/[page-name]/`.
- Start by copying `src/library/pages/template/`.
- Preserve the wrapper structure, asset loading pattern, and script entrypoints from the template.
- Only change page metadata immediately: title, description, and content inside `#smooth-content`.

## Component adaptation

- Treat files in `src/library/components/` as source material, not importable runtime dependencies.
- Use manifests to find the closest structural match.
- Copy the chosen HTML block into the target page and adapt it there.
- If the existing component is almost right, adapt the copied markup instead of editing the component library unless the task is explicitly about improving the library itself.

## Style placement

- Shared tokens belong in `src/_ui/styles/theme.css`.
- Shared global styles belong in `src/_ui/styles/`.
- Page-specific styles belong in that page folder, usually `src/library/pages/[page-name]/index.css`.
- Do not move one-off page styling into global files unless at least two places need it.

## Script placement

- Page-specific animation or interactions belong in the page `index.js`.
- Shared interaction logic belongs in `src/_ui/scripts/` only when it is reused or clearly generic.
- Do not add new shared abstractions for a single page need.

## File hygiene

- Keep each page self-contained: `index.html`, `index.css`, `index.js`, and optional `PRD.md`.
- Keep placeholder decisions documented in the page handoff or `PRD.md`.
- Remove dead markup, unused selectors, and unused animation hooks before finishing.
