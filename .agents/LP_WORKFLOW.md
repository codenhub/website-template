# Landing Page Workflow

## 1. Documentation

Check for an existing PRD or brief (`.md`, `.txt`, or similar) in the project or provided context. If none exists, create `PRD.md` inside the page folder (see next step) with this structure:

```markdown
# [Page Name] - PRD

## Company details

- Name, industry, tone/voice, brand colors, target audience, key differentiators, .

## Page skeleton

Ordered list of sections with intent. Example:

1. Header - sticky nav with logo and CTA
2. Hero - headline, subheadline, primary CTA, background image
3. Features - 3-column grid
   ...

## Implementation plan

- [ ] Section 1
- [ ] Section 2
      ...
```

If a PRD already exists, read it fully before proceeding. Don't assume, if the brief is too thin to build from, ask before starting.

## 2. Project setup

Page folder location: `library/pages/[company-name]/` (unless told otherwise).

If the folder doesn't exist, copy `library/pages/template/` to `library/pages/[company-name]/`. Don't create the files manually, the template already includes the correct HTML wrapper, CSS token imports, and JS setup. Only update surface-level metadata: `<title>`, `<meta name="description">`, and any placeholder comments.

## 3. Section implementation

Work through the page skeleton one section at a time, in order. For each section, do the following steps:

- **Search first.** Scan `library/components/` to find a matching component. Check the folder name, then read its `index.html` to evaluate fit. Relevant folders include: `heroes`, `headers`, `features`, `cta`, `faq`, `footers`, `steps`, `contact`, `cards`, `dividers`, and others.
- **If a match exists:** Copy the component HTML into `index.html` and adapt it. Update content, classes, and structure to fit the page. Don't reference or import, copy directly.
- **If no match exists:** Build the section from scratch, following the UI/UX guidelines.
- Mark each section as complete in `PRD.md` as you go.

**IMPORTANT:** If you have support for subagents, delegate each section to a subagent to prevent context rot. Each subagent should receive: the PRD, the relevant component HTML (if found), the page's current `index.html`, and the token file at `src/_ui/styles/theme.css`.

## 4. Finishing touches

Once all sections are in place:

- **Animations:** Add GSAP scroll-triggered entrance animations for key sections (heroes, features, stats, CTAs). Keep them subtle and purposeful. Respect `prefers-reduced-motion`.
- **Transitions:** Add hover/focus transitions for interactive elements if not already handled by component styles.
- **Optimization:** Ensure all images have `alt` text, lazy-loading is set for below-fold images, heading hierarchy is valid, and there are no unused classes or dead markup.
- **Final check:** Run through the UI/UX self-review checklist.

## 5. Handoff

Keep the report short. Note only:

- Any **placeholder content** that needs replacing (images, copy, links, brand assets).
- Any **design decisions** made where the brief was ambiguous.
- Any **missing tokens** that caused a fallback to Tailwind defaults or arbitrary values.

The `PRD.md` is the source of truth, it should reflect what was built.
