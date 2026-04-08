import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ruiandrebatista.com",
  trailingSlash: "always",
  integrations: [sitemap()],
  build: {
    format: "directory",
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light-high-contrast",
        dark: "github-dark-high-contrast",
      },
    },
  },
});
