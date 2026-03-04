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

```
website-template/
├── .agents/             # AI agents instructions
├── plugins/             # Vite plugins
├── src/                 # Website source code
│   ├── _public/         # Static assets copied as-is to build output
│   ├── _ui/             # Interface core 
│   │   ├── components/  # Reusable UI components (WebComponents)
│   │   ├── scripts/     # UI logic
│   │   └── styles/      # Global styles
│   ├── library/         # All components and page templates
│   ├── */index.html     # Other pages
│   └── index.*          # Entry points for homepage
├── vite.config.js       # Vite configuration
└── wrangler.toml        # Cloudflare workers configuration
```

This layout keeps runnable code in src/ and configuration at the root.

## Good for

- Landing pages, product microsites, and developer portfolios.
- Fast prototyping with Tailwind utilities.
- Projects where small bundle size and quick iteration matter.

## License

The code is available under the [MIT license](LICENSE).
