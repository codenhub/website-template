# Agent guidelines

This file is the entrypoint for AI agents working in this repository.

## Primary goal

Generate structured, presentable pages that match the library standards, use the project assets correctly, and do not break layout, motion, or responsiveness.

## Read order

Read only what is needed, in this order:

1. `README.md` for the project overview and folder map.
2. `src/library/pages/template/` for the expected page scaffold.
3. `src/_ui/styles/theme.css` for shared tokens.
4. `src/library/components/manifest.json` for component discovery.
5. The category manifest for the section you are building.
6. The focused document that matches the task:
   - `PROJECT_STRUCTURE.md`
   - `STYLING_RULES.md`
   - `ASSETS_AND_ICONS.md`
   - `MOTION_RULES.md`
   - `LP_WORKFLOW.md`

Do not scan every manifest, every component file, or every page folder unless the task explicitly requires that breadth.

## Routing

- Building a landing page: read `LP_WORKFLOW.md` and follow it in order.
- Choosing where code belongs: read `PROJECT_STRUCTURE.md`.
- Making styling decisions: read `STYLING_RULES.md`.
- Choosing or replacing icons and images: read `ASSETS_AND_ICONS.md`.
- Adding or changing animation: read `MOTION_RULES.md`.

## Hard rules

- Start from structure, not style. Match section intent and layout before adapting visuals.
- Reuse `src/library/pages/template/` when creating a new page folder. Do not recreate the scaffold manually.
- Check `src/_ui/styles/theme.css` before introducing colors, spacing, typography, or breakpoints.
- Use `src/library/components/manifest.json` before opening raw component HTML.
- Open only the category manifest that matches the current section. Do not browse unrelated categories.
- Copy component markup into the page and adapt it there. Do not create runtime dependencies between library demo files and page files.
- Use GSAP only when the motion is meaningful. Respect `prefers-reduced-motion`.
- Keep placeholder content obvious in the handoff. Never present placeholder copy or media as final brand content.

## When to stop and ask

Ask only if one of these blocks progress:

- The brief is too thin to determine page sections or content hierarchy.
- The task changes a public pattern and multiple valid directions would affect the library standard.
- Brand direction is required and cannot be inferred from the provided context.

## Anti-patterns

- Do not pick components by visual style alone.
- Do not scan all manifests hoping for inspiration.
- Do not leave invisible content, broken anchors, or missing sections.
- Do not hardcode decorative emojis, random icon sets, or untracked external assets.
- Do not use inline styles when tokens or utilities already solve the need.

## Done criteria

- The page is responsive.
- No required section is missing.
- No element is unintentionally invisible.
- Motion and transitions are smooth and purposeful.
- Code stays readable and aligned with repository conventions.
