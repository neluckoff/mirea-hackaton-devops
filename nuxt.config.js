export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  server: {
    host: '0.0.0.0', // default: localhost
    port: process.env.PORT || 3000
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'МИРЭА Хакатон',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/tabler.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/notifications-client', ssr: false },
    { src: '~plugins/functions.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    ['@nuxtjs/axios'],
    ['@nuxtjs/style-resources'],
    ['@nuxtjs/auth-next']
  ],

  auth: {
    redirect: {
        callback: '/callback',
        logout: '/login?message=logout'
    },
    strategies: {
      local: {
          token: {
              property: 'access'
          },
          user: {
              property: '',
          },
          endpoints: {
              login: { url: '/api/auth/login', method: 'post' },
              logout: { url: '/api/auth/logout', method: 'post' },
              user: { url: '/api/auth/profile', method: 'get' }
          }
      },
      localRefresh: {
        scheme: 'refresh',
        token: {
            property: 'token.accessToken',
            maxAge: 15
        },
        refreshToken: {
            property: 'token.refreshToken',
            data: 'refreshToken',
            maxAge: false
        }
      },
    }
  },

  router: {
    middleware: ['auth']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    prefix: '/api',
    proxy: true,
  },
  
  proxy: {
      '/api': {
          target: 'http://95.140.156.192:8000',
          pathRewrite: { '^/api/': '' },
          headers: { 'X-Api-Key': '' },
          // logLevel: 'debug',
      },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
