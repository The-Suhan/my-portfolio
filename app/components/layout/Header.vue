<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const isLangOpen = ref(false)
const langDropdown = ref<HTMLElement | null>(null)

const languages = [
  { code: "en", label: "EN", flag: "/flags/usa.png" },
  { code: "ru", label: "RU", flag: "/flags/ru.png" },
  { code: "tm", label: "TM", flag: "/flags/tm.png" },
]

const currentLang = computed(
  () => languages.find((l) => l.code === locale.value) ?? languages[0]!
)

const selectLang = async (code: string) => {
  await setLocale(code as any)
  isLangOpen.value = false
}

onMounted(() => {
  document.addEventListener("click", (e) => {
    if (langDropdown.value && !langDropdown.value.contains(e.target as Node)) {
      isLangOpen.value = false
    }
  })
})

const navLinks = [
  { label: "layout.nav.home", to: "/" },
  { label: "layout.nav.resume", to: "/resume" },
  { label: "layout.nav.work", to: "/work" },
  { label: "layout.nav.contact", to: "/contact" },
];
</script>

<template>
  <header class="header">
    <div class="container">
      <NuxtLink to="/" class="logo">
        Suxan<span class="logo-dot">OFF</span>
      </NuxtLink>

      <nav class="nav">
        <NuxtLink v-for="item in navLinks" :key="item.to" :to="item.to" class="nav-link">
          {{ $t(item.label) }}
        </NuxtLink>

        <div ref="langDropdown" class="lang-wrapper">
          <button class="lang-toggle" @click.stop="isLangOpen = !isLangOpen">
            <img :src="currentLang.flag" :alt="currentLang.code" class="flag-img" />
            <span>{{ currentLang.label }}</span>
            <svg class="chevron" :class="{ open: isLangOpen }" width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>

          <Transition name="dropdown">
            <ul v-if="isLangOpen" class="lang-menu">
              <li v-for="lang in languages" :key="lang.code" class="lang-item" :class="{ active: lang.code === locale }"
                @click="selectLang(lang.code)">
                <img :src="lang.flag" :alt="lang.code" class="flag-img" />
                <span>{{ lang.label }}</span>
                <svg v-if="lang.code === locale" class="check-icon" width="12" height="12" viewBox="0 0 12 12"
                  fill="none">
                  <path d="M2 6L5 9L10 3" stroke="#00dc82" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </li>
            </ul>
          </Transition>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: rgba(15, 15, 15, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #1e1e1e;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: "Courier New", Courier, monospace;
  font-size: 1.5rem;
  font-weight: 700;
  color: #f1f1f1;
  text-decoration: none;
  letter-spacing: -0.03em;
  transition: color 0.2s;
}

.logo-dot {
  color: #00dc82;
}

.logo:hover {
  color: #00dc82;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  font-family: "Courier New", Courier, monospace;
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 550;
  letter-spacing: 0.01em;
  position: relative;
  padding-bottom: 0.25rem;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #00dc82;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -1.15rem;
  left: 0;
  right: 0;
  height: 2px;
  background: #00dc82;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.nav-link.router-link-active,
.nav-link.router-link-exact-active {
  color: #00dc82;
}

.nav-link.router-link-active::after,
.nav-link.router-link-exact-active::after {
  transform: scaleX(1);
}

.hire-btn {
  display: inline-flex;
  align-items: center;
  background: #00dc82;
  color: #0a0a0a;
  text-decoration: none;
  font-family: "Courier New", Courier, monospace;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  padding: 0.55rem 1.2rem;
  border-radius: 999px;
  transition: background 0.2s, transform 0.15s;
}

.hire-btn:hover {
  background: #00f090;
  transform: translateY(-1px);
}

.lang-wrapper {
  position: relative;
}

.lang-toggle {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  background: transparent;
  border: 1px solid #2a2a2a;
  color: #9ca3af;
  padding: 0.35rem 0.65rem;
  border-radius: 8px;
  cursor: pointer;
  font-family: "Courier New", Courier, monospace;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  transition: border-color 0.2s, color 0.2s;
  white-space: nowrap;
}

.lang-toggle:hover {
  border-color: #00dc82;
  color: #00dc82;
}

.flag-img {
  width: 18px;
  height: 13px;
  object-fit: cover;
  border-radius: 2px;
  display: block;
}

.chevron {
  color: currentColor;
  transition: transform 0.2s ease;
  flex-shrink: 0;
}

.chevron.open {
  transform: rotate(180deg);
}

.lang-menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: #141414;
  border: 1px solid #2a2a2a;
  border-radius: 10px;
  padding: 0.3rem;
  list-style: none;
  margin: 0;
  min-width: 110px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  z-index: 200;
  overflow: hidden;
}

.lang-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.65rem;
  border-radius: 7px;
  cursor: pointer;
  font-family: "Courier New", Courier, monospace;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  color: #9ca3af;
  transition: background 0.15s, color 0.15s;
}

.lang-item:hover {
  background: #1e1e1e;
  color: #f1f1f1;
}

.lang-item.active {
  color: #00dc82;
}

.check-icon {
  margin-left: auto;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (max-width: 768px) {
  .nav {
    gap: 1.2rem;
  }

  .nav-link {
    font-size: 0.8rem;
  }

  .hire-btn {
    padding: 0.45rem 0.9rem;
    font-size: 0.78rem;
  }
}
</style>