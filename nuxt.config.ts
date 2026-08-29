import {
  featureBasedPagesHook,
  getFeaturePagesWatchPaths,
  getFeatureComponentsWatchPaths,
  getFeatureImportsWatchPaths,
  setupFeatureComponents,
  setupFeatureImports,
  setupFeatureI18n,
  getFeatureI18nWatchPaths,
} from "./config/hooks/index"

const siteUrl = (process.env.NUXT_PUBLIC_SITE_URL || "https://my-portfolio-suhan.vercel.app").replace(/\/$/, "")

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // Canonical origin for canonical/OG/sitemap URLs. Override per environment
  // with NUXT_PUBLIC_SITE_URL (e.g. in Vercel's project env vars).
  runtimeConfig: {
    public: {
      siteUrl,
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/icons/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/icons/icon-192.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "preconnect", href: "https://cdn.jsdelivr.net" },
      ],
      meta: [
        { name: "theme-color", content: "#000000" },
        { name: "format-detection", content: "telephone=no" },
        { name: "author", content: "Suhan Begenjov" },
      ],
    },
  },

  devServer: {
    port: 1010,
    host: "0.0.0.0",
  },

  modules: [
    function featureI18nModule(_options, nuxt) {
      setupFeatureI18n(nuxt)
    },

    function featureComponentsModule(_options, nuxt) {
      setupFeatureComponents(nuxt)
    },

    function featureImportsModule(_options, nuxt) {
      setupFeatureImports(nuxt)
    },

    "@nuxtjs/i18n",
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@vercel/analytics",
    '@nuxtjs/tailwindcss',
  ],

  i18n: {
    defaultLocale: "en",
    // Each language needs its own indexable URL — "/" (en), "/ru", "/tm" —
    // otherwise Google only ever sees the default locale.
    strategy: "prefix_except_default",
    baseUrl: siteUrl,

    locales: [
      { file: "en.ts", code: "en", language: "en-US", name: "English" },
      { file: "ru.ts", code: "ru", language: "ru-RU", name: "Русский" },
      { file: "tm.ts", code: "tm", language: "tk-TM", name: "Türkmençe" },
    ],

    langDir: "locales",


    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_locale",
      // Only the bare "/" redirects on language detection; every prefixed URL
      // is served as-is so crawlers and shared links always land where they point.
      redirectOn: "root",
      alwaysRedirect: false,
      fallbackLocale: "en",
    },

    vueI18n: "./i18n/i18n.config.ts",
  },

  css: ["~/assets/index.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },


  watch: [
    ...getFeaturePagesWatchPaths(),
    ...getFeatureComponentsWatchPaths(),
    ...getFeatureImportsWatchPaths(),
    ...getFeatureI18nWatchPaths(),
  ],

  hooks: {
    "pages:extend": featureBasedPagesHook,
  },

  routeRules: {
    // Hashed build output and static media never change under the same URL.
    "/_nuxt/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
    "/projects/**": { headers: { "cache-control": "public, max-age=2592000" } },
    "/icons/**": { headers: { "cache-control": "public, max-age=2592000" } },
    "/og-image.jpg": { headers: { "cache-control": "public, max-age=2592000" } },
    "/bgHero.webp": { headers: { "cache-control": "public, max-age=2592000" } },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        "/",
        "/contact",
        "/ru",
        "/ru/contact",
        "/tm",
        "/tm/contact",
        "/sitemap.xml",
        "/robots.txt",
      ],
    },
  },

  vite: {
    optimizeDeps: {
      include: ["vue-shortcut-manager"],
    },
  },
})
