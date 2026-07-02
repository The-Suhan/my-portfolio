<!-- pages/resume.vue -->
<script setup lang="ts">
const activeTab = ref('experience')
const tabs = ['experience', 'education', 'skills', 'about']
const { t } = useI18n()

useHead({
  title: t('resume.whyHireMe.title'),
  script: [{ src: 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js', defer: true }],
})
</script>

<template>
  <section class="view">
    <div class="resume-layout">
      <aside class="resume-rail">
        <p class="pane-eyebrow">// why_hire_me</p>
        <h2 class="rail-title">{{ $t('resume.whyHireMe.title') }}</h2>

        <div class="rail-tabs">
          <button v-for="(tab, i) in tabs" :key="tab" class="rail-tab" :class="{ active: activeTab === tab }"
            @click="activeTab = tab">
            0{{ i + 1 }} {{ $t(`resume.tabs.${tab}`) }}
          </button>
        </div>
      </aside>

      <div class="resume-content">
        <Transition name="fade-up" mode="out-in">
          <FResumeEducation v-else-if="activeTab === 'education'" key="edu" />
          <FResumeSkills v-else-if="activeTab === 'skills'" key="skills" />
          <FResumeAboutme v-else-if="activeTab === 'about'" key="about" />
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.view {
  animation: fadeUp .5s var(--ease);
}

.resume-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 64px;
}

.resume-rail {
  position: sticky;
  top: 56px;
  align-self: start;
}

.rail-title {
  font-size: clamp(1.6rem, 2.6vw, 2.1rem);
  font-weight: 800;
  line-height: 1.25;
  margin: 0 0 36px;
  letter-spacing: -0.01em;
}

.rail-tabs {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.rail-tab {
  text-align: left;
  background: transparent;
  border: 1px solid var(--border-subtle);
  color: var(--text-tertiary);
  font-family: var(--font-mono);
  font-size: 12.5px;
  padding: 13px 16px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  letter-spacing: 0.02em;
  transition: all .2s var(--ease);
}

.rail-tab:hover {
  border-color: var(--border-strong);
  color: var(--text-secondary);
}

.rail-tab.active {
  background: var(--bg-elevated);
  border-color: var(--mint-dim);
  color: var(--mint);
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity .25s, transform .25s;
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 1100px) {
  .resume-layout {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .resume-rail {
    position: static;
  }

  .rail-tabs {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
