<!-- components/layout/SiteFooter.vue -->
<script setup lang="ts">
const links = [
  { key: "home", to: "/" },
  { key: "contact", to: "/contact" },
]

const socials = [
  { key: "github", label: "GitHub", href: "https://github.com/The-Suhan" },
  { key: "telegram", label: "Telegram", href: "https://t.me/B_Suhan" },
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/suhan_09.06" },
  { key: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@suhan_09.06" },
]

const year = new Date().getFullYear()

// Ashgabat is UTC+5 year-round, so the clock is derived rather than read off
// the visitor's machine — it says where *he* is, not where they are.
const clock = ref("")
let timer: ReturnType<typeof setInterval> | null = null

function tick() {
  clock.value = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "Asia/Ashgabat",
  }).format(new Date())
}

onMounted(() => {
  tick()
  timer = setInterval(tick, 30_000)
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <footer class="ftr">
    <div class="ftr__top">
      <div class="ftr__col">
        <a
v-for="social in socials" :key="social.key" :href="social.href" target="_blank"
          rel="me noopener noreferrer" class="ftr__chip">{{ social.label }}</a>
      </div>

      <nav class="ftr__nav">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to">
          {{ $t(`layout.nav.${link.key}`) }}
        </NuxtLink>
        <a href="/cv/cv.pdf" download>{{ $t('home.social.downloadCV') }}</a>
      </nav>
    </div>

    <div class="ftr__bottom">
      <h2 class="ftr__name">
        {{ $t('home.hero.roles.name').split(' ')[0] }}<br/>{{ $t('home.hero.roles.name').split(' ').slice(1).join(' ') }}
      </h2>
      <div class="ftr__meta">
        <span>© {{ year }}</span>
        <span v-if="clock">{{ clock }} GMT+5</span>
        <span>{{ $t('layout.footer.builtWith') }} Nuxt</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.ftr {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 420px;
  padding: 56px var(--pad-x) 40px;
  background: var(--footer);
  color: #fff;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.ftr__top { display: flex; justify-content: space-between; gap: 32px; }

.ftr__col { display: flex; flex-direction: column; gap: 8px; align-items: flex-start; }
.ftr__chip {
  min-width: 140px;
  padding: 7px 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 11px;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  transition: background .25s, color .25s;
}
.ftr__chip:hover { background: #fff; color: #111; }

.ftr__nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: right;
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}
.ftr__nav a { transition: color .2s; }
.ftr__nav a:hover { color: rgba(255, 255, 255, 0.5); }

.ftr__bottom {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-top: 96px;
}
.ftr__name {
  margin-left: -2px;
  font-size: clamp(2.6rem, 9vw, 6rem);
  line-height: 0.9;
  font-weight: 500;
  letter-spacing: -0.04em;
}
.ftr__meta {
  display: flex;
  gap: 28px;
  padding-bottom: 8px;
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
}

@media (max-width: 720px) {
  .ftr__bottom { flex-direction: column; align-items: flex-start; margin-top: 64px; }
  .ftr__meta { flex-direction: column; gap: 6px; }
}
</style>
