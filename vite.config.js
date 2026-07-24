import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { ViteMinifyPlugin } from "vite-plugin-minify";

export default defineConfig({
  root: "src",
  publicDir: "../public",
  base: "/vite-project/",
  server: {
    port: 3200,
    open: true,
  },

  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "src/index.html",
        about: "src/about.html",
        pricing: "src/pricing.html",
        contact: "src/contact.html",
      },
    },
  },

  plugins: [
    injectHTML(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
    ViteMinifyPlugin({}),
  ],
});
