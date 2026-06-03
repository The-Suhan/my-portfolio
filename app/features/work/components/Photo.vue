<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
    images: string[]
    currentIndex: number
    prevIndex: number
}>()

defineEmits<{
    (e: 'navigate', dir: 'prev' | 'next'): void
}>()

const lightboxOpen = ref(false)

const openLightbox = () => {
    lightboxOpen.value = true
    document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
    lightboxOpen.value = false
    document.body.style.overflow = ''
}
</script>

<template>
    <div class="photo-wrapper">
        <transition name="photo-fade" mode="out-in">
            <img :key="images[0]" :src="images[0]" :alt="'Project screenshot'" class="project-img" draggable="false"
                @click="openLightbox" />
        </transition>

        <button class="zoom-btn" @click="openLightbox" aria-label="Resmi büyüt">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
        </button>
    </div>

    <teleport to="body">
        <transition name="lightbox-fade">
            <div v-if="lightboxOpen" class="lightbox-overlay" @click.self="closeLightbox" @keydown.esc="closeLightbox"
                tabindex="0">
                <button class="lightbox-close" @click="closeLightbox" aria-label="Kapat">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <img :src="images[0]" :alt="'Project screenshot'" class="lightbox-img" draggable="false" />
            </div>
        </transition>
    </teleport>
</template>

<style scoped>
.photo-wrapper {
    position: relative;
    width: 100%;
    max-width: 420px;
    aspect-ratio: 16 / 11;
    border-radius: 10px;
    overflow: hidden;
    background: #1a1a24;
    flex-shrink: 0;
    cursor: zoom-in;
}

.project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    pointer-events: none;
    user-select: none;
}

.photo-fade-enter-active,
.photo-fade-leave-active {
    transition: opacity 0.4s ease;
}

.photo-fade-enter-from,
.photo-fade-leave-to {
    opacity: 0;
}

.zoom-btn {
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(15, 15, 26, 0.75);
    backdrop-filter: blur(8px);
    color: #fff;
    cursor: pointer;
    opacity: 0;
    transform: scale(0.85);
    transition: opacity 0.2s, transform 0.2s, background 0.2s;
    z-index: 2;
}

.photo-wrapper:hover .zoom-btn {
    opacity: 1;
    transform: scale(1);
}

.zoom-btn:hover {
    background: rgba(255, 255, 255, 0.2);
}

.lightbox-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.88);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    backdrop-filter: blur(6px);
}

.lightbox-img {
    max-width: 90vw;
    max-height: 85vh;
    border-radius: 12px;
    object-fit: contain;
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);
    pointer-events: none;
    user-select: none;
}

.lightbox-close {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
}

.lightbox-close:hover {
    background: rgba(255, 255, 255, 0.18);
    transform: rotate(90deg);
}

.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
    transition: opacity 0.25s ease;
}

.lightbox-fade-enter-active .lightbox-img,
.lightbox-fade-leave-active .lightbox-img {
    transition: opacity 0.25s ease, transform 0.25s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
    opacity: 0;
}

.lightbox-fade-enter-from .lightbox-img,
.lightbox-fade-leave-to .lightbox-img {
    transform: scale(0.92);
}

@media (max-width: 768px) {
    .photo-wrapper {
        max-width: 100%;
        aspect-ratio: 16 / 10;
        border-radius: 8px;
    }

    .zoom-btn {
        opacity: 1;
        transform: scale(1);
    }
}
</style>