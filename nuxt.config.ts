// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    baseURL: '/getlikeman.github.io/',
    buildAssetsDir: 'assets',
  },

  modules: ['@nuxt/ui','nuxt-icon','nuxt3-leaflet'],
  devtools: { enabled: false }
})
