import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://ruiandrebatista.com",
  trailingSlash: "always",
  integrations: [sitemap(), mdx()],
  redirects: {
    "/resume/": "/cv/",
  },
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
