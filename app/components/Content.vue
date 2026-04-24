<template>
    <div class="flex flex-col gap-5">
        <p class="font-mono text-sm tracking-widest text-white/70">{{ $t('home.hero.role') }}</p>

        <div>
            <h1 class="text-4xl xl:text-6xl font-bold text-white font-mono leading-tight">
                {{ $t('home.hero.greeting') }}
            </h1>
            <h1 class="text-4xl xl:text-6xl font-bold font-mono leading-tight">
                <span class="text-[#00ff99]">{{ displayText }}</span><span class="cursor"
                    :class="{ 'cursor-blink': showCursor }">|</span>
            </h1>
        </div>

        <p class="font-mono text-sm text-white/60 max-w-sm leading-relaxed">
            {{ $t('home.hero.description') }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const roles = computed(() => [
    t('home.hero.roles.name'),
    t('home.hero.roles.uiux'),
    t('home.hero.roles.frontend'),
])

const displayText = ref('')
const showCursor = ref(true)
let timeout: ReturnType<typeof setTimeout> | null = null
let roleIndex = 0
let charIndex = 0
let isDeleting = false

function type() {
    const currentRole = roles.value[roleIndex]!

    if (!isDeleting) {
        displayText.value = currentRole.slice(0, charIndex + 1)
        charIndex++

        if (charIndex === currentRole.length) {
            isDeleting = true
            timeout = setTimeout(type, 1800)
            return
        }
        timeout = setTimeout(type, 80)
    } else {
        displayText.value = currentRole.slice(0, charIndex - 1)
        charIndex--

        if (charIndex === 0) {
            isDeleting = false
            roleIndex = (roleIndex + 1) % roles.value.length
            timeout = setTimeout(type, 400)
            return
        }
        timeout = setTimeout(type, 40)
    }
}

onMounted(() => {
    timeout = setTimeout(type, 800)
})

onUnmounted(() => {
    if (timeout) clearTimeout(timeout)
})
</script>

<style scoped>
.cursor {
    color: #00ff99;
    font-weight: 100;
}

.cursor-blink {
    animation: blink 1s step-end infinite;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}
</style>