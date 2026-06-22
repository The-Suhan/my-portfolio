<!-- components/F/Resume/Aboutme.vue -->
<script setup lang="ts">
const fields = ['name', 'phone', 'experience', 'nationality', 'email', 'freelance', 'languages'] as const
</script>

<template>
  <div class="tab-content">
    <p class="pane-eyebrow">$ cat about.me</p>
    <div class="about-grid">
      <div v-for="field in fields" :key="field" class="about-row">
        <span class="about-key">{{ $t(`resume.about.fields.${field}`) }}</span>
        <span class="about-val" :class="{ accent: field === 'freelance' }">
          {{ $t(`resume.about.values.${field}`) }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-grid { display: flex; flex-direction: column; }
.about-row {
  display: flex; justify-content: space-between; gap: 24px;
  padding: 15px 0;
  border-bottom: 1px solid var(--border-subtle);
  font-size: 13px;
}
.about-row:last-child { border-bottom: none; }
.about-key { color: var(--text-tertiary); }
.about-val { color: var(--text-primary); text-align: right; }
.about-val.accent { color: var(--mint); }
</style>
