<!-- components/About.vue -->
<script setup lang="ts">
const { flat: skills } = useSkills()
const { t } = useI18n()

const fields = ["experience", "nationality", "languages", "freelance"] as const
</script>

<template>
  <section class="section section--ink about">
    <UiBlade tone="ink" />

    <div class="rail">
      <span class="rail__num">(01)</span>
      <span>{{ $t('about.title') }}</span>
    </div>

    <div class="about__body">
      <div class="about__main">
        <UiSplitLines as="h2" class="display--sm about__lede" :text="t('home.hero.description')" />

        <UiReveal :delay="0.1">
          <ul class="about__skills">
            <li v-for="skill in skills" :key="skill" class="pill">{{ skill }}</li>
          </ul>
        </UiReveal>

        <UiReveal :delay="0.15">
          <dl class="about__facts">
            <div v-for="field in fields" :key="field">
              <dt>{{ $t(`about.fields.${field}`) }}</dt>
              <dd>{{ $t(`about.values.${field}`) }}</dd>
            </div>
          </dl>
        </UiReveal>
      </div>

      <UiReveal :delay="0.1" class="about__portrait">
        <img
          src="/avatar.webp" :alt="`${$t('home.hero.roles.name')} — ${$t('seo.jobTitle')}`" width="1080"
          height="1080" loading="lazy" decoding="async"/>
      </UiReveal>
    </div>

    <Stats />
  </section>
</template>

<style scoped>
.about { padding-top: 32px; padding-bottom: 128px; }

.about__body {
  display: flex;
  gap: 64px;
  justify-content: space-between;
  margin-top: 72px;
}
.about__main { display: flex; flex-direction: column; gap: 40px; max-width: 720px; }

.about__lede { font-weight: 500; }

.about__skills { display: flex; flex-wrap: wrap; gap: 10px; }

.about__facts {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px 40px;
  max-width: 520px;
}
.about__facts dt {
  font-size: 11px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--on-ink-30);
  margin-bottom: 6px;
}
.about__facts dd { font-size: 15px; font-weight: 500; }

.about__portrait {
  flex: 0 0 320px;
  align-self: flex-start;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid var(--rule-ink);
}
.about__portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1);
  transition: filter .6s var(--ease-expo), transform .8s var(--ease-expo);
}
.about__portrait:hover img { filter: none; transform: scale(1.03); }

@media (max-width: 1000px) {
  .about__body { flex-direction: column-reverse; gap: 48px; }
  .about__portrait { flex: none; width: min(320px, 70%); }
}
@media (max-width: 560px) {
  .about__facts { grid-template-columns: 1fr; }
}
</style>
