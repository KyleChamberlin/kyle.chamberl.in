import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://kyle.chamberl.in/",
  integrations: [sitemap()],
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: ["remark-emoji"],
  },
});
