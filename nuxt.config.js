export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'cartclient',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
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
    baseURL: 'http://localhost:8000/api'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
