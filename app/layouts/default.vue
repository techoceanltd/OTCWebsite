<template>
  <div class="layout">
    <AppNavbar />
    <main class="layout__main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style>
/* Global reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #f9f9f9;
}

.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout__main {
  flex: 1;
}
</style>