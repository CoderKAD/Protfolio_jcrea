// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  app:{
    head:{
      title:"",
      htmlAttrs:{lang:'en'},
      link :[
        {
          rel:'icon',
         
        }
      ]

    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
  ],
  fonts: {
    families: [
      { name: 'lufga', provider: 'none' },
    ]
  },
   ui: {
    colorMode: false,
    fonts: false
  },
  
  
})
