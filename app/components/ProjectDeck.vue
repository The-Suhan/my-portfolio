<!-- components/ProjectDeck.vue -->
<script setup lang="ts">
import type { Project } from '~/composables/useProjects'

/**
 * The project deck: each card pins a little further down than the one before
 * and shrinks as the run progresses, so the covered cards visibly recede
 * behind the live one instead of simply disappearing under it.
 */
const STACK_TOP_BASE_PX = 40
const STACK_TOP_STEP_PX = 40
const SCALE_STEP = 0.053

const { projects } = useProjects()
const { open } = usePinModal()

const columnRef = ref<HTMLElement | null>(null)
const progress = useScrollProgress(columnRef, ["start start", "end end"])

/** Without a dedicated work page the card itself is the link: live site when
 *  there is one, otherwise the repo — PIN-gated while the repo stays private. */
function projectHref(project: Project) {
  return project.liveUrl ?? project.githubUrl
}

function openProject(project: Project, event: MouseEvent) {
  if (project.liveUrl || !project.private) return
  event.preventDefault()
  open(project.githubUrl)
}

function cardStyle(index: number) {
  const scale = 1 - progress.value * (projects.value.length - index) * SCALE_STEP
  return { transform: `scale(${scale})` }
}
</script>

<template>
  <section id="projects" class="section section--paper deck">
    <UiBlade tone="paper" />

    <div class="deck__body">
      <div class="deck__head">
        <div class="deck__headinner">
          <h2 class="deck__title">{{ $t('projects.title') }}</h2>
        </div>
      </div>

      <div ref="columnRef" class="deck__col">
        <article
v-for="(project, i) in projects" :key="project.id" class="card"
          :style="{ top: `${STACK_TOP_BASE_PX + i * STACK_TOP_STEP_PX}px` }">
          <div class="card__inner" :style="cardStyle(i)">
            <a
:href="projectHref(project)" target="_blank" rel="noopener" class="card__media"
              @click="openProject(project, $event)">
              <img
                :src="project.images[0]" :alt="`${project.title} — ${project.techs.join(', ')}`" width="1600"
                height="720" loading="lazy" decoding="async"/>
            </a>
            <div class="card__cap">
              <span class="card__num">({{ project.number }})</span>
              <span class="card__title">
                {{ project.title }}
                <span>{{ project.techs.slice(0, 2).join(' · ') }}</span>
              </span>
            </div>
          </div>
        </article>

        <div class="deck__tail" aria-hidden="true" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.deck { padding-top: 112px; }

.deck__body { display: flex; flex-direction: column; gap: 48px; }

.deck__head { width: 100%; }
.deck__headinner { position: static; }

.deck__title {
  font-size: 9vw;
  line-height: 0.9;
  font-weight: 500;
  letter-spacing: -0.05em;
}

.deck__col { display: flex; flex: 1; flex-direction: column; gap: 24px; min-width: 0; }
.deck__tail { height: 75vh; }

.card { position: sticky; }

/* Bare card, as on the reference: the white caption block riding on the white
 * section is what separates one panel from the next — no frame, no shadow. */
.card__inner { background: var(--paper); will-change: transform; }

.card__media {
  display: block;
  height: 50vh;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  background: #eee;
}
.card__media img { width: 100%; height: 100%; object-fit: cover; }

.card__cap {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: baseline;
  background: var(--paper);
  padding-top: 12px;
  padding-bottom: 4px;
  font-size: 14px;
  font-weight: 500;
}
.card__num { color: var(--on-paper-50); }
.card__title { text-align: center; }
.card__title span { display: block; color: var(--on-paper-50); }

@media (min-width: 768px) {
  .deck__body { flex-direction: row; gap: 32px; }
  .deck__head { width: 25%; }
  .deck__headinner { position: sticky; top: 112px; }
  .deck__title { font-size: 3.5vw; }
  .card__media { height: 550px; }
}
</style>
