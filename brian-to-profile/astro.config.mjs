import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://brian-to.dev",
  output: "static",
  adapter: vercel(),

  integrations: [
    preact({ compat: true }),
    sitemap(),
  ],

  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
    routing: { prefixDefaultLocale: false },
  },

  vite: {
    css: {
      postcss: "./postcss.config.mjs",
    },
    resolve: {
      alias: {
        "react": "preact/compat",
        "react-dom": "preact/compat",
        "react/jsx-runtime": "preact/jsx-runtime",
      },
    },
  },
});
