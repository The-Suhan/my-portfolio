<!-- components/F/Resume/Experience.vue -->
<script setup lang="ts">
const items = ['junior', 'frontend', 'fullstack'] as const
</script>

<template>
  <div class="tab-content">
    <p class="pane-eyebrow">$ cat experience.log</p>
    <div class="log-list">
      <div v-for="key in items" :key="key" class="log-item">
        <span class="log-period">{{ $t(`resume.experience.items.${key}.period`) }}</span>
        <h4 class="log-title">{{ $t(`resume.experience.items.${key}.title`) }}</h4>
        <p class="log-place">{{ $t(`resume.experience.items.${key}.place`) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.log-list { display: flex; flex-direction: column; }
.log-item {
  padding: 18px 0;
  border-bottom: 1px solid var(--border-subtle);
}
.log-item:last-child { border-bottom: none; }
.log-period {
  display: inline-block;
  font-size: 11px;
  color: var(--amber);
  background: var(--amber-glow);
  padding: 3px 9px;
  border-radius: 999px;
  margin-bottom: 10px;
}
.log-title { font-size: 1.05rem; font-weight: 700; margin: 0 0 4px; }
.log-place { font-size: 12.5px; color: var(--text-tertiary); margin: 0; }
</style>
