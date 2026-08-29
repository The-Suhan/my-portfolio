<!-- components/Stats.vue -->
<script setup lang="ts">
interface StatItem {
  key: string
  target: number
  current: number
  suffix?: string
}

const stats = reactive<StatItem[]>([
  { key: 'experience', target: 1, current: 0, suffix: '+' },
  { key: 'projects', target: 4, current: 0 },
  { key: 'technologies', target: 14, current: 0 },
  { key: 'commits', target: 500, current: 0, suffix: '+' },
])

const statsEl = ref<HTMLElement | null>(null)
let animationFrame: number | null = null
let animated = false

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4)
}

function animateCounters() {
  if (animated) return
  animated = true
  const duration = 1800
  const start = performance.now()

  function tick(now: number) {
    const progress = Math.min((now - start) / duration, 1)
    const eased = easeOutQuart(progress)
    stats.forEach(s => { s.current = Math.round(eased * s.target) })
    if (progress < 1) animationFrame = requestAnimationFrame(tick)
  }
  animationFrame = requestAnimationFrame(tick)
}

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) animateCounters() })
  }, { threshold: 0.3 })
  if (statsEl.value) observer.observe(statsEl.value)
  onUnmounted(() => observer.disconnect())
})

onUnmounted(() => { if (animationFrame) cancelAnimationFrame(animationFrame) })
</script>

<template>
  <div ref="statsEl" class="stats">
    <div v-for="stat in stats" :key="stat.key" class="stats__cell">
      <span class="stats__num">
        {{ stat.current }}<i v-if="stat.suffix">{{ stat.suffix }}</i>
      </span>
      <span class="stats__label">{{ $t(`home.stats.${stat.key}`) }}</span>
    </div>
  </div>
</template>

<style scoped>
.stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 32px;
  margin-top: 112px;
}
.stats__cell {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-top: 1px solid var(--rule-ink);
  padding-top: 18px;
}
.stats__num {
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  line-height: 1;
  font-weight: 500;
  letter-spacing: -0.04em;
}
.stats__num i { font-style: normal; color: var(--on-ink-30); }
.stats__label { font-size: 13px; color: var(--on-ink-50); }

@media (max-width: 760px) {
  .stats { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; margin-top: 72px; }
}
</style>
