<!-- components/F/Contact/Form.vue -->
<script setup lang="ts">
const EMAILJS_SERVICE_ID = 'service_u8lvgms'
const EMAILJS_TEMPLATE_ID = 'template_pw6ye8t'
const EMAILJS_PUBLIC_KEY = 'DOJrGtEWVBZkOv9KA'

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
    // @ts-ignore
    await window.emailjs.send(
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
  <div class="contact-form">
    <div class="form-row">
      <div class="field">
        <label>{{ $t('contact.form.firstname') }}</label>
        <input v-model="form.firstname" type="text" :placeholder="$t('contact.form.firstname')" />
      </div>
      <div class="field">
        <label>{{ $t('contact.form.lastname') }}</label>
        <input v-model="form.lastname" type="text" :placeholder="$t('contact.form.lastname')" />
      </div>
    </div>

    <div class="form-row">
      <div class="field">
        <label>{{ $t('contact.form.email') }}</label>
        <input v-model="form.email" type="email" :placeholder="$t('contact.form.email')" />
      </div>
      <div class="field">
        <label>{{ $t('contact.form.phone') }}</label>
        <input v-model="form.phone" type="tel" :placeholder="$t('contact.form.phone')" />
      </div>
    </div>

    <div class="field">
      <label>{{ $t('contact.form.selectService') }}</label>
      <select v-model="form.service">
        <option value="" disabled selected>{{ $t('contact.form.selectService') }}</option>
        <option value="web">{{ $t('contact.form.services.web') }}</option>
        <option value="design">{{ $t('contact.form.services.design') }}</option>
        <option value="fullstack">{{ $t('contact.form.services.fullstack') }}</option>
        <option value="other">{{ $t('contact.form.services.other') }}</option>
      </select>
    </div>

    <div class="field">
      <label>{{ $t('contact.form.message') }}</label>
      <textarea v-model="form.message" rows="5" :placeholder="$t('contact.form.message')"></textarea>
    </div>

    <div v-if="statusMessage" :class="['status-msg', statusType]">
      {{ statusMessage }}
    </div>

    <button class="btn-primary btn-send" :disabled="sending" @click="sendMessage">
      <span v-if="!sending">{{ $t('contact.form.send') }}</span>
      <span v-else>{{ $t('contact.form.sending') }}</span>
    </button>
  </div>
</template>

<style scoped>
.contact-form { display: flex; flex-direction: column; gap: 16px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.field { display: flex; flex-direction: column; gap: 7px; }
.field label { font-size: 11px; color: var(--text-tertiary); letter-spacing: 0.03em; }

.field input, .field select, .field textarea {
  background: var(--bg-input);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  padding: 11px 13px;
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: 13px;
  outline: none;
  transition: border-color .2s, background .2s;
  width: 100%;
}
.field input::placeholder, .field textarea::placeholder { color: var(--text-tertiary); }
.field input:focus, .field select:focus, .field textarea:focus {
  border-color: var(--mint-dim);
  background: var(--bg-elevated);
}
.field textarea { resize: vertical; line-height: 1.6; }
.field select { cursor: pointer; appearance: none; }
.field select option { background: var(--bg-elevated); }

.btn-send { align-self: flex-start; margin-top: 6px; }
.btn-send:disabled { opacity: 0.6; cursor: not-allowed; }

.status-msg {
  font-size: 12px; padding: 11px 14px; border-radius: var(--radius-sm);
}
.status-msg.success { background: var(--mint-glow); color: var(--mint); border: 1px solid rgba(0,255,157,0.25); }
.status-msg.error { background: rgba(255,107,107,0.1); color: var(--red-soft); border: 1px solid rgba(255,107,107,0.25); }

@media (max-width: 480px) { .form-row { grid-template-columns: 1fr; } }
</style>
