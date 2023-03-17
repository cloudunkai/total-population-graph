export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)

  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        { src: "https://awesome-lib.js" },
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: "stylesheet", href: "https://awesome-lib.css" },
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        // { children: ':root { color: red }', type: 'text/css' }
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: "JavaScript is required" },
      ],
    },
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  //   css: ["~/assets/css/main.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  // plugins: [{ src: "~plugins/vue-highcharts.js", ssr: false }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  //   buildModules: [
  //     // https://go.nuxtjs.dev/typescript
  //     "@nuxt/typescript-build",
  //   ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // Simple usage
    'nuxt-highcharts',

    // With options
    ['nuxt-highcharts', { /* module options */ }]
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
