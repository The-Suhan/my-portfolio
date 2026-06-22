<!-- pages/work.vue -->
<script setup lang="ts">
const { open } = usePinModal()
const { tm } = useI18n()
const { t } = useI18n()


useHead({
  title: t('projects.title'),
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js',
      defer: true
    }
  ]
})

interface Project {
  id: string
  number: string
  title: string
  desc: string
  techs: string[]
  liveUrl: string
  githubUrl: string
  images: string[]
  private?: boolean
}

const projects = computed((): Project[] => {
  const raw = tm('work.projects') as Record<string, any>
  return Object.values(raw).map((p: any) => ({
    ...p,
    images: Array.isArray(p.images) ? p.images : Object.values(p.images ?? {}),
  }))
})

function handleGithub(project: Project) {
  if (project.private) {
    open(project.githubUrl)
  } else {
    window.open(project.githubUrl, '_blank', 'noopener')
  }
}

// --- Lightbox ---
const lightboxSrc = ref<string | null>(null)
const lightboxAlt = ref('')

function openLightbox(src: string, alt: string) {
  lightboxSrc.value = src
  lightboxAlt.value = alt
}

function closeLightbox() {
  lightboxSrc.value = null
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeLightbox()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <section class="view">
    <p class="pane-eyebrow">$ ls ./projects</p>
    <div class="projects-list">
      <div v-for="project in projects" :key="project.id" class="project-row">
        <span class="project-idx">{{ project.number }}</span>

        <div class="project-body">
          <h3>{{ project.title }}</h3>
          <p>{{ project.desc }}</p>
          <div class="project-techs">
            <span v-for="tech in project.techs" :key="tech" class="tech-pill">{{ tech }}</span>
          </div>
        </div>

        <div class="project-thumb">
          <img :src="project.images[0]" :alt="project.title" loading="lazy" class="clickable-img"
            @click="openLightbox(project.images[0], project.title)" />
          <div class="project-actions">
            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener" class="thumb-btn"
              :aria-label="$t('work.liveProject')">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
            <button class="thumb-btn" :aria-label="$t('work.githubRepo')" @click="handleGithub(project)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Transition name="lightbox-fade">
      <div v-if="lightboxSrc" class="lightbox-overlay" @click.self="closeLightbox">
        <button class="lightbox-close" aria-label="Kapat" @click="closeLightbox">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <img :src="lightboxSrc" :alt="lightboxAlt" class="lightbox-img" />
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.view {
  animation: fadeUp .5s var(--ease);
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: var(--border-subtle);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.project-row {
  background: var(--bg-panel);
  padding: 36px 32px;
  display: grid;
  grid-template-columns: 90px 1fr 280px;
  gap: 32px;
  align-items: center;
  transition: background .25s;
}

.project-row:hover {
  background: var(--bg-elevated);
}

.project-idx {
  font-size: 2.4rem;
  font-weight: 800;
  color: var(--border-strong);
  transition: color .25s;
}

.project-row:hover .project-idx {
  color: var(--mint-dim);
}

.project-body h3 {
  font-size: 1.3rem;
  margin: 0 0 8px;
}

.project-body p {
  font-size: 12.5px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0 0 12px;
  max-width: 560px;
}

.project-techs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tech-pill {
  font-size: 10.5px;
  color: var(--mint);
  background: var(--mint-glow);
  padding: 3px 9px;
  border-radius: 999px;
}

.project-thumb {
  width: 100%;
  aspect-ratio: 16/10;
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 1px solid var(--border-subtle);
  position: relative;
}

.project-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .4s var(--ease);
}

.project-row:hover .project-thumb img {
  transform: scale(1.05);
}

.clickable-img {
  cursor: zoom-in;
}

.project-actions {
  position: absolute;
  bottom: 8px;
  right: 8px;
  display: flex;
  gap: 6px;
  opacity: 0;
  transition: opacity .2s;
}

.project-row:hover .project-actions {
  opacity: 1;
}

.thumb-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(10, 14, 20, 0.85);
  border: 1px solid var(--border-strong);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: border-color .2s, color .2s;
  text-decoration: none;
}

.thumb-btn:hover {
  border-color: var(--mint);
  color: var(--mint);
}

/* Lightbox */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(6, 9, 14, 0.92);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 40px;
}

.lightbox-img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-subtle);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.lightbox-close {
  position: fixed;
  top: 28px;
  right: 28px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(10, 14, 20, 0.85);
  border: 1px solid var(--border-strong);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: border-color .2s, color .2s;
}

.lightbox-close:hover {
  border-color: var(--mint);
  color: var(--mint);
}

.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity .2s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

@media (max-width: 900px) {
  .project-row {
    grid-template-columns: 1fr;
  }

  .project-idx {
    display: none;
  }

  .lightbox-overlay {
    padding: 16px;
  }

  .lightbox-close {
    top: 16px;
    right: 16px;
  }
}
</style>