// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css', 'primeicons/primeicons.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-aos',
    'vue-yandex-maps/nuxt',
    '@nuxt/image',
    'nuxt-yandex-metrika',
    '@nuxtjs/sitemap',
  ],

  // ✅ ВАЖНО: это нужно, чтобы sitemap генерировал абсолютные URL
  site: {
    url: 'https://lavaproperty.com',
    trailingSlash: false,
  },

  // ✅ sitemap конфиг без hostname
  sitemap: {
    gzip: true,
    // trailingSlash лучше контролировать через site.trailingSlash
    // routes тут можно убрать, если не используешь кастомную генерацию
  },

  yandexMaps: {
    apikey:'aa2a23a8-27e2-48d7-88b8-68b0fa0e32a4',
  },

  yandexMetrika: {
    id: '105380663',
    options: {
      webvisor: true,
    },
  },

  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI || '',
    mongodbDb: process.env.MONGODB_DB || 'lava_property',
    public: {
      googleMapsApiKey: process.env.NUXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    },
  },

  aos: {
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
  },
})
