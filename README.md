# Website template

This is a minimal, opinionated template for static websites. Use the structure and starter content, or strip everything and start fresh. Suitable for landing pages, portfolios, documentation sites, or simple marketing sites.

## Features

- Minimal Vite setup for fast local dev and small production bundles.
- TailwindCSS configured for utility-first styling and rapid prototyping.
- Prettier configuration for consistent formatting.
- GSAP for advanced, performant animations.
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

## Project structure

- src/
  - \_public/ - static files copied as-is to build output.
    - assets/ - images, icons, fonts
    - robots.txt - search engine crawlers instructions
    - sitemap.xml - the sitemap of the website
  - \_ui/ - interface core.
    - base/ - global CSS styling.
    - components/ - reusable UI pieces.
    - scripts/ - global JS scripts.
    - main.\* - JS/CSS entry.
  - index.html - entry HTML.
- package.json - scripts and deps.
- README.md - this file.
- vite.config.js - Vite configuration.
- wrangler-toml - Cloudflare workers configuration

This layout keeps runnable code in src/, static assets in public/ and build config at the repo root.

## Technology stack

- Vite - fast dev server and build tool.
- TailwindCSS - utility-first styling, good for small teams and rapid iterations.
- Prettier - code formatting.
- GSAP - performant animations when you need more control.

## Good for

- Landing pages, product microsites, and developer portfolios.
- Fast prototyping with Tailwind utilities.
- Projects where small bundle size and quick iteration matter.

## License

The code is available under the [MIT license](LICENSE).
