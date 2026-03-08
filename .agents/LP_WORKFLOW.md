# Landing page workflow

Follow this workflow in order. Do not skip steps or scan broadly without a reason.

## 1. Read the minimum required context

Read only these inputs first:

1. The user prompt or brief
2. `README.md`
3. `src/library/pages/template/`
4. `src/_ui/styles/theme.css`
5. `src/library/components/manifest.json`

Only open additional files when a step below requires them.

## 2. Confirm the brief

- Look for an existing brief or PRD in the provided context or target page folder.
- If none exists, create `PRD.md` inside the page folder.
- Use the PRD as the source of truth for section order, content intent, open placeholders, and completion tracking.
- If the brief is too thin to determine the section list or core message, stop and ask.

Recommended PRD shape:

```markdown
# [Page Name] - PRD

## Company details

- Name:
- Industry:
- Tone:
- Brand colors:
- Target audience:
- Key differentiators:

## Page skeleton

1. Header - intent
2. Hero - intent
3. Feature section - intent

## Implementation plan

- [ ] Header
- [ ] Hero
- [ ] Feature section

## Placeholders and assumptions

- Placeholder screenshots:
- Missing brand assets:
- Open content assumptions:
```

## 3. Set up the page correctly

- Target location: `src/library/pages/[page-name]/` unless the task says otherwise.
- If the folder does not exist, copy `src/library/pages/template/`.
- Do not rebuild the page scaffold by hand.
- Update metadata first: `title`, `meta description`, and any obvious template placeholders.

## 4. Build sections one by one

Work in the same order as the PRD. For each section, use this decision path:

1. Match the section intent against `src/library/components/manifest.json` category descriptions and tags.
2. Open only the best matching category manifest.
3. Rank variants by structure first: layout, information hierarchy, and interaction pattern.
4. Use the variant `location` to jump directly to the block in that category `index.html`.
5. Copy the chosen block into the page and adapt it.
6. If no component is a good fit, build the section from scratch.

## 5. Manifest-first rules

- Never start by scanning raw `index.html` files across multiple categories.
- Never open every category manifest for a single section.
- Never choose a component only because it looks close visually.
- Choose the closest structural match, then adapt style, copy, media, and details.
- If the manifest is insufficient, open only the category file already selected for that section.

## 6. Styling and asset rules during implementation

- Follow `STYLING_RULES.md` for all visual decisions.
- Follow `ASSETS_AND_ICONS.md` for images, icons, and placeholders.
- Keep page-specific styling in the page folder unless a shared pattern is clearly being created.
- Keep placeholder assets and copy obvious and track them in the PRD or handoff.

## 7. Motion and interactivity

- Follow `MOTION_RULES.md`.
- Add GSAP entrances only for key sections when they improve hierarchy.
- Respect `prefers-reduced-motion`.
- Verify anchors, hover states, focus states, and scroll behavior after motion changes.

## 8. Prevent context rot

- Stay scoped to the current section.
- Do not reopen unrelated files once a valid component path is chosen.
- If subagents are available, delegate by section so each one receives only the PRD, token file, relevant manifests, chosen component block, and current page files.
- Return to the PRD after each section and mark progress immediately.

## 9. Final validation

Before handoff, verify all of the following:

- The page is responsive on mobile and desktop.
- No required section is missing.
- No element is invisible because of color, overflow, positioning, or animation state.
- Transitions and animations feel smooth and do not block interaction.
- Heading hierarchy, links, alt text, and keyboard access are valid.
- Code is readable and consistent with the rest of the library.
- No dead markup, unused selectors, or obvious placeholders were left undocumented.

## 10. Handoff format

Keep the final report short and include only:

- Placeholder content that still needs replacement
- Design decisions made because the brief was ambiguous
- Missing tokens that forced Tailwind defaults or arbitrary values
- Any section built from scratch because the library had no structural match
