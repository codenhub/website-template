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
        buttons: "./src/library/components/buttons/index.html",
        cards: "./src/library/components/cards/index.html",
        components: "./src/library/components/index.html",
        contact: "./src/library/components/contact/index.html",
        cta: "./src/library/components/cta/index.html",
        footers: "./src/library/components/footers/index.html",
        headers: "./src/library/components/headers/index.html",
      },
    },
  },
  plugins: [tailwindcss(), deferCssPlugin()],
});
