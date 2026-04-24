<script setup lang="ts">
const { tm } = useI18n()

interface Project {
  id: string
  number: string
  title: string
  desc: string
  techs: string[]
  liveUrl: string
  githubUrl: string
  images: string[]
}
const projects = computed((): Project[] => {
  const raw = tm('work.projects') as Record<string, Project>
  return Object.values(raw)
})

const currentIndex = ref(0)
const prevIndex = ref(0)
const sliding = ref(false)

const current = computed((): Project => projects.value[currentIndex.value] ?? projects.value[0]!)
const isFirst = computed(() => currentIndex.value === 0)
const isLast = computed(() => currentIndex.value === projects.value.length - 1)

function navigate(dir: 'prev' | 'next') {
  if (sliding.value) return
  const next = dir === 'next'
    ? Math.min(currentIndex.value + 1, projects.value.length - 1)
    : Math.max(currentIndex.value - 1, 0)
  if (next === currentIndex.value) return
  sliding.value = true
  prevIndex.value = currentIndex.value
  currentIndex.value = next
  setTimeout(() => { sliding.value = false }, 450)
}
</script>

<template>
  <main class="work-page">
    <div class="work-inner">

      <div class="work-grid">

        <!-- LEFT: content + social -->
        <div v-if="current" class="left-col">
          <transition :name="currentIndex > prevIndex ? 'content-up' : 'content-down'" mode="out-in">
            <div :key="current.id" class="left-inner">
              <FWorkContent :number="current.number" :title="current.title" :description="current.desc"
                :techs="current.techs" :active="true" />
              <FWorkSocial :live-url="current.liveUrl" :github-url="current.githubUrl" />
            </div>
          </transition>
        </div>

        <!-- RIGHT: photo slider + mobile nav wrapper -->
        <div v-if="current" class="right-col">
          <div class="photo-nav-wrapper">
            <!-- Mobile-only nav arrows (left/right sides of photo) -->
            <button class="nav-arrow mobile-nav mobile-nav-prev" :class="{ disabled: isFirst }" :disabled="isFirst"
              aria-label="Previous project" @click="navigate('prev')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <!-- FWorkPhoto now emits 'navigate' for drag/swipe gestures -->
            <FWorkPhoto :images="current.images" :current-index="currentIndex" :prev-index="prevIndex"
              @navigate="navigate" />

            <button class="nav-arrow mobile-nav mobile-nav-next" :class="{ disabled: isLast }" :disabled="isLast"
              aria-label="Next project" @click="navigate('next')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Desktop nav arrows -->
      <div class="nav-controls">
        <button class="nav-arrow" :class="{ disabled: isFirst }" :disabled="isFirst" aria-label="Previous project"
          @click="navigate('prev')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
            stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button class="nav-arrow" :class="{ disabled: isLast }" :disabled="isLast" aria-label="Next project"
          @click="navigate('next')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
            stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

    </div>
  </main>
</template>

<style scoped>
.work-page {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
}

.work-inner {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  position: relative;
}

.work-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  min-height: 340px;
}

.left-col {
  position: relative;
  min-height: 280px;
}

.left-inner {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.right-col {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}


.photo-nav-wrapper {
  display: contents;
}

.mobile-nav {
  display: none !important;
}

.nav-controls {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

.nav-arrow {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background: #00ff8c;
  color: #0f0f0f;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.18s, transform 0.18s;
}

.nav-arrow:hover:not(.disabled) {
  background: #00e07a;
  transform: scale(1.06);
}

.nav-arrow.disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.content-up-enter-from {
  transform: translateY(30px);
  opacity: 0;
}

.content-up-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

.content-up-enter-to,
.content-up-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.content-down-enter-from {
  transform: translateY(-30px);
  opacity: 0;
}

.content-down-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.content-down-enter-to,
.content-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}

@media (max-width: 768px) {
  .work-page {
    padding: 2rem 1rem;
    align-items: flex-start;
  }

  .work-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    min-height: unset;
  }

  .left-col {
    order: 2;
    min-height: unset;
  }

  .right-col {
    order: 1;
    justify-content: center;
  }

  .photo-nav-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
  }

  .mobile-nav {
    display: flex !important;
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    border-radius: 4px;
  }

  .nav-controls {
    display: none;
  }
}
</style>