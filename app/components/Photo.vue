<template>
    <div class="relative flex items-center justify-center w-[300px] h-[300px] xl:w-[500px] xl:h-[500px]">
        <!-- Animated SVG circle -->
        <svg class="absolute inset-0 w-full h-full" viewBox="0 0 506 506" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle ref="circleRef" cx="253" cy="253" r="250" stroke="#00ff99" stroke-width="4" stroke-linecap="round"
                stroke-linejoin="round" class="animated-circle" />
        </svg>

        <!-- Photo -->
        <div ref="photoRef"
            class="photo-container w-[268px] h-[268px] xl:w-[448px] xl:h-[448px] rounded-full overflow-hidden mix-blend-lighten">
            <img src="/avatar.jpg" alt="Avatar" class="w-full h-full object-contain" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const circleRef = ref<SVGCircleElement | null>(null)
const photoRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
    // Photo fade in with delay
    if (photoRef.value) {
        photoRef.value.style.opacity = '0'
        setTimeout(() => {
            if (photoRef.value) {
                photoRef.value.style.transition = 'opacity 0.4s ease-in'
                photoRef.value.style.opacity = '1'
            }
        }, 2000)
    }

    // Circle fade in with delay
    if (circleRef.value) {
        circleRef.value.style.opacity = '0'
        setTimeout(() => {
            if (circleRef.value) {
                circleRef.value.style.transition = 'opacity 0.4s ease-in-out'
                circleRef.value.style.opacity = '1'
            }
        }, 2400)
    }
})
</script>

<style scoped>
.animated-circle {
    stroke-dasharray: 24 10 0 0;
    animation: circleDash 20s linear infinite alternate;
}

@keyframes circleDash {
    0% {
        stroke-dasharray: 24 10 0 0;
        transform: rotate(0deg);
        transform-origin: center;
    }

    33% {
        stroke-dasharray: 15 120 25 25;
        transform: rotate(120deg);
        transform-origin: center;
    }

    66% {
        stroke-dasharray: 16 25 92 72;
        transform: rotate(240deg);
        transform-origin: center;
    }

    100% {
        stroke-dasharray: 4 250 22 22;
        transform: rotate(360deg);
        transform-origin: center;
    }
}

.photo-container {
    opacity: 0;
}
</style>