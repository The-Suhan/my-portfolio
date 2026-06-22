<!-- components/Layout/Titlebar.vue -->
<script setup lang="ts">
const { locale, setLocale } = useI18n()
const isLangOpen = ref(false)
const langDropdown = ref<HTMLElement | null>(null)

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'tm', label: 'TM' },
]

const currentLang = computed(() => languages.find(l => l.code === locale.value) ?? languages[0]!)

const selectLang = async (code: string) => {
  await setLocale(code as any)
  isLangOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', (e) => {
    if (langDropdown.value && !langDropdown.value.contains(e.target as Node)) {
      isLangOpen.value = false
    }
  })
})
</script>

<template>
  <header class="titlebar">
    <div class="titlebar-left">
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
      <span class="titlebar-path">
        suhan@dev <span class="sep">~</span> portfolio <span class="sep">—</span> zsh
      </span>
    </div>

    <div class="titlebar-right" ref="langDropdown">
      <button class="lang-toggle" @click.stop="isLangOpen = !isLangOpen" aria-haspopup="listbox">
        <span class="lang-flag">🌐</span>
        <span>{{ currentLang.label }}</span>
        <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </button>

      <Transition name="dropdown">
        <ul v-if="isLangOpen" class="lang-menu" role="listbox">
          <li v-for="lang in languages" :key="lang.code" role="option" :class="{ active: lang.code === locale }"
            @click="selectLang(lang.code)">
            {{ lang.label }} — {{ lang.code === 'en' ? 'English' : lang.code === 'ru' ? 'Русский' : 'Türkmen' }}
          </li>
        </ul>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
.titlebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0 14px;
  background: var(--bg-panel);
  border-bottom: 1px solid var(--border-subtle);
  flex-shrink: 0;
  position: relative;
  z-index: 200;
}

.titlebar-left {
  display: flex;
  align-items: center;
  gap: 9px;
}

.dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  display: inline-block;
}

.dot-red {
  background: #ff5f57;
}

.dot-yellow {
  background: #febc2e;
}

.dot-green {
  background: #28c840;
}

.titlebar-path {
  margin-left: 10px;
  font-size: 12px;
  color: var(--text-tertiary);
  letter-spacing: 0.02em;
}

.sep {
  color: var(--border-strong);
  margin: 0 2px;
}

.titlebar-right {
  position: relative;
}

.lang-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  padding: 5px 10px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: 11px;
  letter-spacing: 0.05em;
  transition: border-color .2s, color .2s;
}

.lang-toggle:hover {
  border-color: var(--mint-dim);
  color: var(--mint);
}

.lang-flag {
  font-size: 11px;
}

.lang-menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  background: var(--bg-elevated);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-sm);
  padding: 4px;
  min-width: 140px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  z-index: 300;
  font-size: 11.5px;
}

.lang-menu li {
  padding: 7px 9px;
  border-radius: 5px;
  cursor: pointer;
  color: var(--text-secondary);
  transition: background .15s, color .15s;
}

.lang-menu li:hover,
.lang-menu li.active {
  background: var(--bg-panel);
  color: var(--mint);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity .18s, transform .18s;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (max-width: 768px) {
  .titlebar-path {
    display: none;
  }
}
</style>
