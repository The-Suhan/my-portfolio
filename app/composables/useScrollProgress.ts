// composables/useScrollProgress.ts
type Edge = "start" | "center" | "end"
/** "<target edge> <viewport edge>" — the scroll position at which those two
 *  edges meet. Same notation the reference site's scroll hooks use. */
type Offset = `${Edge} ${Edge}`

const FRACTION: Record<Edge, number> = { start: 0, center: 0.5, end: 1 }

/**
 * Reactive 0→1 progress of an element's travel through the viewport.
 *
 * `offsets` names the window: the first entry is where progress reads 0, the
 * second where it reads 1. `["start end", "start start"]`, for example, runs
 * from "the element's top enters at the bottom of the screen" to "its top
 * reaches the top of the screen".
 *
 * Reads are rAF-coalesced, so a burst of scroll events costs one layout pass.
 */
export function useScrollProgress(
  target: Ref<HTMLElement | null>,
  offsets: [Offset, Offset] = ["start end", "end start"],
) {
  const progress = ref(0)
  let frame: number | null = null

  function positionFor(offset: Offset, rectTop: number, height: number) {
    const [targetEdge, viewEdge] = offset.split(" ") as [Edge, Edge]
    const scrollY = window.scrollY
    // Element top in document space + the fraction down the element we want.
    const targetPoint = scrollY + rectTop + (FRACTION[targetEdge] ?? 0) * height
    return targetPoint - (FRACTION[viewEdge] ?? 0) * window.innerHeight
  }

  function measure() {
    frame = null
    const el = target.value
    if (!el) return

    const rect = el.getBoundingClientRect()
    const start = positionFor(offsets[0], rect.top, rect.height)
    const end = positionFor(offsets[1], rect.top, rect.height)
    const span = end - start
    if (span === 0) {
      progress.value = 0
      return
    }
    progress.value = Math.min(1, Math.max(0, (window.scrollY - start) / span))
  }

  function schedule() {
    if (frame === null) frame = requestAnimationFrame(measure)
  }

  onMounted(() => {
    measure()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
  })

  onUnmounted(() => {
    if (frame !== null) cancelAnimationFrame(frame)
    window.removeEventListener("scroll", schedule)
    window.removeEventListener("resize", schedule)
  })

  return progress
}
