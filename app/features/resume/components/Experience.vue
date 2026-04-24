<script setup>
const items = {
  fullstack: {},
  frontend: {},
  junior: {},
}

const gridRef = ref(null)
const trackRef = ref(null)
const thumbRef = ref(null)
const thumbHeight = ref(40)
const thumbTop = ref(0)

let isDragging = false
let dragStartY = 0
let dragStartScrollTop = 0

function updateThumb() {
  const el = gridRef.value
  if (!el) return
  const track = trackRef.value
  if (!track) return
  const trackH = track.clientHeight
  const ratio = el.clientHeight / el.scrollHeight
  thumbHeight.value = Math.max(32, trackH * ratio)
  const scrollRatio = el.scrollTop / (el.scrollHeight - el.clientHeight || 1)
  thumbTop.value = scrollRatio * (trackH - thumbHeight.value)
}

function onThumbMousedown(e) {
  e.preventDefault()
  isDragging = true
  dragStartY = e.clientY
  dragStartScrollTop = gridRef.value.scrollTop
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', onMouseUp)
}

function onMouseMove(e) {
  if (!isDragging) return
  const el = gridRef.value
  const track = trackRef.value
  const delta = e.clientY - dragStartY
  const scrollRatio = (el.scrollHeight - el.clientHeight) / (track.clientHeight - thumbHeight.value)
  el.scrollTop = dragStartScrollTop + delta * scrollRatio
}

function onMouseUp() {
  isDragging = false
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUp)
}

function onTrackClick(e) {
  if (e.target === thumbRef.value) return
  const track = trackRef.value
  const el = gridRef.value
  const rect = track.getBoundingClientRect()
  const clickY = e.clientY - rect.top
  const ratio = clickY / track.clientHeight
  el.scrollTop = ratio * (el.scrollHeight - el.clientHeight)
}

onMounted(() => {
  gridRef.value?.addEventListener('scroll', updateThumb)
  updateThumb()
})

onUnmounted(() => {
  gridRef.value?.removeEventListener('scroll', updateThumb)
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUp)
})
</script>

<template>
  <div class="tab-content">
    <div class="content-header">
      <h3 class="content-title">{{ $t('resume.experience.title') }}</h3>
    </div>

    <div class="scroll-wrapper">
      <div class="items-grid" ref="gridRef">
        <div v-for="(item, key) in items" :key="key" class="resume-card">
          <span class="card-period">{{ $t(`resume.experience.items.${key}.period`) }}</span>
          <h4 class="card-title">{{ $t(`resume.experience.items.${key}.title`) }}</h4>
          <ul class="card-place">
            <li>{{ $t(`resume.experience.items.${key}.place`) }}</li>
          </ul>
        </div>
      </div>

      <div class="scrollbar-track" ref="trackRef" @click="onTrackClick">
        <div class="scrollbar-thumb" ref="thumbRef" :style="{ height: thumbHeight + 'px', top: thumbTop + 'px' }"
          @mousedown="onThumbMousedown" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.items-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  max-height: 331px;
  overflow-y: scroll;
  scrollbar-width: none;
  padding-right: 0.25rem;
}

.items-grid::-webkit-scrollbar {
  display: none;
}

@media (max-width: 640px) {
  .items-grid {
    grid-template-columns: 1fr;
    max-height: 360px;
  }
}
</style>