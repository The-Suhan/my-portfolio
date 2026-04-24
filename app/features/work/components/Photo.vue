<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
    images: string[]
    currentIndex: number  
    prevIndex: number    
}>()

const emit = defineEmits<{
    (e: 'navigate', dir: 'prev' | 'next'): void
}>()

const imgIndex = ref(0)
const sliding = ref(false)
const slideDirection = ref<'left' | 'right'>('left')

watch(() => props.currentIndex, (next, prev) => {
    slideDirection.value = next > prev ? 'left' : 'right'
    imgIndex.value = 0
})

function slide(dir: 'prev' | 'next') {
    if (sliding.value) return
    slideDirection.value = dir === 'next' ? 'left' : 'right'
    sliding.value = true
    setTimeout(() => {
        if (dir === 'next') {
            imgIndex.value = (imgIndex.value + 1) % props.images.length
        } else {
            imgIndex.value = (imgIndex.value - 1 + props.images.length) % props.images.length
        }
        sliding.value = false
    }, 320)
}

const dragStartX = ref<number | null>(null)
const dragCurrentX = ref<number | null>(null)
const isDragging = ref(false)
const DRAG_THRESHOLD = 50 

function onMouseDown(e: MouseEvent) {
    dragStartX.value = e.clientX
    dragCurrentX.value = e.clientX
    isDragging.value = false
}

function onMouseMove(e: MouseEvent) {
    if (dragStartX.value === null) return
    dragCurrentX.value = e.clientX
    if (Math.abs(e.clientX - dragStartX.value) > 5) {
        isDragging.value = true
    }
}

function onMouseUp(e: MouseEvent) {
    if (dragStartX.value === null) return
    const delta = e.clientX - dragStartX.value

    if (isDragging.value && Math.abs(delta) >= DRAG_THRESHOLD) {
        if (delta < 0) {
            emit('navigate', 'next')
        } else {
            emit('navigate', 'prev')
        }
    }

    dragStartX.value = null
    dragCurrentX.value = null
    isDragging.value = false
}

function onMouseLeave() {
    dragStartX.value = null
    dragCurrentX.value = null
    isDragging.value = false
}

const touchStartX = ref<number | null>(null)

function onTouchStart(e: TouchEvent) {
    touchStartX.value = e.touches[0]!.clientX
}

function onTouchEnd(e: TouchEvent) {
    if (touchStartX.value === null) return
    const delta = e.changedTouches[0]!.clientX - touchStartX.value
    if (Math.abs(delta) >= DRAG_THRESHOLD) {
        emit('navigate', delta < 0 ? 'next' : 'prev')
    }
    touchStartX.value = null
}
</script>

<template>
    <div class="photo-wrapper" :class="{ 'is-dragging': isDragging }" @mousedown="onMouseDown" @mousemove="onMouseMove"
        @mouseup="onMouseUp" @mouseleave="onMouseLeave" @touchstart.passive="onTouchStart"
        @touchend.passive="onTouchEnd">
        <div class="photo-viewport">
            <transition :name="slideDirection === 'left' ? 'slide-left' : 'slide-right'" mode="out-in">
                <img :key="imgIndex + '-' + currentIndex" :src="images[imgIndex]"
                    :alt="`Project screenshot ${imgIndex + 1}`" class="project-img" draggable="false" />
            </transition>

            <!-- Nav arrows – only show if multiple images -->
            <template v-if="images.length > 1">
                <button class="nav-btn nav-prev" @click.stop="slide('prev')" aria-label="Previous image">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                        stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>
                <button class="nav-btn nav-next" @click.stop="slide('next')" aria-label="Next image">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                        stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </template>

            <!-- Drag hint overlay (faint arrows shown on hover) -->
            <div class="drag-hint drag-hint-left">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </div>
            <div class="drag-hint drag-hint-right">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </div>
        </div>
    </div>
</template>

<style scoped>
.photo-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    user-select: none;
    -webkit-user-select: none;
}

.photo-wrapper.is-dragging {
    cursor: grabbing;
}

.photo-viewport {
    position: relative;
    width: 100%;
    max-width: 420px;
    aspect-ratio: 16 / 11;
    border-radius: 10px;
    overflow: hidden;
    background: #1a1a24;
    cursor: grab;
}

.photo-viewport:active {
    cursor: grabbing;
}

.project-img {
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.drag-hint {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.25);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.25s ease;
    z-index: 3;
}

.drag-hint-left {
    left: 12px;
}

.drag-hint-right {
    right: 12px;
}

.photo-viewport:hover .drag-hint {
    opacity: 1;
}

.nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #00ff8c;
    color: #0f0f0f;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transition: background 0.2s, transform 0.2s;
}

.nav-btn:hover {
    background: #00e07a;
    transform: translateY(-50%) scale(1.1);
}

.nav-prev {
    left: 10px;
}

.nav-next {
    right: 10px;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
    transition: transform 0.32s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.32s ease;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.slide-left-enter-from {
    transform: translateX(100%);
    opacity: 0.6;
}

.slide-left-leave-to {
    transform: translateX(-100%);
    opacity: 0.6;
}

.slide-left-enter-to,
.slide-left-leave-from {
    transform: translateX(0);
    opacity: 1;
}

.slide-right-enter-from {
    transform: translateX(-100%);
    opacity: 0.6;
}

.slide-right-leave-to {
    transform: translateX(100%);
    opacity: 0.6;
}

.slide-right-enter-to,
.slide-right-leave-from {
    transform: translateX(0);
    opacity: 1;
}

/* ── Mobile ── */
@media (max-width: 768px) {
    .photo-wrapper {
        justify-content: center;
    }

    .photo-viewport {
        max-width: 100%;
        aspect-ratio: 16 / 10;
        border-radius: 8px;
    }
}
</style>