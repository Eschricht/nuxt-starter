// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },

  modules: [
    '@eschricht/nuxt-color-mode',
    '@artivue/nuxt',
    '@nuxt/eslint',
    '@unocss/nuxt',
  ],

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  colorMode: {
    classPrefix: '',
    classSuffix: '',
    fallback: 'Nuxt Light',
    systemDarkName: 'Nuxt Dark',
    systemLightName: 'Nuxt Light',
    dataValue: 'artivue-theme',
  },
})
