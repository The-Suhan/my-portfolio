<script setup lang="ts">
defineProps<{
  number: string
  title: string
  description: string
  techs: string[]
  active: boolean
}>()
</script>

<template>
  <div class="content-section">
    <!-- Number -->
    <div class="project-number" :class="active ? 'number-active' : 'number-idle'">
      {{ number }}
    </div>

    <!-- Title -->
    <h2 class="project-title" :class="active ? 'title-active' : 'title-idle'">
      {{ title }}
    </h2>

    <!-- Description -->
    <p class="project-desc">
      {{ description }}
    </p>

    <!-- Tech stack -->
    <p class="project-techs">
      <span v-for="(tech, i) in techs" :key="tech">
        <span class="tech-item">{{ tech }}</span><span v-if="i < techs.length - 1" class="tech-comma">, </span>
      </span>
    </p>

    <!-- Divider -->
    <div class="divider" />
  </div>
</template>

<style scoped>
.content-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.project-number {
  font-family: 'Space Mono', monospace;
  font-size: clamp(2.8rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.03em;
  transition: all 0.35s ease;
}

.number-active {
  display: inline-block;
  color: #fff;
  padding: 0.1em 0.25em;
  border-radius: 4px;
}

.number-idle {
  color: transparent;
  -webkit-text-stroke: 1.5px #4b5563;
}

.project-title {
  font-family: 'Space Mono', monospace;
  font-size: clamp(1.4rem, 3vw, 1.85rem);
  font-weight: 700;
  line-height: 1.2;
  transition: all 0.35s ease;
}

.title-active {
  color: #fff;
  display: inline-block;
  padding: 0.05em 0.2em;
  border-radius: 3px;
}

.title-idle {
  color: #e5e7eb;
}

.project-desc {
  font-family: 'Space Mono', monospace;
  font-size: 0.82rem;
  color: #7b7d82;
  line-height: 1.7;
  max-width: 360px;
}

.project-techs {
  font-family: 'Space Mono', monospace;
  font-size: 0.85rem;
  color: #6b7280;
}

.tech-item {
  color: #00ff8c;
}

.tech-comma {
  color: #6b7280;
}

.divider {
  height: 1px;
  background: #2a2a33;
  margin-top: 0.25rem;
}

@media (max-width: 768px) {
  .project-desc {
    max-width: 100%;
  }
}
</style>