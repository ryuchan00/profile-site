import { defineConfig } from "astro/config";

export default defineConfig({
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en"],
    routing: { prefixDefaultLocale: false },
  },
  build: { format: "directory" },
  trailingSlash: "always",
});
