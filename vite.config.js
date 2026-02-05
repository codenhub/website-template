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
        buttons: "./src/elements/buttons/index.html",
        cards: "./src/elements/cards/index.html",
        contact: "./src/sections/contact/index.html",
        cta: "./src/sections/cta/index.html",
        footers: "./src/sections/footers/index.html",
        headers: "./src/sections/headers/index.html",
      },
    },
  },
  plugins: [tailwindcss(), deferCssPlugin()],
});
