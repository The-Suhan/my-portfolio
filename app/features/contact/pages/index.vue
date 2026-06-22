<!-- pages/contact.vue -->
<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('contact.title'),
  script: [{ src: 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js', defer: true }],
})
</script>

<template>
  <section class="view">
    <div class="contact-layout">
      <div class="contact-form-box">
        <p class="pane-eyebrow">$ ./send_message --interactive</p>
        <h2 class="contact-title">{{ $t('contact.title') }}</h2>
        <FContactForm />
      </div>

      <aside class="contact-aside">
        <FContactInfo />
      </aside>
    </div>
  </section>
</template>

<style scoped>
.view { animation: fadeUp .5s var(--ease); }
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 48px;
  align-items: start;
}
.contact-form-box {
  background: var(--bg-panel);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 36px;
}
.contact-title { font-size: 1.6rem; font-weight: 800; margin: 0 0 28px; }

@media (max-width: 900px) {
  .contact-layout { grid-template-columns: 1fr; }
}
</style>
