<!-- layouts/default.vue -->
<template>
  <div class="shell">
    <LayoutSiteHeader />

    <main class="shell__main">
      <slot />
    </main>

    <LayoutSiteFooter />
    <LayoutPinModal />
  </div>
</template>

<style scoped>
.shell {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

/* Black ground: the pinned hero backdrop (z-index 1) lives on it forever and
   the opaque sections (z-index 2) slide over the top. */
.shell__main {
  position: relative;
  flex: 1;
  background: #000;
}
</style>
