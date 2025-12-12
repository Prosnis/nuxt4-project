/**
 * Example API endpoint
 * Nuxt 4 supports server routes with full TypeScript support
 */
export default defineEventHandler((event) => {
  return {
    message: 'Hello from Nuxt 4 API!',
    timestamp: new Date().toISOString(),
    version: '4.0.0',
  }
})