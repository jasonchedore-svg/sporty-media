import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { siteUrl, basePath } from "./src/config.ts";

export default defineConfig({
  site: siteUrl,
  base: basePath,
  trailingSlash: "always",
  integrations: [sitemap()],
});
