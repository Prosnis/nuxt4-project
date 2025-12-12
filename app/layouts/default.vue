<template>
  <div class="layout-default">
    <header class="header">
      <nav class="nav">
        <NuxtLink to="/" class="logo">
          Nuxt 4 App
        </NuxtLink>
      </nav>
    </header>

    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <p>&copy; 2025 Nuxt 4 Project. Built with ❤️ and TypeScript.</p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.layout-default {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: $primary-color;
  color: white;
  padding: $spacing-medium $spacing-large;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .nav {
    max-width: 1200px;
    margin: 0 auto;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-decoration: none;

    &:hover {
      opacity: 0.9;
    }
  }
}

.main {
  flex: 1;
  padding: $spacing-large 0;
}

.footer {
  background-color: $background-light;
  padding: $spacing-medium;
  text-align: center;
  border-top: 1px solid $border-color;

  p {
    margin: 0;
    color: $text-secondary;
  }
}
</style>