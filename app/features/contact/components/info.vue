<!-- features/contact/components/info.vue -->
<script setup lang="ts">
const items = ['phone', 'email', 'address'] as const
</script>

<template>
  <dl class="info">
    <div v-for="key in items" :key="key" class="info__row">
      <dt>{{ $t(`contact.info.${key}.label`) }}</dt>
      <dd>{{ $t(`contact.info.${key}.value`) }}</dd>
    </div>
  </dl>
</template>

<style scoped>
.info__row { border-top: 1px solid var(--rule-paper); padding: 20px 0; }
.info__row:last-child { border-bottom: 1px solid var(--rule-paper); }
.info__row dt {
  font-size: 11px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--on-paper-50);
  margin-bottom: 8px;
}
.info__row dd { font-size: 18px; font-weight: 500; letter-spacing: -0.02em; }
</style>
