<!-- components/Layout/Tabbar.vue -->
<script setup lang="ts">
const navLinks = [
  { label: 'layout.nav.home', to: '/', file: 'home.tsx' },
  { label: 'layout.nav.resume', to: '/resume', file: 'resume.tsx' },
  { label: 'layout.nav.work', to: '/work', file: 'work.tsx' },
  { label: 'layout.nav.contact', to: '/contact', file: 'contact.tsx' },
]
</script>

<template>
  <nav class="tabbar">
    <NuxtLink
      v-for="item in navLinks"
      :key="item.to"
      :to="item.to"
      class="tab"
      :exact="item.to === '/'"
    >
      <span class="tab-icon">●</span>
      {{ item.file }}
    </NuxtLink>
    <div class="tab-fill"></div>
  </nav>
</template>

<style scoped>
.tabbar {
  display: flex;
  align-items: stretch;
  background: var(--bg-void);
  border-bottom: 1px solid var(--border-subtle);
  overflow-x: auto;
  flex-shrink: 0;
}
.tab {
  display: flex; align-items: center; gap: 7px;
  padding: 10px 18px;
  font-size: 12.5px;
  color: var(--text-tertiary);
  border-right: 1px solid var(--border-subtle);
  background: var(--bg-void);
  position: relative;
  white-space: nowrap;
  transition: color .2s, background .2s;
}
.tab-icon { font-size: 7px; color: var(--border-strong); transition: color .2s; }
.tab:hover { color: var(--text-secondary); background: var(--bg-panel); }

.tab.router-link-active,
.tab.router-link-exact-active {
  color: var(--text-primary);
  background: var(--bg-panel);
}
.tab.router-link-active .tab-icon,
.tab.router-link-exact-active .tab-icon { color: var(--mint); }

.tab.router-link-active::after,
.tab.router-link-exact-active::after {
  content: '';
  position: absolute; bottom: -1px; left: 0; right: 0; height: 2px;
  background: var(--mint);
}
.tab-fill { flex: 1; border-bottom: 1px solid var(--border-subtle); }
</style>
