<template>
  <div class="contact-info">
    <div class="info-item">
      <div class="info-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
      </div>
      <div class="info-content">
        <span class="info-label">{{ $t('contact.info.phone.label') }}</span>
        <span class="info-value">{{ $t('contact.info.phone.value') }}</span>
      </div>
    </div>

    <div class="info-item">
      <div class="info-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      </div>
      <div class="info-content">
        <span class="info-label">{{ $t('contact.info.email.label') }}</span>
        <span class="info-value">
          {{ $t('contact.info.email.value').includes('@')
            ? $t('contact.info.email.value')
            : $t('contact.info.email.value') + '@gmail.com' }}
        </span>
      </div>
    </div>

    <div class="info-item">
      <div class="info-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      </div>
      <div class="info-content">
        <span class="info-label">{{ $t('contact.info.address.label') }}</span>
        <span class="info-value">{{ $t('contact.info.address.value') }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style scoped>
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem 0;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
}

.info-icon {
  width: 48px;
  height: 48px;
  background: #2a2a33;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #00ff8c;
  transition: background 0.2s ease;
}

.info-icon svg {
  width: 20px;
  height: 20px;
}

.info-item:hover .info-icon {
  background: #32323e;
}

.info-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-top: 0.25rem;
}

.info-label {
  font-family: 'Space Mono', monospace;
  font-size: 0.72rem;
  color: #6b7280;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.info-value {
  font-family: 'Space Mono', monospace;
  font-size: 0.9rem;
  color: #e5e7eb;
  font-weight: 400;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .contact-info {
    gap: 1.25rem;
  }

  .info-icon {
    width: 42px;
    height: 42px;
  }
}
</style>