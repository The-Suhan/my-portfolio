
<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'

interface StatItem {
    key: string
    target: number
    current: number
}

const stats = reactive<StatItem[]>([
    { key: 'experience', target: 1, current: 0 },
    { key: 'projects', target: 1, current: 0 },
    { key: 'technologies', target: 14, current: 0 },
    { key: 'commits', target: 100, current: 0 },
])

let animationFrame: number | null = null

function easeOutQuart(t: number): number {
    return 1 - Math.pow(1 - t, 4)
}

function animateCounters() {
    const duration = 2000
    const startTime = performance.now()

    function update(currentTime: number) {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = easeOutQuart(progress)

        stats.forEach((stat) => {
            stat.current = Math.round(eased * stat.target)
        })

        if (progress < 1) {
            animationFrame = requestAnimationFrame(update)
        }
    }

    animationFrame = requestAnimationFrame(update)
}

onMounted(() => {
    setTimeout(animateCounters, 300)
})

onUnmounted(() => {
    if (animationFrame) cancelAnimationFrame(animationFrame)
})
</script>

<template>
    <div class="grid grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10">
        <div v-for="stat in stats" :key="stat.key" class="flex items-center gap-3">
            <span class="text-4xl xl:text-5xl font-bold font-mono text-white tabular-nums">
                {{ stat.current }}
            </span>
            <span class="text-white/50 text-xs font-mono leading-tight max-w-[80px]">
                {{ $t(`home.stats.${stat.key}`) }}
            </span>
        </div>
    </div>
</template>
