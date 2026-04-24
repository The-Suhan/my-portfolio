<template>
  <div class="contact-form-wrapper">
    <div class="form-grid">
      <input
        v-model="form.firstname"
        type="text"
        class="form-input"
        :placeholder="$t('contact.form.firstname')"
      />
      <input
        v-model="form.lastname"
        type="text"
        class="form-input"
        :placeholder="$t('contact.form.lastname')"
      />
    </div>

    <div class="form-grid">
      <input
        v-model="form.email"
        type="email"
        class="form-input"
        :placeholder="$t('contact.form.email')"
      />
      <input
        v-model="form.phone"
        type="tel"
        class="form-input"
        :placeholder="$t('contact.form.phone')"
      />
    </div>

    <div class="select-wrapper">
      <select v-model="form.service" class="form-select">
        <option value="" disabled selected>{{ $t('contact.form.selectService') }}</option>
        <option value="web">{{ $t('contact.form.services.web') }}</option>
        <option value="design">{{ $t('contact.form.services.design') }}</option>
        <option value="fullstack">{{ $t('contact.form.services.fullstack') }}</option>
        <option value="other">{{ $t('contact.form.services.other') }}</option>
      </select>
      <svg class="select-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </div>

    <textarea
      v-model="form.message"
      class="form-textarea"
      :placeholder="$t('contact.form.message')"
      rows="6"
    />

    <div v-if="statusMessage" :class="['status-msg', statusType]">
      {{ statusMessage }}
    </div>

    <button
      class="send-btn"
      :disabled="sending"
      @click="sendMessage"
    >
      <span v-if="!sending">{{ $t('contact.form.send') }}</span>
      <span v-else class="sending-state">
        <svg class="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        {{ $t('contact.form.sending') }}
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">

// EmailJS üçin şu linkleri nuxt.config.ts-e ekle:
// app: { head: { scripts: [{ src: 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js' }] } }
// Ya da: npm install @emailjs/browser

// EmailJS'den al: https://www.emailjs.com/
// 1. Signup et
// 2. Email Service ekle (Gmail)
// 3. Template düzelt (aşağıdaki templateye göre):
//    From: {{from_name}} <{{from_email}}>
//    To: suxanoff07@gmail.com
//    Subject: New contact from {{from_name}}
//    Body: Name: {{from_name}}\nEmail: {{from_email}}\nPhone: {{phone}}\nService: {{service}}\nMessage: {{message}}
// 4. Service ID, Template ID, Public Key'i buraya yaz

const EMAILJS_SERVICE_ID = 'service_u8lvgms'   
const EMAILJS_TEMPLATE_ID = 'template_pw6ye8t' 
const EMAILJS_PUBLIC_KEY = 'DOJrGtEWVBZkOv9KA'   

const { t } = useI18n()

const form = reactive({
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  service: '',
  message: '',
})

const sending = ref(false)
const statusMessage = ref('')
const statusType = ref<'success' | 'error'>('success')

async function sendMessage() {
  if (!form.firstname || !form.email || !form.message) return

  sending.value = true
  statusMessage.value = ''

  try {
    // @ts-ignore
    const emailjs = window.emailjs

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
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

    form.firstname = ''
    form.lastname = ''
    form.email = ''
    form.phone = ''
    form.service = ''
    form.message = ''
  } catch (err) {
    statusType.value = 'error'
    statusMessage.value = t('contact.form.error')
    console.error('EmailJS error:', err)
  } finally {
    sending.value = false
    setTimeout(() => {
      statusMessage.value = ''
    }, 5000)
  }
}
</script>

<style scoped>
.contact-form-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  background: #1a1a22;
  border: 1px solid #2a2a33;
  border-radius: 6px;
  padding: 0.85rem 1rem;
  font-family: 'Space Mono', monospace;
  font-size: 0.82rem;
  color: #e5e7eb;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #4b5563;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: #00ff8c;
  background: #1e1e28;
}

.select-wrapper {
  position: relative;
}

.form-select {
  appearance: none;
  cursor: pointer;
  padding-right: 2.5rem;
}

.form-select option {
  background: #1a1a22;
  color: #e5e7eb;
}

.select-arrow {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: #6b7280;
  pointer-events: none;
}

.form-textarea {
  resize: none;
  line-height: 1.6;
}

.send-btn {
  align-self: flex-start;
  background: #00ff8c;
  color: #0f0f0f;
  font-family: 'Space Mono', monospace;
  font-size: 0.82rem;
  font-weight: 700;
  padding: 0.85rem 2rem;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease, opacity 0.2s ease;
  letter-spacing: 0.02em;
}

.send-btn:hover:not(:disabled) {
  background: #00e67d;
  transform: translateY(-1px);
}

.send-btn:active:not(:disabled) {
  transform: translateY(0);
}

.send-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.sending-state {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.spinner {
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.status-msg {
  font-family: 'Space Mono', monospace;
  font-size: 0.8rem;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-weight: 700;
}

.status-msg.success {
  background: rgba(0, 255, 140, 0.1);
  color: #00ff8c;
  border: 1px solid rgba(0, 255, 140, 0.2);
}

.status-msg.error {
  background: rgba(255, 80, 80, 0.1);
  color: #ff6b6b;
  border: 1px solid rgba(255, 80, 80, 0.2);
}

@media (max-width: 640px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>