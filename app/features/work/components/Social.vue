<script setup lang="ts">
import { ref, nextTick } from 'vue'

const props = defineProps<{
    liveUrl: string
    githubUrl: string
}>()

const showPopup = ref(false)
const pendingUrl = ref('')
const inputs = ref(['', '', '', ''])
const error = ref(false)
const inputRefs = ref<HTMLInputElement[]>([])

function openPopup(url: string) {
    pendingUrl.value = url
    inputs.value = ['', '', '', '']
    error.value = false
    showPopup.value = true
    nextTick(() => inputRefs.value[0]?.focus())
}

function handleInput(index: number, e: Event) {
    const val = (e.target as HTMLInputElement).value.replace(/\D/g, '')
    inputs.value[index] = val.slice(0, 1)
    if (val && index < 3) {
        nextTick(() => inputRefs.value[index + 1]?.focus())
    }
}

function handleKeydown(index: number, e: KeyboardEvent) {
    if (e.key === 'Backspace' && !inputs.value[index] && index > 0) {
        nextTick(() => inputRefs.value[index - 1]?.focus())
    }
}

function handlePaste(e: ClipboardEvent) {
    const text = e.clipboardData?.getData('text') ?? ''
    const digits = text.replace(/\D/g, '').slice(0, 4).split('')
    digits.forEach((d, i) => { inputs.value[i] = d })
    nextTick(() => inputRefs.value[Math.min(digits.length, 3)]?.focus())
    e.preventDefault()
}

function confirm() {
    const code = inputs.value.join('')
    if (code === '2312') {
        showPopup.value = false
        window.open(pendingUrl.value, '_blank', 'noopener,noreferrer')
    } else {
        error.value = true
        inputs.value = ['', '', '', '']
        nextTick(() => inputRefs.value[0]?.focus())
    }
}

function closePopup() {
    showPopup.value = false
}
</script>

<template>
    <div class="social-row">
        <!-- Live project -->
        <div class="icon-wrap">
            <button class="social-btn" :aria-label="$t('work.liveProject')" @click="openPopup(liveUrl)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                </svg>
            </button>
            <span class="tip">{{ $t('work.liveProject') }}</span>
        </div>

        <!-- GitHub -->
        <div class="icon-wrap">
            <button class="social-btn" :aria-label="$t('work.githubRepo')" @click="openPopup(githubUrl)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
            </button>
            <span class="tip">{{ $t('work.githubRepo') }}</span>
        </div>
    </div>

    <!-- Password Popup -->
    <Teleport to="body">
        <Transition name="popup">
            <div v-if="showPopup" class="popup-overlay" @click.self="closePopup">
                <div class="popup-box">
                    <!-- Close -->
                    <button class="popup-close" @click="closePopup">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    <div class="popup-icon">🔐</div>
                    <h3 class="popup-title">{{ $t('work.popup.title') }}</h3>
                    <p class="popup-desc">{{ $t('work.popup.desc') }}</p>

                    <div class="pin-row" @paste="handlePaste">
                        <input v-for="(_, i) in inputs" :key="i"
                            :ref="el => { if (el) inputRefs[i] = el as HTMLInputElement }" v-model="inputs[i]"
                            class="pin-input" :class="{ 'pin-error': error }" type="password" inputmode="numeric"
                            maxlength="1" autocomplete="off" @input="handleInput(i, $event)"
                            @keydown="handleKeydown(i, $event)" />
                    </div>

                    <Transition name="fade">
                        <p v-if="error" class="error-msg">{{ $t('work.popup.error') }}</p>
                    </Transition>

                    <button class="popup-confirm" @click="confirm">
                        {{ $t('work.popup.confirm') }}
                    </button>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.social-row {
    display: flex;
    gap: 0.75rem;
    align-items: center;
}

.icon-wrap {
    position: relative;
    display: inline-flex;
}

.social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1.5px solid #2a2a33;
    color: #9ca3af;
    background: transparent;
    cursor: pointer;
    text-decoration: none;
    transition: border-color 0.2s, color 0.2s, background 0.2s, transform 0.2s;
}

.social-btn:hover {
    border-color: #00ff8c;
    color: #00ff8c;
    background: rgba(0, 255, 140, 0.06);
    transform: scale(1.08);
}

.tip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: #1a1a24;
    color: #e5e7eb;
    font-family: 'Space Mono', monospace;
    font-size: 0.7rem;
    white-space: nowrap;
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid #2a2a33;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.18s;
    z-index: 10;
}

.icon-wrap:hover .tip {
    opacity: 1;
}

/* ── Popup Overlay ── */
.popup-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(6px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

.popup-box {
    position: relative;
    background: #13131a;
    border: 1px solid #2a2a33;
    border-radius: 12px;
    padding: 2.5rem 2rem 2rem;
    width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6);
}

.popup-close {
    position: absolute;
    top: 0.85rem;
    right: 0.85rem;
    background: transparent;
    border: none;
    color: #6b7280;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    transition: color 0.18s;
}

.popup-close:hover {
    color: #e5e7eb;
}

.popup-icon {
    font-size: 2rem;
    line-height: 1;
}

.popup-title {
    font-family: 'Space Mono', monospace;
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    margin: 0;
    text-align: center;
}

.popup-desc {
    font-family: 'Space Mono', monospace;
    font-size: 0.72rem;
    color: #6b7280;
    text-align: center;
    margin: 0;
    line-height: 1.6;
}

/* ── PIN inputs ── */
.pin-row {
    display: flex;
    gap: 0.6rem;
}

.pin-input {
    width: 52px;
    height: 60px;
    border-radius: 8px;
    border: 1.5px solid #2a2a33;
    background: #0f0f16;
    color: #fff;
    font-family: 'Space Mono', monospace;
    font-size: 1.4rem;
    font-weight: 700;
    text-align: center;
    outline: none;
    transition: border-color 0.18s, box-shadow 0.18s;
    caret-color: transparent;
}

.pin-input:focus {
    border-color: #00ff8c;
    box-shadow: 0 0 0 3px rgba(0, 255, 140, 0.12);
}

.pin-input.pin-error {
    border-color: #ef4444;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
    animation: shake 0.35s ease;
}

@keyframes shake {

    0%,
    100% {
        transform: translateX(0);
    }

    20% {
        transform: translateX(-5px);
    }

    40% {
        transform: translateX(5px);
    }

    60% {
        transform: translateX(-4px);
    }

    80% {
        transform: translateX(4px);
    }
}

.error-msg {
    font-family: 'Space Mono', monospace;
    font-size: 0.72rem;
    color: #ef4444;
    margin: 0;
}

.popup-confirm {
    width: 100%;
    padding: 0.7rem;
    border-radius: 6px;
    border: none;
    background: #00ff8c;
    color: #0f0f0f;
    font-family: 'Space Mono', monospace;
    font-size: 0.85rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.18s, transform 0.18s;
    margin-top: 0.25rem;
}

.popup-confirm:hover {
    background: #00e07a;
    transform: scale(1.02);
}

/* ── Transitions ── */
.popup-enter-active,
.popup-leave-active {
    transition: opacity 0.25s ease, transform 0.25s ease;
}

.popup-enter-from,
.popup-leave-to {
    opacity: 0;
    transform: scale(0.93);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>