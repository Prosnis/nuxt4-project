<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// App component with Composition API
// TypeScript is enabled by default

const { locale } = useI18n()

// Example of using head composable
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Nuxt 4 App` : 'Nuxt 4 App'
  },
  htmlAttrs: {
    lang: locale,
  },
})
</script>

<style lang="scss">
// Global styles are imported in nuxt.config.ts
</style>