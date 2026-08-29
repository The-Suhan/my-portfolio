<!-- features/contact/pages/index.vue -->
<script setup lang="ts">
const { t } = useI18n()

useSeo(() => ({
  title: t('seo.contact.title'),
  description: t('seo.contact.description'),
  path: '/contact',
}))

const site = useSiteUrl()
const route = useRoute()
const localePath = useLocalePath()
const pageUrl = computed(() => absoluteUrl(site, route.path))
const homeUrl = computed(() => absoluteUrl(site, localePath('/')))
useJsonLd(() => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${pageUrl.value}#contactpage`,
  url: pageUrl.value,
  name: t('seo.contact.title'),
  description: t('seo.contact.description'),
  isPartOf: { '@id': `${site}/#website` },
  mainEntity: { '@id': `${site}/#person` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t('layout.nav.home'), item: homeUrl.value },
      { '@type': 'ListItem', position: 2, name: t('seo.contact.title'), item: pageUrl.value },
    ],
  },
}))

useHead({
  script: [{ src: 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js', defer: true }],
})
</script>

<template>
  <div>
    <section class="section section--ink head">
      <div class="rail">
        <span class="rail__num">(04)</span>
        <span>{{ $t('layout.nav.contact') }}</span>
      </div>
      <h1 class="display head__title">{{ $t('contact.title') }}</h1>
    </section>

    <section class="section section--paper body">
      <UiBlade tone="paper" />

      <div class="body__grid">
        <div class="body__form">
          <FContactForm />
        </div>
        <aside class="body__aside">
          <FContactInfo />
        </aside>
      </div>
    </section>
  </div>
</template>

<style scoped>
.head { padding-top: 152px; padding-bottom: 88px; background: var(--void); }
.head__title { margin-top: 64px; max-width: 12ch; }

.body { padding-top: 96px; padding-bottom: 128px; }

.body__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: 80px;
  align-items: start;
}
.body__aside { position: sticky; top: 112px; }

@media (max-width: 1000px) {
  .body__grid { grid-template-columns: 1fr; gap: 56px; }
  .body__aside { position: static; }
}
</style>
