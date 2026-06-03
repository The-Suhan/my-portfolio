<script setup lang="ts">
const { t } = useI18n()

defineProps<{
    error: {
        statusCode: number
        message: string
    }
}>()

function goHome() {
    clearError({ redirect: '/' })
}
</script>

<template>
    <main class="error-page">
        <div class="error-inner">
            <div class="error-code">
                {{ error.statusCode }}
            </div>
            <h1 class="error-title">
                {{ error.statusCode === 404 ? t('error.notFound') : t('error.unexpected') }}
            </h1>
            <p class="error-desc">
                {{ error.statusCode === 404 ? t('error.notFoundDesc') : (error.message || t('error.unexpectedDesc')) }}
            </p>
            <div class="divider" />
            <button class="back-btn" @click="goHome">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
                {{ t('error.goHome') }}
            </button>
        </div>
    </main>
</template>

<style scoped>
.error-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: #0f0f0f;
}

.error-inner {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 480px;
    width: 100%;
}

.error-code {
    font-family: 'Space Mono', monospace;
    font-size: clamp(5rem, 15vw, 9rem);
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.04em;
    color: #fff;
}

.error-title {
    font-family: 'Space Mono', monospace;
    font-size: clamp(1.2rem, 3vw, 1.6rem);
    font-weight: 700;
    color: #00ff8c;
    margin: 0;
}

.error-desc {
    font-family: 'Space Mono', monospace;
    font-size: 0.82rem;
    color: #7b7d82;
    line-height: 1.7;
    margin: 0;
}

.divider {
    height: 1px;
    background: #2a2a33;
    margin: 0.5rem 0;
}

.back-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Space Mono', monospace;
    font-size: 0.85rem;
    color: #0f0f0f;
    background: #00ff8c;
    border: none;
    border-radius: 4px;
    padding: 0.6rem 1.2rem;
    cursor: pointer;
    transition: background 0.18s, transform 0.18s;
    width: fit-content;
}

.back-btn:hover {
    background: #00e07a;
    transform: scale(1.04);
}
</style>