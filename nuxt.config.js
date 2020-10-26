export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'cartclient',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script:[
      {
        src: 'https://js.stripe.com/v3/'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/swipe.js'
   ,
    { src: '~/plugins/carousel3D.client.js', ssr: false },
    { src: '~/plugins/select.js', ssr: false },
    { src: '~/plugins/vue-good-table', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [  '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  auth:{
    strategies:{
      local:{
        endpoints: {
          login:{
            url:'auth/login',
            method: 'post',
            propertyName: 'meta.token'
          },
          user:{
            url:'auth/me',
            method:'get',
            propertyName: 'data'
          }
        }
      }
    }
  },

  axios:{
    baseURL: 'http://ecommerce-server.test/api'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
