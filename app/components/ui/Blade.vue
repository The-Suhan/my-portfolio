<!-- components/ui/Blade.vue -->
<script setup lang="ts">
const props = withDefaults(defineProps<{ tone?: "ink" | "paper" | "footer" }>(), {
  tone: "ink",
})
/**
 * Diagonal section entry.
 *
 * Not a clip-path: a panel painted in the section's own colour that skews and
 * lifts above the section's flat top edge as the section scrolls up over
 * whatever sits behind it, so the section reads as wiping in from the left.
 *
 * Drop it in as the first child of a section. The host must be
 * `position: relative` and must NOT clip overflow.
 */

/** Fraction of the approach at which the blade is fully extended; after this
 *  it just rides along and leaves the screen with the section. */
const RAMP_END = 0.69
/** Tilt at full extension, degrees. Positive skew lifts the left corner. */
const MAX_SKEW_DEG = 5
/** How far above the section's top edge the blade leads, in vh. */
const MAX_LIFT_VH = -20

// The blade sits at the section's top edge, so its own top *is* the
// section's top — and the ramp only ever reads that edge. No parent lookup.
const el = ref<HTMLElement | null>(null)
const progress = useScrollProgress(el, ["start end", "start start"])

const ramp = computed(() => Math.min(1, progress.value / RAMP_END))
const style = computed(() => ({
  transform: `translateY(${ramp.value * MAX_LIFT_VH}vh) skewY(${ramp.value * MAX_SKEW_DEG}deg)`,
}))
</script>

<template>
  <div ref="el" class="blade" :class="`blade--${props.tone}`" :style="style" aria-hidden="true" />
</template>

<style scoped>
.blade {
  position: absolute;
  inset-inline: 0;
  top: 0;
  height: 69vh;
  z-index: 0;
  will-change: transform;
}
.blade--ink { background: var(--ink); }
.blade--paper { background: var(--paper); }
.blade--footer { background: var(--footer); }
</style>
