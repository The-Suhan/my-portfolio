<!-- features/contact/components/form.vue -->
<script setup lang="ts">
const EMAILJS_SERVICE_ID = 'service_u8lvgms'
const EMAILJS_TEMPLATE_ID = 'template_pw6ye8t'
const EMAILJS_PUBLIC_KEY = 'DOJrGtEWVBZkOv9KA'

interface EmailJs {
  send: (
    service: string,
    template: string,
    params: Record<string, string>,
    publicKey: string,
  ) => Promise<unknown>
}

const { t } = useI18n()

const form = reactive({
  firstname: '', lastname: '', email: '', phone: '', service: '', message: '',
})
const sending = ref(false)
const statusMessage = ref('')
const statusType = ref<'success' | 'error'>('success')

async function sendMessage() {
  if (!form.firstname || !form.email || !form.message) {
    statusType.value = 'error'
    statusMessage.value = t('contact.form.fillRequired')
    return
  }
  sending.value = true
  statusMessage.value = ''

  try {
    // Loaded from the CDN <script> this page registers, so it isn't typed.
    const emailjs = (window as unknown as { emailjs: EmailJs }).emailjs
    await emailjs.send(
      EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
      {
        from_name: `${form.firstname} ${form.lastname}`,
        from_email: form.email,
        phone: form.phone || 'Not provided',
        service: form.service || 'Not specified',
        message: form.message,
        reply_to: form.email,
      },
      EMAILJS_PUBLIC_KEY
    )
    statusType.value = 'success'
    statusMessage.value = t('contact.form.success')
    Object.assign(form, { firstname: '', lastname: '', email: '', phone: '', service: '', message: '' })
  } catch {
    statusType.value = 'error'
    statusMessage.value = t('contact.form.error')
  } finally {
    sending.value = false
    setTimeout(() => { statusMessage.value = '' }, 5000)
  }
}
</script>

<template>
  <form class="form" @submit.prevent="sendMessage">
    <div class="form__row">
      <label class="field">
        <span>{{ $t('contact.form.firstname') }}</span>
        <input v-model="form.firstname" type="text" :placeholder="$t('contact.form.firstname')"/>
      </label>
      <label class="field">
        <span>{{ $t('contact.form.lastname') }}</span>
        <input v-model="form.lastname" type="text" :placeholder="$t('contact.form.lastname')"/>
      </label>
    </div>

    <div class="form__row">
      <label class="field">
        <span>{{ $t('contact.form.email') }}</span>
        <input v-model="form.email" type="email" :placeholder="$t('contact.form.email')"/>
      </label>
      <label class="field">
        <span>{{ $t('contact.form.phone') }}</span>
        <input v-model="form.phone" type="tel" :placeholder="$t('contact.form.phone')"/>
      </label>
    </div>

    <label class="field">
      <span>{{ $t('contact.form.selectService') }}</span>
      <span class="field__select">
        <select v-model="form.service">
          <option value="" disabled>{{ $t('contact.form.selectService') }}</option>
          <option value="web">{{ $t('contact.form.services.web') }}</option>
          <option value="design">{{ $t('contact.form.services.design') }}</option>
          <option value="fullstack">{{ $t('contact.form.services.fullstack') }}</option>
          <option value="android">{{ $t('contact.form.services.android') }}</option>
          <option value="other">{{ $t('contact.form.services.other') }}</option>
        </select>
        <svg class="field__chevron" viewBox="0 0 12 8" aria-hidden="true">
          <path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </label>

    <label class="field">
      <span>{{ $t('contact.form.message') }}</span>
      <textarea v-model="form.message" rows="5" :placeholder="$t('contact.form.message')" />
    </label>

    <p v-if="statusMessage" class="status" :class="statusType">{{ statusMessage }}</p>

    <button type="submit" class="btn btn--solid form__send" :disabled="sending">
      {{ sending ? $t('contact.form.sending') : $t('contact.form.send') }}
    </button>
  </form>
</template>

<style scoped>
.form { display: flex; flex-direction: column; gap: 28px; }
.form__row { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }

.field { display: flex; flex-direction: column; gap: 10px; }
.field > span:not(.field__select) {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--on-paper);
}

.field input,
.field select,
.field textarea {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--rule-paper);
  border-radius: 0;
  padding: 10px 0;
  font-family: inherit;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--on-paper);
  outline: none;
  transition: border-color .25s var(--ease-expo);
}
.field input::placeholder,
.field textarea::placeholder { color: var(--on-paper-60); font-weight: 500; }
.field input:focus,
.field select:focus,
.field textarea:focus { border-bottom-color: var(--on-paper); }
.field textarea { resize: vertical; line-height: 1.5; }
.field select { cursor: pointer; appearance: none; padding-right: 28px; }

.field__select { position: relative; display: block; }
.field__chevron {
  position: absolute;
  right: 4px;
  top: 50%;
  width: 12px;
  height: 8px;
  transform: translateY(-50%);
  color: var(--on-paper-60);
  pointer-events: none;
  transition: color .25s var(--ease-expo);
}
.field__select:focus-within .field__chevron { color: var(--on-paper); }

.status { font-size: 14px; font-weight: 500; }
.status.success { color: #0a7d43; }
.status.error { color: #c0392b; }

.form__send { align-self: flex-start; }

@media (max-width: 560px) {
  .form__row { grid-template-columns: 1fr; }
}
</style>
