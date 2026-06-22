<!-- components/Layout/PinModal.vue -->
<script setup lang="ts">
const PIN_CODE = '0906'
const { isOpen, pendingUrl, close } = usePinModal()

const pinValues = ref(['', '', '', ''])
const pinError = ref(false)
const inputs = ref<HTMLInputElement[]>([])

watch(isOpen, (v) => {
  if (v) {
    pinValues.value = ['', '', '', '']
    pinError.value = false
    nextTick(() => inputs.value[0]?.focus())
  }
})

function onInput(idx: number) {
  pinValues.value[idx] = pinValues.value[idx].replace(/[^0-9]/g, '')
  if (pinValues.value[idx] && idx < 3) inputs.value[idx + 1]?.focus()
}

function onKeydown(e: KeyboardEvent, idx: number) {
  if (e.key === 'Backspace' && !pinValues.value[idx] && idx > 0) {
    inputs.value[idx - 1]?.focus()
  }
}

function confirm() {
  const code = pinValues.value.join('')
  if (code === PIN_CODE) {
    close()
    window.open(pendingUrl.value, '_blank', 'noopener')
  } else {
    pinError.value = true
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-overlay" @click.self="close">
        <div class="modal-box">
          <p class="pane-eyebrow">$ sudo access --repo</p>
          <h3 class="modal-title">Private Access</h3>
          <p class="modal-desc">This project is private. Enter the 4-digit code to continue.</p>

          <div class="pin-inputs">
            <input
              v-for="(_, idx) in pinValues"
              :key="idx"
              ref="inputs"
              v-model="pinValues[idx]"
              maxlength="1"
              inputmode="numeric"
              class="pin-box"
              @input="onInput(idx)"
              @keydown="onKeydown($event, idx)"
            />
          </div>

          <p class="pin-error" :class="{ show: pinError }">Wrong code. Try again.</p>

          <div class="modal-actions">
            <button class="btn-ghost" @click="close">cancel</button>
            <button class="btn-primary" @click="confirm">Confirm</button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed; inset: 0; z-index: 500;
  background: rgba(5,7,10,0.75);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center; justify-content: center;
  padding: 20px;
}
.modal-box {
  width: 100%; max-width: 380px;
  background: var(--bg-panel);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-md);
  padding: 30px;
  box-shadow: 0 40px 100px -20px rgba(0,0,0,0.7);
}
.modal-title { font-size: 1.2rem; margin: 0 0 10px; }
.modal-desc { font-size: 12.5px; color: var(--text-secondary); margin: 0 0 22px; line-height: 1.6; }
.pin-inputs { display: flex; gap: 10px; margin-bottom: 12px; }
.pin-box {
  width: 50px; height: 56px;
  text-align: center;
  font-size: 1.4rem;
  font-family: var(--font-mono);
  background: var(--bg-input);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  outline: none;
  transition: border-color .2s;
}
.pin-box:focus { border-color: var(--mint-dim); }
.pin-error { font-size: 11.5px; color: var(--red-soft); height: 16px; margin: 0 0 14px; opacity: 0; transition: opacity .2s; }
.pin-error.show { opacity: 1; }
.modal-actions { display: flex; gap: 10px; justify-content: flex-end; }

.modal-enter-active, .modal-leave-active { transition: opacity .25s; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
</style>
