<!-- components/Home/Stats.vue -->
<script setup lang="ts">
interface StatItem {
  key: string
  target: number
  current: number
  suffix?: string
}

const stats = reactive<StatItem[]>([
  { key: 'experience', target: 1, current: 0, suffix: '+' },
  { key: 'projects', target: 3, current: 0 },
  { key: 'technologies', target: 14, current: 0 },
  { key: 'commits', target: 200, current: 0, suffix: '+' },
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
})

onUnmounted(() => { if (animationFrame) cancelAnimationFrame(animationFrame) })
</script>

<template>
  <div class="stats-row" ref="statsEl">
    <div v-for="stat in stats" :key="stat.key" class="stat-card">
      <div class="stat-num-row">
        <span class="stat-num">{{ stat.current }}</span>
        <span v-if="stat.suffix" class="stat-suffix">{{ stat.suffix }}</span>
      </div>
      <span class="stat-label">// {{ $t(`home.stats.${stat.key}`) }}</span>
    </div>
  </div>
</template>

<style scoped>
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  margin-top: 64px;
  background: var(--border-subtle);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  overflow: hidden;
}
.stat-card {
  background: var(--bg-panel);
  padding: 22px 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.stat-num-row { display: flex; align-items: baseline; }
.stat-num { font-size: 2.2rem; font-weight: 800; color: var(--text-primary); }
.stat-suffix { font-size: 2.2rem; font-weight: 800; color: var(--mint); }
.stat-label { font-size: 11px; color: var(--text-tertiary); letter-spacing: 0.02em; }

@media (max-width: 768px) { .stats-row { grid-template-columns: repeat(2, 1fr); } }
</style>
