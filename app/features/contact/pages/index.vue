<template>
  <main>
    <section class="contact-section">
      <div class="contact-left">
        <div class="content-header">
          <h2 class="content-title">{{ $t('contact.title') }}</h2>
        </div>

        <FContactForm />
      </div>

      <div class="contact-right">
        <FContactInfo />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('contact.title'),
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js',
      defer: true,
    },
  ],
})
</script>

<style scoped>
.contact-section {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4rem;
  align-items: start;
  padding: 3rem 0;
}

.contact-left {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: #1a1a22;
  border-radius: 12px;
  padding: 2.5rem;
}

.contact-right {
  padding-top: 0.5rem;
  min-width: 260px;
}

@media (max-width: 900px) {
  .contact-section {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-left {
    padding: 1.75rem;
  }

  .contact-right {
    order: -1;
  }
}

@media (max-width: 640px) {
  .contact-left {
    padding: 1.25rem;
  }
}
</style>