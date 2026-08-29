<!-- pages/index.vue -->
<script setup lang="ts">
const { t } = useI18n()

useSeo(() => ({
  title: t('seo.home.title'),
  description: t('seo.home.description'),
  path: '/',
  type: 'profile',
}))

// The homepage doubles as the author's profile page.
const site = useSiteUrl()
const route = useRoute()
const pageUrl = computed(() => absoluteUrl(site, route.path))
useJsonLd(() => ({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${pageUrl.value}#profilepage`,
  url: pageUrl.value,
  name: t('seo.home.title'),
  description: t('seo.home.description'),
  mainEntity: { '@id': `${site}/#person` },
  isPartOf: { '@id': `${site}/#website` },
}))

// Hero backdrop is the LCP element — ask the browser for it early.
useHead({
  link: [{ rel: 'preload', as: 'image', href: '/bgHero.webp', fetchpriority: 'high' }],
})
</script>

<template>
  <div>
    <Hero />
    <About />
    <ProjectDeck />

    <section class="section section--ink cta">
      <UiBlade tone="ink" />

      <div class="rail">
        <span class="rail__num">(02)</span>
        <span>{{ $t('layout.nav.contact') }}</span>
      </div>

      <div class="cta__body">
        <UiSplitLines as="h2" class="display cta__title" :text="t('contact.title')" />
        <UiReveal :delay="0.15" class="cta__actions">
          <NuxtLink to="/contact" class="btn btn--solid">{{ $t('contact.form.send') }}</NuxtLink>
          <a href="/cv/cv.pdf" download class="btn btn--ghost">{{ $t('home.social.downloadCV') }}</a>
        </UiReveal>
      </div>
    </section>
  </div>
</template>

<style scoped>
.cta { padding-top: 32px; padding-bottom: 160px; }
.cta__body { margin-top: 96px; }
.cta__title { max-width: 14ch; }
.cta__actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 48px; }
</style>
