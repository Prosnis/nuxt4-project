<template>
  <div class="hello-world">
    <h3>{{ title }}</h3>
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
// Example component using Composition API and TypeScript
interface Props {
  title?: string
  message?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Hello World',
  message: 'This is an example component with TypeScript.',
})
</script>

<style lang="scss" scoped>
.hello-world {
  padding: $spacing-medium;
  background-color: $background-light;
  border-radius: $border-radius-medium;
  margin: $spacing-medium 0;

  h3 {
    color: $primary-color;
    margin-bottom: $spacing-small;
  }

  p {
    color: $text-secondary;
  }
}
</style>