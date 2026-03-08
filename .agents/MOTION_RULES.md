# Motion rules

Use this document when adding animation, scroll behavior, or transitions.

## Motion intent

- Motion must guide attention, reinforce hierarchy, or improve perceived continuity.
- Prefer no animation over decorative animation with no job.

## Tool choice

- Use GSAP for advanced or scroll-linked motion.
- Use CSS transitions or keyframes for simple hover and focus states.
- Prefer `transform` and `opacity` over layout-triggering properties.

## Safety rules

- Respect `prefers-reduced-motion` for all non-essential animation.
- Keep timings short and readable. Typical range: 150ms to 400ms for simple transitions.
- Avoid long chained timelines unless they materially improve the experience.
- Do not create motion that blocks reading, interaction, or scrolling.

## Landing page defaults

- Animate entrances for hero, features, stats, and CTA only when it improves scanability.
- Use stagger and scroll-trigger effects lightly.
- Keep hover and focus transitions subtle and consistent.
- Verify that animated elements are still visible and correctly positioned before and after animation.

## Avoid

- Animating `width`, `height`, `top`, or `left` when a transform works.
- Scroll effects that cause flicker, overlap, or content jumps.
- Smooth-scroll behavior that breaks anchors or keyboard navigation.
