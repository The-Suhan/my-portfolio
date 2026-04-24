<script setup lang="ts">
defineProps<{
    liveUrl: string
    githubUrl: string
}>()
</script>

<template>
    <div class="btn-row">
        <div class="btn-wrap">
            <a :href="liveUrl" target="_blank" rel="noopener noreferrer" class="icon-btn"
                :aria-label="$t('work.liveProject')">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                </svg>
            </a>
            <span class="tooltip">{{ $t('work.liveProject') }}</span>
        </div>

        <div class="btn-wrap">
            <a :href="githubUrl" target="_blank" rel="noopener noreferrer" class="icon-btn"
                :aria-label="$t('work.githubRepo')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
            </a>
            <span class="tooltip">{{ $t('work.githubRepo') }}</span>
        </div>
    </div>
</template>

<style scoped>
.btn-row {
    display: flex;
    gap: 0.75rem;
    align-items: center;
}

.btn-wrap {
    position: relative;
    display: inline-flex;
}

.icon-btn {
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
    transition: border-color 0.2s, color 0.2s, background 0.2s, transform 0.2s;
    text-decoration: none;
}

.icon-btn:hover {
    border-color: #00ff8c;
    color: #00ff8c;
    background: rgba(0, 255, 140, 0.06);
    transform: scale(1.08);
}

.tooltip {
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

.btn-wrap:hover .tooltip {
    opacity: 1;
}
</style>