import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "https://kyle.chamberl.in/",
  integrations: [tailwind(), sitemap(), prefetch({ throttle: 3 })],
  markdown: {
    remarkPlugins: [
      "remark-hint",
      "remark-emoji"
    ]
  }
});
