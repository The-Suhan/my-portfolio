<!-- components/F/Contact/Info.vue -->
<template>
  <div class="contact-info">
    <div class="info-card">
      <span class="info-icon">☏</span>
      <div>
        <p class="info-label">{{ $t('contact.info.phone.label') }}</p>
        <p class="info-val">{{ $t('contact.info.phone.value') }}</p>
      </div>
    </div>
    <div class="info-card">
      <span class="info-icon">@</span>
      <div>
        <p class="info-label">{{ $t('contact.info.email.label') }}</p>
        <p class="info-val">{{ $t('contact.info.email.value') }}</p>
      </div>
    </div>
    <div class="info-card">
      <span class="info-icon">⚲</span>
      <div>
        <p class="info-label">{{ $t('contact.info.address.label') }}</p>
        <p class="info-val">{{ $t('contact.info.address.value') }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-info { display: flex; flex-direction: column; gap: 14px; }
.info-card {
  display: flex; align-items: center; gap: 14px;
  background: var(--bg-panel);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 18px;
}
.info-icon {
  width: 38px; height: 38px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  background: var(--bg-elevated);
  border-radius: var(--radius-sm);
  color: var(--mint);
  font-size: 15px;
}
.info-label { font-size: 10.5px; color: var(--text-tertiary); margin: 0 0 3px; text-transform: uppercase; letter-spacing: 0.04em; }
.info-val { font-size: 13px; margin: 0; }
</style>
