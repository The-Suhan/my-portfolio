<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode: number
    message: string
  }
}>()

const { t } = useI18n()

// Error pages must never enter the index.
useSeo(() => ({
  title: props.error.statusCode === 404 ? t('seo.error.title') : t('error.unexpected'),
  description: t('seo.error.description'),
  noindex: true,
}))

function goHome() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <main class="err">
    <div class="err__inner">
      <span class="err__code">{{ error.statusCode }}</span>
      <h1 class="display err__title">
        {{ error.statusCode === 404 ? t('error.notFound') : t('error.unexpected') }}
      </h1>
      <p class="lede err__desc">
        {{ error.statusCode === 404 ? t('error.notFoundDesc') : (error.message || t('error.unexpectedDesc')) }}
      </p>
      <button class="btn btn--solid err__btn" @click="goHome">{{ t('error.goHome') }}</button>
    </div>
  </main>
</template>

<style scoped>
.err {
  display: flex;
  align-items: flex-end;
  min-height: 100vh;
  padding: 32px var(--pad-x) 64px;
  background: var(--void);
  color: #fff;
}
.err__inner { width: 100%; }
.err__code {
  display: block;
  font-size: 12px;
  letter-spacing: .3em;
  color: var(--on-ink-30);
  margin-bottom: 24px;
}
.err__title { max-width: 12ch; }
.err__desc { margin-top: 24px; max-width: 48ch; }
.err__btn { margin-top: 40px; }
</style>
