import { defineStore } from 'pinia'

/**
 * Counter store using Composition API style
 * This is the recommended approach for Nuxt 4 + Pinia
 */
export const useCounterStore = defineStore('counter', () => {
  // State
  const count = ref(0)
  const lastUpdated = ref<Date | null>(null)

  // Getters (computed)
  const doubleCount = computed(() => count.value * 2)
  const isPositive = computed(() => count.value > 0)
  const isNegative = computed(() => count.value < 0)

  // Actions (functions)
  function increment() {
    count.value++
    lastUpdated.value = new Date()
  }

  function decrement() {
    count.value--
    lastUpdated.value = new Date()
  }

  function reset() {
    count.value = 0
    lastUpdated.value = new Date()
  }

  function setCount(value: number) {
    count.value = value
    lastUpdated.value = new Date()
  }

  // Return state, getters, and actions
  return {
    count,
    lastUpdated,
    doubleCount,
    isPositive,
    isNegative,
    increment,
    decrement,
    reset,
    setCount,
  }
})