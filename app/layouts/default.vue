<!-- app/layouts/default.vue -->
<script setup lang="ts">
const isSidebarOpen = ref(false)
</script>

<template>
  <div class="default-layout">
    <LayoutHeader class="hidden md:block" />
    
    <button class="hamburger md:hidden" @click="isSidebarOpen = true" aria-label="Open menu">
      <span /><span /><span />
    </button>

    <LayoutSidebar :is-open="isSidebarOpen" @close="isSidebarOpen = false" />

    <slot />

    <LayoutFooter />
  </div>
</template>

<style>
.default-layout {
  width: 100%;
}

.hamburger {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 99;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: rgba(15, 15, 15, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  padding: 0.55rem 0.65rem;
  cursor: pointer;
  transition: border-color 0.2s;
}

.hamburger span {
  display: block;
  width: 18px;
  height: 1.5px;
  background: #9ca3af;
  border-radius: 2px;
  transition: background 0.2s;
}

.hamburger:hover {
  border-color: #00dc82;
}

.hamburger:hover span {
  background: #00dc82;
}
</style>