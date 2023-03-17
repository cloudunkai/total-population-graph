export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)

  app: {
    head: {
      title: "total-population-graph",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          charset: "utf-8",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/css/style.css"],
  components: true,
  modules: [
    // Simple usage
    "nuxt-highcharts",

    // With options
    [
      "nuxt-highcharts",
      {
        /* module options */
      },
    ],
  ],
  highcharts: {
    /* module options */
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // Public runtime config
  //   publicRuntimeConfig: {
  //     resasApiKey: process.env.RESAS_API_KEY || "",
  //   },
});
