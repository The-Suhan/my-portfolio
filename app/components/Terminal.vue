<!-- components/Home/Terminal.vue -->
<script setup lang="ts">
const { t } = useI18n()

const roles = computed(() => [
  t('home.hero.roles.name'),
  t('home.hero.roles.uiux'),
  t('home.hero.roles.frontend'),
])

const displayText = ref('')
let roleIndex = 0
let charIndex = 0
let isDeleting = false
let timeout: ReturnType<typeof setTimeout> | null = null

function type() {
  const current = roles.value[roleIndex]!
  if (!isDeleting) {
    displayText.value = current.slice(0, charIndex + 1)
    charIndex++
    if (charIndex === current.length) {
      isDeleting = true
      timeout = setTimeout(type, 1700)
      return
    }
    timeout = setTimeout(type, 70)
  } else {
    displayText.value = current.slice(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      isDeleting = false
      roleIndex = (roleIndex + 1) % roles.value.length
      timeout = setTimeout(type, 350)
      return
    }
    timeout = setTimeout(type, 35)
  }
}

onMounted(() => { timeout = setTimeout(type, 600) })
onUnmounted(() => { if (timeout) clearTimeout(timeout) })
</script>

<template>
  <div class="term-window">
    <div class="term-bar">
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
      <span class="term-title">whoami.sh</span>
    </div>

    <div class="term-body">
      <div class="term-line">
        <span class="term-prompt">$</span>
        <span class="term-cmd"> whoami</span>
      </div>
      <span class="term-out">
        <span class="accent">suhan_begenjov</span> · web developer · ashgabat, tm
      </span>

      <div class="term-line">
        <span class="term-prompt">$</span>
        <span class="term-cmd"> echo $ROLE</span>
      </div>
      <span class="term-h1">
        <span class="role-text">{{ displayText }}</span><span class="blinker"></span>
      </span>

      <div class="term-line">
        <span class="term-prompt">$</span>
        <span class="term-cmd"> cat about.txt</span>
      </div>
      <span class="term-out">{{ $t('home.hero.description') }}</span>

      <div class="term-line">
        <span class="term-prompt">$</span>
        <span class="term-cmd"> git status</span>
      </div>
      <span class="term-out">
        <span class="amber">●</span> on branch
        <span class="accent">available-for-hire</span> — nothing to commit, ready to ship
      </span>
    </div>
  </div>
</template>

<style scoped>
.term-window {
  flex: 1 1 480px;
  min-width: 320px;
  background: var(--bg-panel);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 30px 80px -20px rgba(0,0,0,0.6);
}
.term-bar {
  display: flex; align-items: center; gap: 8px;
  padding: 11px 14px;
  background: var(--bg-elevated);
  border-bottom: 1px solid var(--border-subtle);
}
.dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
.dot-red { background: #ff5f57; }
.dot-yellow { background: #febc2e; }
.dot-green { background: #28c840; }
.term-title { margin-left: 8px; font-size: 11.5px; color: var(--text-tertiary); }

.term-body {
  padding: 26px 24px 30px;
  min-height: 320px;
  font-size: 14.5px;
  line-height: 1.85;
}
.term-line { white-space: pre-wrap; word-break: break-word; }
.term-prompt { color: var(--mint); }
.term-cmd { color: var(--text-primary); }
.term-out { color: var(--text-secondary); display: block; margin: 2px 0 10px; }
.term-out .accent { color: var(--mint); }
.term-out .amber { color: var(--amber); }
.accent { color: var(--mint); }
.amber { color: var(--amber); }

.term-h1 {
  font-size: clamp(1.5rem, 2.6vw, 2.1rem);
  font-weight: 800;
  color: var(--mint);
  display: block;
  margin: 4px 0 10px;
  letter-spacing: -0.01em;
}
.blinker {
  display: inline-block; width: 9px; height: 1.1em;
  background: var(--mint);
  vertical-align: -2px;
  animation: blink 1s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }
</style>
