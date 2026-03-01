# Agent guidelines

## Before you start

- Check `src/_ui/styles/theme.css` for available CSS tokens before touching any color, spacing, typography, or sizing value.
- Scan existing components for patterns and conventions before introducing new ones.
- If the visual intent is unclear, ask. Don't guess on design decisions.

## Styling hierarchy

Always prefer in this order:

1. CSS tokens from `src/_ui/styles/theme.css` (e.g. `var(--color-primary)`)
2. Tailwind default utility classes (e.g. `text-sm`, `gap-4`, `bg-slate-600`)
3. Arbitrary Tailwind values (e.g. `w-[20rem]`) - only when no token or default fits
4. Inline styles - as last resort, when none of the above solves the problem.

## Tailwind usage

- Tailwind only, no external CSS frameworks.
- Avoid utility bloat. Extract repeated class combinations into components.
- Keep class lists readable: group by concern (layout > spacing > typography > color > state).
- Use `@apply` sparingly and only when a utility pattern is genuinely reused.

## Component quality

- Every component must work in isolation with no assumed context.
- States matter: empty, loading, error, disabled, hover, focus, active.
- Never hardcode content, use props/slots. No lorem ipsum left in final output.
- Maintain visual consistency: spacing rhythm, type scale, and color use should feel intentional.

## Animation & transitions

- Use GSAP for advanced animations and transitions.
- Use CSS `transition`/`animation` for simple hover effects.
- Animate with purpose - motion should guide attention, not decorate.
- Respect `prefers-reduced-motion`. Wrap GSAP calls accordingly.
- Keep animations short (150–400ms typical). Avoid animating layout properties (prefer `transform`/`opacity`).

## Icons & images

- SVG only for icons, inline or as components. Never use emojis as UI elements.
- Use FontAwesome as a placeholder if the final icon isn't defined yet.
- Image placeholders: Unsplash, Picsum, or placeholder.co. Match aspect ratio and context.
- Always set `alt` text. Decorative images get `alt=""`.

## Responsive design

- Mobile-first. Build the small breakpoint first, then scale up.
- Use Tailwind breakpoints (`sm`, `md`, `lg`, `xl`).
- Touch targets: minimum 44×44px. No hover-only interactions on mobile.

## Accessibility

- Semantic HTML always. Don't use `div` where a `button`, `nav`, or `section` applies.
- Keyboard navigation must work for all interactive elements.
- Sufficient color contrast (WCAG AA minimum). Never convey info by color alone.
- ARIA only when native semantics fall short. Wrong ARIA is worse than none.
- Focus styles must be visible, don't suppress `:focus-visible`.

## Performance

- No layout thrash. Batch DOM reads and writes, don't interleave them.
- Lazy-load images below the fold (`loading="lazy"`).
- Avoid animating properties that trigger reflow (`width`, `height`, `top`, `left`).
- Keep component render logic lean, no heavy computation in render paths.

## SEO & best practices

- One `h1` per page. Heading hierarchy must be logical and unbroken.
- Meaningful `title` and `meta description` on page-level work.
- Avoid `display:none` to hide content that should be indexed.
- Prefer `<a>` for navigation, `<button>` for actions, never swap them.

## Self-review checklist

- [ ] Styling follows the token > Tailwind > arbitrary hierarchy
- [ ] All interactive states are handled
- [ ] Component works on mobile and desktop
- [ ] Animations respect `prefers-reduced-motion`
- [ ] No emojis, hardcoded content, or placeholder text left in
- [ ] Semantic HTML and keyboard navigation verified
- [ ] No unused classes or dead markup
