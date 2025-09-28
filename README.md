# Website template by Coden

This is a minimal, opinionated template for static websites. Use the structure and starter content, or strip everything and start fresh. Suitable for landing pages, portfolios, documentation sites, or simple marketing sites.

## Features

- Minimal Vite setup for fast local dev and small production bundles.
- TailwindCSS configured for utility-first styling and rapid prototyping.
- Prettier configuration for consistent formatting.
- GSAP and dotlottie-web included for advanced, performant animations.
- Small, easy-to-understand file structure to get started quickly.

## Quick start

1. Install dependencies:
   - npm install
2. Start dev server:
   - npm run dev
3. Build for production:
   - npm run build
4. Preview build:
   - npm run preview

(Adjust commands to your package manager as needed.)

## Project structure (concise)

- index.html — entry HTML.
- package.json — scripts and deps.
- vite.config.* — Vite configuration.
- tailwind.config.* — Tailwind configuration.
- src/
  - main.* — JS/TS entry.
  - assets/ — images, fonts, lottie files.
  - styles/ — Tailwind entry / CSS.
  - components/ — reusable UI pieces.
  - pages/ — page-level components or routes.
- public/ — static files copied as-is to build output.
- README.md — this file.

This layout keeps runnable code in src/, static assets in public/ and build config at the repo root.

## Technology stack

- Vite — fast dev server and build tool.
- TailwindCSS — utility-first styling, good for small teams and rapid iterations.
- Prettier — code formatting.
- GSAP — performant animations when you need more control.
- dotlottie-web — easy integration for SVG/lottie animations.
- (Optional) Add TypeScript if you want static typing.

## Good for

- Landing pages, product microsites, and developer portfolios.
- Fast prototyping with Tailwind utilities.
- Projects where small bundle size and quick iteration matter.

## Recommendations

- Purge unused Tailwind classes in production (via the configured content option).
- Keep animations lightweight; prefer CSS where possible and GSAP for complex sequences.
- Add a linting step (ESLint) if the project grows.
- Use feature branches and small commits when customizing the template.
