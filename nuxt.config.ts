// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules:['@element-plus/nuxt', '@nuxtjs/tailwindcss'],
  css: [
    "@/assets/scss/main.scss",
  ],
  imports: {
    autoImport: true,
  },
  devtools: { enabled: true }
})
