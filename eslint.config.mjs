import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom ESLint config here
  {
    rules: {
      // Customize rules if needed
      'vue/multi-word-component-names': 'off',
    },
  },
)