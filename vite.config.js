import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import deferCssPlugin from "./vite-defer-css";

export default defineConfig({
  root: "./src",
  publicDir: "./_public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "./src/index.html",
        credits: "./src/credits/index.html",
        components: "./src/library/components/index.html",
        alerts: "./src/library/components/alerts/index.html",
        badges: "./src/library/components/badges/index.html",
        blog: "./src/library/components/blog/index.html",
        buttons: "./src/library/components/buttons/index.html",
        cards: "./src/library/components/cards/index.html",
        contact: "./src/library/components/contact/index.html",
        cta: "./src/library/components/cta/index.html",
        faq: "./src/library/components/faq/index.html",
        features: "./src/library/components/features/index.html",
        footers: "./src/library/components/footers/index.html",
        grids: "./src/library/components/grids/index.html",
        headers: "./src/library/components/headers/index.html",
        heroes: "./src/library/components/heroes/index.html",
        inputs: "./src/library/components/inputs/index.html",
        loaders: "./src/library/components/loaders/index.html",
        pricing: "./src/library/components/pricing/index.html",
        stats: "./src/library/components/stats/index.html",
        steps: "./src/library/components/steps/index.html",
        team: "./src/library/components/team/index.html",
        testimonials: "./src/library/components/testimonials/index.html",
        pages: "./src/library/pages/index.html",
      },
    },
  },
  plugins: [tailwindcss(), deferCssPlugin()],
});
