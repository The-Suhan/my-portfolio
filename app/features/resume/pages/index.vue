<script setup>
const activeTab = ref('experience')

const tabs = [
  { key: 'experience' },
  { key: 'education' },
  { key: 'skills' },
  { key: 'about' },
]
</script>

<template>
  <section class="resume-page">
    <div class="resume-container">
      <!-- LEFT PANEL -->
      <aside class="resume-left">
        <div class="left-content">
          <h2 class="why-title">{{ $t('resume.whyHireMe.title') }}</h2>

          <nav class="tab-nav">
            <button v-for="tab in tabs" :key="tab.key" class="tab-btn" :class="{ active: activeTab === tab.key }"
              @click="activeTab = tab.key">
              {{ $t(`resume.tabs.${tab.key}`) }}
            </button>
          </nav>
        </div>
      </aside>

      <!-- RIGHT PANEL -->
      <main class="resume-right">
        <Transition name="fade-up" mode="out-in">
          <FResumeExperience v-if="activeTab === 'experience'" key="experience" />
          <FResumeEducation v-else-if="activeTab === 'education'" key="education" />
          <FResumeSkills v-else-if="activeTab === 'skills'" key="skills" />
          <FResumeAboutme v-else-if="activeTab === 'about'" key="about" />
        </Transition>
      </main>
    </div>
  </section>
</template>


<style scoped>
.resume-page {
  min-height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.resume-container {
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
}

.resume-left {
  position: sticky;
  top: 2rem;
}

.left-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.why-title {
  font-family: 'Space Mono', monospace;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.why-desc {
  font-family: 'Space Mono', monospace;
  font-size: 0.85rem;
  color: #6b7280;
  line-height: 1.6;
  max-width: 320px;
}

.tab-nav {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.tab-btn {
  width: 70%;
  padding: 1rem 1.5rem;
  background: #2a2a33;
  border: none;
  border-radius: 6px;
  color: #9ca3af;
  font-family: 'Space Mono', monospace;
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  cursor: pointer;
  text-align: center;
  transition: all 0.25s ease;
}

.tab-btn:hover {
  background: #32323e;
  color: #e5e7eb;
}

.tab-btn.active {
  background: #00ff8c;
  color: #1c1c22;
  font-weight: 700;
}

.resume-right {
  min-height: 400px;
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 768px) {
  .resume-page {
    padding: 1.5rem 1rem;
  }

  .resume-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .resume-left {
    margin-left: 60px;
    position: static;
  }

  .why-desc {
    max-width: 100%;
  }
}
</style>