<template>
  <div class="home-page">
    <h1>{{ t('welcome') }}</h1>
    <p>{{ t('description') }}</p>
    
    <div class="counter-section">
      <h2>{{ t('counter') }}</h2>
      <p class="count">{{ counter }}</p>
      <div class="button-group">
        <button @click="increment">{{ t('increment') }}</button>
        <button @click="decrement">{{ t('decrement') }}</button>
        <button @click="reset">{{ t('reset') }}</button>
      </div>
    </div>

    <div class="locale-switcher">
      <h2>{{ t('language') }}</h2>
      <button 
        v-for="loc in availableLocales" 
        :key="loc.code"
        :class="{ active: locale === loc.code }"
        @click="setLocale(loc.code)"
      >
        {{ loc.name }}
      </button>
    </div>

    <div class="features">
      <h2>{{ t('features.title') }}</h2>
      <ul>
        <li v-for="feature in features" :key="feature">
          {{ t(`features.${feature}`) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
// Using Composition API with TypeScript
const { t, locale, locales, setLocale } = useI18n()
const counterStore = useCounterStore()

// Computed property from Pinia store
const counter = computed(() => counterStore.count)

// Available locales for switcher
const availableLocales = computed(() => locales.value)

// Actions from store
const increment = () => counterStore.increment()
const decrement = () => counterStore.decrement()
const reset = () => counterStore.reset()

// Features list
const features = ['nuxt4', 'typescript', 'pinia', 'i18n', 'sass', 'eslint']

// SEO Meta tags
useHead({
  title: t('welcome'),
  meta: [
    { name: 'description', content: t('description') },
  ],
})
</script>

<style lang="scss" scoped>
.home-page {
  max-width: 800px;
  margin: 0 auto;
  padding: $spacing-large;

  h1 {
    color: $primary-color;
    font-size: 2.5rem;
    margin-bottom: $spacing-medium;
  }
  
  h2 {
    color: $secondary-color;
    margin-top: $spacing-large;
    margin-bottom: $spacing-small;
  }
}

.counter-section {
  background-color: $background-light;
  padding: $spacing-medium;
  border-radius: 8px;
  margin: $spacing-large 0;

  .count {
    font-size: 3rem;
    font-weight: bold;
    color: $primary-color;
    text-align: center;
    margin: $spacing-medium 0;
  }

  .button-group {
    display: flex;
    gap: $spacing-small;
    justify-content: center;

    button {
      padding: $spacing-small $spacing-medium;
      background-color: $primary-color;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.3s;

      &:hover {
        background-color: darken($primary-color, 10%);
      }
    }
  }
}

.locale-switcher {
  margin: $spacing-large 0;

  button {
    padding: $spacing-small $spacing-medium;
    margin-right: $spacing-small;
    background-color: $background-light;
    border: 2px solid $border-color;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      border-color: $primary-color;
    }

    &.active {
      background-color: $primary-color;
      color: white;
      border-color: $primary-color;
    }
  }
}

.features {
  ul {
    list-style: none;
    padding: 0;

    li {
      padding: $spacing-small;
      margin-bottom: $spacing-small;
      background-color: $background-light;
      border-left: 4px solid $primary-color;
      border-radius: 4px;
    }
  }
}
</style>