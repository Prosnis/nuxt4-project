export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  
  devtools: { enabled: true },
  
  future: {
    compatibilityVersion: 4,
  },

  // Enable experimental features for Nuxt 4
  experimental: {
    sharedPrerenderData: true,
    scanPageMeta: true,
    appManifest: true,
    typedPages: true,
  },

  // Use app/ directory structure (Nuxt 4 feature)
  dir: {
    pages: 'app/pages',
    layouts: 'app/layouts',
    middleware: 'app/middleware',
    plugins: 'app/plugins',
    modules: 'app/modules',
  },

  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxt/eslint',
  ],

  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: true,
    shim: false,
  },

  // i18n configuration
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'ru', iso: 'ru-RU', file: 'ru.json', name: 'Русский' },
    ],
    defaultLocale: 'en',
    langDir: 'locales',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  // CSS configuration
  css: ['~/app/assets/styles/main.scss'],

  // Vite configuration for SASS
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/app/assets/styles/_variables.scss" as *;',
          api: 'modern-compiler',
        },
      },
    },
  },

  // ESLint module configuration
  eslint: {
    config: {
      stylistic: true,
    },
  },
});