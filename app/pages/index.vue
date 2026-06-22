<!-- pages/index.vue -->
<script setup>
const { t } = useI18n()

useHead({
  title: t('home.title'),
  meta: [
    {
      name: 'description',
      content: t('home.description')
    }
  ]
})
</script>

<template>
  <section class="view">
    <div class="terminal-hero">
      <Terminal />
      <Side />
    </div>
    <Stats />
  </section>
</template>

<style scoped>
.view {
  animation: fadeUp .5s var(--ease);
}

.terminal-hero {
  display: flex;
  gap: 56px;
  align-items: flex-start;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .terminal-hero {
    flex-direction: column;
  }
}
</style>
