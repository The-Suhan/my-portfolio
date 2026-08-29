<!-- components/layout/PinModal.vue -->
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
  pinValues.value[idx] = (pinValues.value[idx] ?? '').replace(/[^0-9]/g, '')
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
    <Transition name="fade">
      <div v-if="isOpen" class="overlay" @click.self="close">
        <div class="box">
          <h3 class="box__title">{{ $t('work.popup.title') }}</h3>
          <p class="box__desc">{{ $t('work.popup.desc') }}</p>

          <div class="pins">
            <input
v-for="(_, idx) in pinValues" :key="idx" ref="inputs" v-model="pinValues[idx]"
              maxlength="1" inputmode="numeric" class="pins__box" @input="onInput(idx)"
              @keydown="onKeydown($event, idx)"/>
          </div>

          <p class="box__error" :class="{ show: pinError }">{{ $t('work.popup.error') }}</p>

          <div class="box__actions">
            <button class="btn btn--ghost" @click="close">Cancel</button>
            <button class="btn btn--solid" @click="confirm">{{ $t('work.popup.confirm') }}</button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(6, 6, 6, .8);
  backdrop-filter: blur(8px);
}
.box {
  width: 100%;
  max-width: 400px;
  padding: 36px;
  background: var(--ink);
  border: 1px solid var(--rule-ink);
  border-radius: 14px;
  color: #fff;
}
.box__title { font-size: 26px; font-weight: 500; letter-spacing: -0.03em; }
.box__desc { margin: 12px 0 28px; font-size: 15px; color: var(--on-ink-60); }

.pins { display: flex; gap: 10px; }
.pins__box {
  width: 56px;
  height: 62px;
  background: transparent;
  border: 1px solid var(--rule-ink);
  border-radius: 10px;
  text-align: center;
  font-family: inherit;
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  outline: none;
  transition: border-color .2s;
}
.pins__box:focus { border-color: #fff; }

.box__error {
  height: 18px;
  margin: 14px 0 20px;
  font-size: 13px;
  color: #ff8080;
  opacity: 0;
  transition: opacity .2s;
}
.box__error.show { opacity: 1; }

.box__actions { display: flex; justify-content: flex-end; gap: 10px; }

.fade-enter-active, .fade-leave-active { transition: opacity .25s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
