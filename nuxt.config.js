export default {
  env: {
    baseURL: 'http://gkshop.com/public/api',
    uploadFolderUrl: 'http://gkshop.com/public/uploads/'
  },

  responsiveLoader: {
    placeholder: true,
    name: 'img/[hash:7]-[width].[ext]',
    quality: 20 // choose a lower value if you want to reduce filesize further
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Godskeeper Clothing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Welcome to Godskeeper Clothing Clothing' }
    ],
    script:[
      {
        src: 'https://js.stripe.com/v3/'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/swipe.js',
    '~/plugins/table.js',
    '~/plugins/resize.js',


    { src: '~/plugins/carousel3D.client.js', ssr: false },
    { src: '~/plugins/select.js', ssr: false },
    { src: '~/plugins/image-magnifier.js', ssr: false },
    { src: '~/plugins/alert.js', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],


  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [

   '@nuxtjs/axios',
    '@nuxtjs/auth',
    'nuxt-responsive-loader'
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
          logout:{
            url:'auth/logout',
            method:'post',
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
    baseURL: 'http://gkshop.com/public/api'
  },


  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
