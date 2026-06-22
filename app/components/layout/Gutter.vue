<!-- components/Layout/Gutter.vue -->
<template>
  <aside class="gutter">
    <span v-for="n in 60" :key="n">{{ n }}</span>
  </aside>
</template>

<style scoped>
.gutter {
  width: 46px;
  flex-shrink: 0;
  background: var(--bg-void);
  border-right: 1px solid var(--border-subtle);
  padding-top: 32px;
  text-align: right;
  display: none;
}
@media (min-width: 1100px) { .gutter { display: block; } }
.gutter span {
  display: block;
  height: 24px;
  padding-right: 12px;
  font-size: 11px;
  color: #1f2630;
  line-height: 24px;
}
</style>
