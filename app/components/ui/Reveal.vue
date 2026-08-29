<!-- components/ui/Reveal.vue -->
<script setup lang="ts">
/** Fade-and-rise once, the first time the block scrolls into view. */
const props = withDefaults(
  defineProps<{ delay?: number; rise?: number; as?: string; amount?: number }>(),
  { delay: 0, rise: 60, as: "div", amount: 0.25 },
)

const el = ref<HTMLElement | null>(null)
const visible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: props.amount },
  )
  if (el.value) observer.observe(el.value)
  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <component
    :is="props.as"
    ref="el"
    class="reveal"
    :class="{ 'is-visible': visible }"
    :style="{ '--reveal-delay': `${props.delay}s`, '--reveal-rise': `${props.rise}px` }"
  >
    <slot />
  </component>
</template>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(var(--reveal-rise));
  transition:
    opacity 1s var(--ease-expo) var(--reveal-delay),
    transform 1s var(--ease-expo) var(--reveal-delay);
}
.reveal.is-visible { opacity: 1; transform: none; }

@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; }
}
</style>
