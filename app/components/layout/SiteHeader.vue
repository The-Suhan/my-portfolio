<!-- components/layout/SiteHeader.vue -->
<script setup lang="ts">
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const links = [
  { key: "home", to: "/", num: "01" },
  { key: "contact", to: "/contact", num: "02" },
]

const DEFAULT_LANG = { code: "en", label: "EN", name: "English" }

const languages = [
  DEFAULT_LANG,
  { code: "ru", label: "RU", name: "Русский" },
  { code: "tm", label: "TM", name: "Türkmen" },
]

const currentLang = computed(
  () => languages.find((l) => l.code === locale.value) ?? DEFAULT_LANG,
)

const isLangOpen = ref(false)
const isMenuOpen = ref(false)
const langRef = ref<HTMLElement | null>(null)

/** Past the first viewport the bar detaches and only comes back on scroll-up,
 *  so a long page keeps its navigation without a permanent chrome band. */
const pinned = ref(false)
const hidden = ref(false)
let lastY = 0

function closeLang() {
  isLangOpen.value = false
}

function onDocumentClick(e: MouseEvent) {
  if (langRef.value && !langRef.value.contains(e.target as Node)) isLangOpen.value = false
}

function onScroll() {
  const y = window.scrollY
  pinned.value = y > window.innerHeight * 0.9
  hidden.value = pinned.value && y > lastY && y - lastY > 4
  lastY = y
}

const route = useRoute()
watch(() => route.fullPath, () => { isMenuOpen.value = false })
watch(isMenuOpen, (open) => {
  if (import.meta.client) document.body.style.overflow = open ? "hidden" : ""
})

onMounted(() => {
  lastY = window.scrollY
  onScroll()
  window.addEventListener("scroll", onScroll, { passive: true })
  document.addEventListener("click", onDocumentClick)
})
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll)
  document.removeEventListener("click", onDocumentClick)
  if (import.meta.client) document.body.style.overflow = ""
})
</script>

<template>
  <header class="hdr" :class="{ 'hdr--pinned': pinned, 'hdr--hidden': hidden && !isMenuOpen }">
    <NuxtLink to="/" class="hdr__logo">© S — B</NuxtLink>

    <nav class="hdr__nav">
      <ul>
        <li v-for="link in links" :key="link.to">
          <NuxtLink :to="link.to" class="navitem">
            <!-- Two stacked copies: the resting one slides out the top while
                 its twin rises into the same slot. -->
            <span class="navitem__slot">
              <span class="navitem__face">
                {{ $t(`layout.nav.${link.key}`) }}<i>{{ link.num }}</i>
              </span>
              <span class="navitem__face navitem__face--ghost">
                {{ $t(`layout.nav.${link.key}`) }}<i>{{ link.num }}</i>
              </span>
            </span>
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="hdr__right">
      <div ref="langRef" class="lang">
        <button
class="lang__toggle" :aria-expanded="isLangOpen" aria-haspopup="listbox"
          @click.stop="isLangOpen = !isLangOpen">
          {{ currentLang.label }}
          <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path
d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" stroke-width="1.4"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <Transition name="drop">
          <ul v-if="isLangOpen" class="lang__menu" role="listbox">
            <li
v-for="lang in languages" :key="lang.code" role="option"
              :aria-selected="lang.code === locale" :class="{ active: lang.code === locale }">
              <NuxtLink
:to="switchLocalePath(lang.code)" :hreflang="lang.code"
                :lang="lang.code" class="lang__link" @click="closeLang">
                {{ lang.label }} — {{ lang.name }}
              </NuxtLink>
            </li>
          </ul>
        </Transition>
      </div>

      <button
class="burger" :aria-expanded="isMenuOpen" aria-label="Menu"
        @click.stop="isMenuOpen = !isMenuOpen">
        <span :class="{ open: isMenuOpen }" />
        <span :class="{ open: isMenuOpen }" />
      </button>
    </div>
  </header>

  <Transition name="sheet">
    <div v-if="isMenuOpen" class="sheet">
      <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="sheet__link">
        <span class="sheet__num">{{ link.num }}</span>
        {{ $t(`layout.nav.${link.key}`) }}
      </NuxtLink>
    </div>
  </Transition>
</template>

<style scoped>
.hdr {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 32px var(--pad-x);
  color: #fff;
  transition: transform .5s var(--ease-inout), background .4s, backdrop-filter .4s;
}
.hdr--pinned {
  position: fixed;
  padding-top: 18px;
  padding-bottom: 18px;
  background: rgba(9, 9, 9, 0.72);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.hdr--hidden { transform: translateY(-105%); }

.hdr__logo { font-size: 16px; font-weight: 500; }

.hdr__nav ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 60px;
  font-size: 14px;
  font-weight: 500;
}

.navitem { display: block; }
.navitem__slot {
  position: relative;
  display: block;
  height: 20px;
  overflow: hidden;
}
.navitem__face {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  height: 20px;
  transition: transform .4s var(--ease-inout);
}
.navitem__face i {
  font-style: normal;
  font-size: 11px;
  line-height: 11.2px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
}
.navitem__face--ghost { position: absolute; inset: 0; transform: translateY(100%); }
.navitem:hover .navitem__face { transform: translateY(-100%); }
.navitem:hover .navitem__face--ghost { transform: translateY(0); }

.navitem.router-link-active .navitem__face i { color: #fff; }

.hdr__right { display: flex; align-items: center; gap: 14px; }

.lang { position: relative; }
.lang__toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: .04em;
  cursor: pointer;
  transition: background .25s, color .25s;
}
.lang__toggle:hover { background: #fff; color: #111; }

.lang__menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 150px;
  padding: 6px;
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  font-size: 13px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, .6);
}
.lang__menu li {
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.6);
  transition: background .15s, color .15s;
}
/* The anchor carries the padding so the whole row stays clickable. */
.lang__link {
  display: block;
  padding: 8px 10px;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
.lang__menu li:hover, .lang__menu li.active { background: rgba(255, 255, 255, 0.1); color: #fff; }

.drop-enter-active, .drop-leave-active { transition: opacity .18s, transform .18s; }
.drop-enter-from, .drop-leave-to { opacity: 0; transform: translateY(-6px); }

/* Mobile sheet */
.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 34px;
  height: 34px;
  cursor: pointer;
}
.burger span {
  display: block;
  height: 1.5px;
  width: 100%;
  background: currentColor;
  transition: transform .35s var(--ease-inout);
}
.burger span.open:first-child { transform: translateY(3.25px) rotate(45deg); }
.burger span.open:last-child { transform: translateY(-3.25px) rotate(-45deg); }

.sheet {
  position: fixed;
  inset: 0;
  z-index: 55;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  padding: 0 var(--pad-x);
  background: var(--void);
}
.sheet__link {
  display: flex;
  align-items: baseline;
  gap: 16px;
  font-size: clamp(2.2rem, 11vw, 3.4rem);
  font-weight: 500;
  letter-spacing: -0.04em;
  color: #fff;
}
.sheet__num { font-size: 12px; color: rgba(255, 255, 255, 0.4); }
.sheet-enter-active, .sheet-leave-active { transition: opacity .35s var(--ease-inout); }
.sheet-enter-from, .sheet-leave-to { opacity: 0; }

@media (max-width: 860px) {
  .hdr__nav { display: none; }
  .burger { display: flex; }
}
</style>
