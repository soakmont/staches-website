export default {
  ssr: false,
  env: {
    NFT_CONTRACT_ADDRESS: process.env.NFT_CONTRACT_ADDRESS,
    NETWORK: process.env.NETWORK,
    INFURA_PROJECT_ID: process.env.INFURA_PROJECT_ID,
  },
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "StachesNFT - Staches Around the World!",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "StachesNFT is an Official Soakmont ($SKMT) Collection of 10000 handsomely mustached world travelers.",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Ultra:300,400,500,600,700",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/animate.css",
    "~/assets/css/bootstrap.min.css",
    "~/assets/css/flaticon.css",
    "~/assets/css/boxicons.min.css",
    "~/assets/css/main.scss",
    "~/assets/css/coming-soon.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-carousel", ssr: false },
    { src: "~/plugins/vue-cool-lightbox", ssr: false },
    { src: "~/plugins/vue-backtotop", ssr: false },
    { src: "~/plugins/feather-icons", ssr: false },
    { src: "~/plugins/vue-feather", ssr: false },
    { src: "~/plugins/v-wow", ssr: false },
    { src: "~/plugins/vue-toastification", ssr: false },
    "~/plugins/web3modal.js",
    "~/plugins/sweetalert2.js",
  ],

  // Globally configure <nuxt-link> default active class.
  router: {
    linkActiveClass: "active",
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      "@nuxtjs/fontawesome",
      {
        icons: {
          solid: true,
          brands: true,
        },
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
