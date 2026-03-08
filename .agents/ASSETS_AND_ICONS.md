# Assets and icons rules

Use this document when choosing images, illustrations, logos, or icons.

## Asset locations

- Store project-owned static assets in `src/_public/`.
- Reuse existing assets from `src/_public/assets/` whenever they fit the brief.
- Keep page markup pointing at stable asset paths that will exist in production.

## Images

- Prefer existing repository assets before adding new placeholders.
- If placeholders are necessary, use sources already allowed by the project guidance: Unsplash, Picsum, or placeholder.co.
- Match the content and aspect ratio to the section intent.
- Every image must have `alt` text. Decorative images must use `alt=""`.
- Add `loading="lazy"` for below-the-fold images.

## Icons

- Use SVG icons only.
- Prefer existing icons from `src/_public/assets/icons/` when suitable.
- If the final icon set is not defined yet, use FontAwesome only as a temporary placeholder.
- Do not use emojis as UI icons.

## Brand assets

- Treat logos, product screenshots, and branded illustrations as replaceable unless the brief confirms they are final.
- If you use placeholders for brand assets, call them out clearly in the handoff.

## Avoid

- Hotlinking production assets from random third-party sites.
- Mixing unrelated icon styles on the same page.
- Using decorative media that weakens readability or obscures content.
