# Styling rules

Use this document when making visual and CSS decisions.

## Priority order

Always prefer styling in this order:

1. Tokens from `src/_ui/styles/theme.css`
2. Tailwind default utilities
3. Tailwind arbitrary values when no token or default utility fits
4. Inline styles only as a last resort

## Tokens first

- Check `src/_ui/styles/theme.css` before introducing colors, text colors, borders, backgrounds, or breakpoints.
- Reuse the existing semantic tokens whenever possible.
- If a needed value is missing, note the fallback in the handoff instead of inventing many one-off arbitrary values.

## Global vs local styling

- Put reusable visual primitives in shared styles only when they are clearly generic.
- Keep page art direction, one-off layouts, and unique section treatments local to the page.
- Do not pollute global styles with page-specific selectors.

## Tailwind usage

- Use Tailwind only. Do not introduce another CSS framework.
- Keep class lists readable and ordered by concern: layout, spacing, typography, color, state.
- Use `@apply` sparingly and only for genuinely repeated patterns.
- Avoid utility bloat. If a class combination repeats several times inside one page, extract a local class.

## Quality rules

- Mobile-first always.
- Use the project breakpoints already available in tokens and Tailwind.
- Keep spacing rhythm consistent across sections.
- Preserve a clear heading hierarchy with one `h1` per page.
- Ensure interactive states are visible and usable on touch and keyboard.

## Avoid

- Random hardcoded hex colors when tokens already cover the need.
- Large volumes of arbitrary spacing values without a clear reason.
- Hidden overflow or absolute positioning that causes clipped or invisible content on small screens.
- Placeholder text left in the final result.
