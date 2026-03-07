import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { addLoaderPlugin, deferCssPlugin } from "./plugins";

const EXCEPTIONS = ["./src/library/pages/template/index.html"];

const mapEntryPoints = (dir, indexOnly = false) => {
  const entries = {};

  if (!fs.existsSync(dir)) return entries;

  const files = fs.readdirSync(dir, { recursive: true });

  for (const file of files) {
    if (typeof file !== "string" || !file.endsWith(".html")) continue;

    const fullPath = `./${path.join(dir, file).replace(/\\/g, "/")}`;
    if (EXCEPTIONS.includes(fullPath)) continue;

    if (indexOnly && path.basename(file) !== "index.html") continue;

    const key = file.replace(/\\/g, "/").replace(/\.html$/, "");
    entries[key] = fullPath;
  }

  return entries;
};

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
        ...mapEntryPoints("./src/library"),
      },
    },
  },
  plugins: [tailwindcss(), addLoaderPlugin(), deferCssPlugin()],
});
