<!-- components/ui/SplitLines.vue -->
<script setup lang="ts">
/**
 * Renders `text` as words, groups them into the lines the browser actually
 * laid out, and reveals those lines one after another on scroll-in.
 *
 * Line grouping has to be measured rather than authored: where the text wraps
 * depends on the rendered width, so words are bucketed by their offsetTop
 * after layout and re-measured whenever the box resizes or the webfont swaps
 * in and rewraps the text.
 *
 * The words are aria-hidden and the whole string is exposed via aria-label,
 * so assistive tech reads one sentence instead of loose words.
 */
const props = withDefaults(
  defineProps<{ text: string; as?: string; rise?: number; stagger?: number }>(),
  { as: "p", rise: 32, stagger: 0.15 },
)

const el = ref<HTMLElement | null>(null)
const visible = ref(false)
const lineOf = ref<number[]>([])

const words = computed(() => props.text.split(" "))

function measure() {
  const root = el.value
  if (!root) return
  let line = -1
  let prevTop: number | null = null
  const next: number[] = []
  for (const span of root.querySelectorAll<HTMLElement>("[data-word]")) {
    const top = span.offsetTop
    if (prevTop === null || top > prevTop) {
      line += 1
      prevTop = top
    }
    next.push(line)
  }
  lineOf.value = next
}

onMounted(() => {
  measure()
  document.fonts?.ready.then(measure)

  const resize = new ResizeObserver(measure)
  if (el.value) resize.observe(el.value)

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        measure()
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 },
  )
  if (el.value) observer.observe(el.value)

  onUnmounted(() => {
    resize.disconnect()
    observer.disconnect()
  })
})

// Re-measure when the copy itself changes (locale switch, carousel step).
watch(() => props.text, () => nextTick(measure))

function wordStyle(i: number) {
  return {
    "--rise": `${props.rise}px`,
    transitionDelay: `${(lineOf.value[i] ?? 0) * props.stagger}s`,
  }
}
</script>

<template>
  <component
    :is="props.as"
    ref="el"
    class="split"
    :class="{ 'is-visible': visible }"
    :aria-label="props.text"
  >
    <template v-for="(word, i) in words" :key="`${word}-${i}`">
      <span class="split__word" data-word aria-hidden="true" :style="wordStyle(i)">{{ word }}</span>
      <template v-if="i < words.length - 1">{{ ' ' }}</template>
    </template>
  </component>
</template>

<style scoped>
.split__word {
  display: inline-block;
  /* text-indent is inherited and an inline-block is a block container, so
     without this reset every word picks up the headline's first-line indent
     as its own leading gap. */
  text-indent: 0;
  opacity: 0;
  transform: translateY(var(--rise));
  /* Fitted to the reference's own curve: a gentle S that settles cleanly
     rather than trailing off the way a spring does. */
  transition:
    opacity .49s cubic-bezier(0.5, 0.35, 0.45, 0.98),
    transform .49s cubic-bezier(0.5, 0.35, 0.45, 0.98);
}
.split.is-visible .split__word { opacity: 1; transform: none; }

@media (prefers-reduced-motion: reduce) {
  .split__word { opacity: 1; transform: none; }
}
</style>
