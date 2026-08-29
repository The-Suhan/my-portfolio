<!-- components/Hero.vue -->
<script setup lang="ts">
/**
 * Hero, in two independent layers:
 *
 * - A `sticky` backdrop that pins at the top of the page and stays there for
 *   good — the next section (opaque, z-index 2) slides up and covers it. It
 *   only drifts up slightly while that happens, which is what makes it feel
 *   alive underneath. It also holds the hero's 100vh slot in document flow,
 *   so the next section naturally starts one viewport down.
 * - The text, absolutely positioned, scrolling away at normal speed.
 */

/** How far (vh) the pinned backdrop drifts up over the first viewport. */
const BACKDROP_DRIFT_VH = -10
/** Extra drift on the image inside it, for a two-layer parallax. */
const IMAGE_DRIFT_VH = -10

const { t } = useI18n()

const textRef = ref<HTMLElement | null>(null)
const progress = useScrollProgress(textRef, ["start start", "end start"])

const backdropStyle = computed(() => ({
  transform: `translateY(${progress.value * BACKDROP_DRIFT_VH}vh)`,
}))
const imageStyle = computed(() => ({
  transform: `translateY(${progress.value * IMAGE_DRIFT_VH}vh)`,
}))

const name = computed(() => t("home.hero.roles.name").split(" "))

// Rotating role, typed out one character at a time — the one piece of the
// old terminal treatment worth keeping, restyled as a quiet caption.
const roles = computed(() => [
  t("home.hero.roles.frontend"),
  t("home.hero.roles.uiux"),
  t("home.hero.roles.android"),
])

const typed = ref("")
let roleIndex = 0
let charIndex = 0
let deleting = false
let timeout: ReturnType<typeof setTimeout> | null = null

function type() {
  const current = roles.value[roleIndex] ?? ""
  if (!deleting) {
    typed.value = current.slice(0, charIndex + 1)
    charIndex++
    if (charIndex === current.length) {
      deleting = true
      timeout = setTimeout(type, 1900)
      return
    }
    timeout = setTimeout(type, 65)
  } else {
    typed.value = current.slice(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      deleting = false
      roleIndex = (roleIndex + 1) % roles.value.length
      timeout = setTimeout(type, 320)
      return
    }
    timeout = setTimeout(type, 30)
  }
}

onMounted(() => { timeout = setTimeout(type, 900) })
onUnmounted(() => { if (timeout) clearTimeout(timeout) })
</script>

<template>
  <section class="backdrop" :style="backdropStyle">
    <div class="backdrop__layer" :style="imageStyle">
      <div class="backdrop__img" />
    </div>
    <div class="backdrop__scrim" />
  </section>

  <div ref="textRef" class="herotext">
    <div class="herotext__row">
      <h1 class="herotext__name" :aria-label="$t('home.hero.roles.name')">
        <span
v-for="(word, i) in name" :key="word" aria-hidden="true"
          :style="{ animationDelay: `${0.5 + i * 0.15}s` }">{{ word }}</span>
      </h1>

      <div class="herotext__aside">
        <span class="herotext__role">
          {{ $t('home.hero.greeting') }} <b>{{ typed }}</b><i class="caret" />
        </span>
        <p class="herotext__desc">{{ $t('home.hero.description') }}</p>
        <a href="#projects" class="btn btn--solid">{{ $t('projects.title') }}</a>
      </div>
    </div>

    <span class="herotext__scroll" aria-hidden="true">scroll</span>
  </div>
</template>

<style scoped>
.backdrop {
  position: sticky;
  top: 0;
  z-index: 1;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: var(--void);
  will-change: transform;
}
.backdrop__layer { position: absolute; inset: 0; will-change: transform; }
.backdrop__img {
  position: absolute;
  inset: -5%;
  background: url('/bgHero.webp') center / cover no-repeat;
  /* The file already ships desaturated, so only the exposure is set here:
     the source is a bright daylight shot and the name sits on top of it. */
  filter: contrast(1.05) brightness(0.45);
  animation: heroIn 1.5s cubic-bezier(0.33, 1, 0.68, 1) both;
}
@keyframes heroIn {
  from { transform: scale(1.35); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.backdrop__scrim {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(to top, rgba(0, 0, 0, .75), rgba(0, 0, 0, .1) 55%),
    rgba(0, 0, 0, .2);
}

.herotext {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 32px var(--pad-x) 48px;
  color: #fff;
}

.herotext__row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
}

.herotext__name {
  display: flex;
  flex-direction: column;
  margin-left: -4px;
  font-size: clamp(3rem, 12vw, 8vw);
  line-height: 0.9;
  font-weight: 500;
  letter-spacing: -0.045em;
}
.herotext__name span {
  display: block;
  animation: riseIn 1.2s var(--ease-expo) both;
}
@keyframes riseIn {
  from { opacity: 0; transform: translateY(80px); }
  to { opacity: 1; transform: none; }
}

.herotext__aside {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  max-width: 340px;
  padding-bottom: 8px;
  animation: riseIn 1.2s var(--ease-expo) .8s both;
}
.herotext__role { font-size: 13px; letter-spacing: .04em; color: rgba(255, 255, 255, 0.65); }
.herotext__role b { font-weight: 600; color: #fff; }
.caret {
  display: inline-block;
  width: 1.5px;
  height: 1em;
  margin-left: 2px;
  background: #fff;
  vertical-align: -2px;
  animation: blink 1s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }

.herotext__desc { font-size: 17px; line-height: 1.45; font-weight: 500; }

.herotext__scroll {
  position: absolute;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 11px;
  letter-spacing: .3em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 860px) {
  .herotext__row { flex-direction: column; align-items: flex-start; }
  .herotext__scroll { display: none; }
}
</style>
