<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const props = defineProps<{
    isOpen: boolean
}>()

const emit = defineEmits<{
    close: []
}>()

const languages = [
    { code: "en", label: "EN", flag: "/flags/usa.png" },
    { code: "ru", label: "RU", flag: "/flags/ru.png" },
    { code: "tm", label: "TM", flag: "/flags/tm.png" },
]

const navLinks = [
    { label: "layout.nav.home", to: "/" },
    { label: "layout.nav.resume", to: "/resume" },
    { label: "layout.nav.work", to: "/work" },
    { label: "layout.nav.contact", to: "/contact" },
]

const selectLang = async (code: string) => {
    await setLocale(code as any)
}

const handleLinkClick = () => {
    emit("close")
}
</script>

<template>
    <Teleport to="body">
        <Transition name="overlay">
            <div v-if="isOpen" class="sidebar-overlay" @click="emit('close')" />
        </Transition>

        <Transition name="sidebar">
            <div v-if="isOpen" class="sidebar">
                <div class="sidebar-header">
                    <NuxtLink to="/" class="logo" @click="handleLinkClick">
                        Suxan<span class="logo-dot">OFF</span>
                    </NuxtLink>
                    <button class="close-btn" @click="emit('close')" aria-label="Close menu">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M3 3L15 15M15 3L3 15" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round" />
                        </svg>
                    </button>
                </div>

                <nav class="sidebar-nav">
                    <NuxtLink v-for="(item, index) in navLinks" :key="item.to" :to="item.to" class="sidebar-link"
                        :style="{ '--i': index }" @click="handleLinkClick">
                        <span class="link-index">0{{ index + 1 }}</span>
                        <span class="link-label">{{ $t(item.label) }}</span>
                        <svg class="link-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M3 7H11M8 4L11 7L8 10" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </NuxtLink>
                </nav>

                <div class="sidebar-footer">
                    <div class="lang-section">
                        <span class="lang-label">{{ $t("layout.nav.language") }}</span>
                        <div class="lang-pills">
                            <button v-for="lang in languages" :key="lang.code" class="lang-pill"
                                :class="{ active: lang.code === locale }" @click="selectLang(lang.code)">
                                <img :src="lang.flag" :alt="lang.code" class="flag-img" />
                                <span>{{ lang.label }}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.sidebar-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    z-index: 199;
}

.sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: min(320px, 85vw);
    height: 100dvh;
    background: #0f0f0f;
    border-left: 1px solid #1e1e1e;
    z-index: 200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.3rem 1.5rem;
    border-bottom: 1px solid #1a1a1a;
}

.logo {
    font-family: "Courier New", Courier, monospace;
    font-size: 1.3rem;
    font-weight: 700;
    color: #f1f1f1;
    text-decoration: none;
    letter-spacing: -0.03em;
}

.logo-dot {
    color: #00dc82;
}

.close-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    background: transparent;
    border: 1px solid #2a2a2a;
    border-radius: 8px;
    color: #9ca3af;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s, background 0.2s;
    flex-shrink: 0;
}

.close-btn:hover {
    border-color: #00dc82;
    color: #00dc82;
    background: rgba(0, 220, 130, 0.05);
}

.sidebar-nav {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1rem 0;
}

.sidebar-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.9rem 1.5rem;
    text-decoration: none;
    color: #9ca3af;
    font-family: "Courier New", Courier, monospace;
    font-size: 0.9rem;
    letter-spacing: 0.02em;
    border-left: 2px solid transparent;
    transition: color 0.2s, background 0.2s, border-color 0.2s;
    animation: slideIn 0.3s ease both;
    animation-delay: calc(var(--i) * 0.06s + 0.1s);
}

.sidebar-link:hover {
    color: #f1f1f1;
    background: rgba(255, 255, 255, 0.03);
}

.sidebar-link.router-link-active,
.sidebar-link.router-link-exact-active {
    color: #00dc82;
    border-left-color: #00dc82;
    background: rgba(0, 220, 130, 0.05);
}

.link-index {
    font-size: 0.7rem;
    color: #3a3a3a;
    letter-spacing: 0.1em;
    min-width: 20px;
    transition: color 0.2s;
}

.sidebar-link:hover .link-index,
.sidebar-link.router-link-active .link-index {
    color: #00dc82;
}

.link-label {
    flex: 1;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.82rem;
}

.link-arrow {
    opacity: 0;
    transform: translateX(-4px);
    transition: opacity 0.2s, transform 0.2s;
    color: #00dc82;
}

.sidebar-link:hover .link-arrow,
.sidebar-link.router-link-active .link-arrow {
    opacity: 1;
    transform: translateX(0);
}

.sidebar-footer {
    padding: 1.25rem 1.5rem;
    border-top: 1px solid #1a1a1a;
}

.lang-label {
    display: block;
    font-family: "Courier New", Courier, monospace;
    font-size: 0.65rem;
    letter-spacing: 0.12em;
    color: #3a3a3a;
    text-transform: uppercase;
    margin-bottom: 0.7rem;
}

.lang-pills {
    display: flex;
    gap: 0.5rem;
}

.lang-pill {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.75rem;
    background: transparent;
    border: 1px solid #2a2a2a;
    border-radius: 999px;
    cursor: pointer;
    font-family: "Courier New", Courier, monospace;
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    color: #9ca3af;
    transition: border-color 0.2s, color 0.2s, background 0.2s;
}

.lang-pill:hover {
    border-color: #444;
    color: #f1f1f1;
}

.lang-pill.active {
    border-color: #00dc82;
    color: #00dc82;
    background: rgba(0, 220, 130, 0.06);
}

.flag-img {
    width: 16px;
    height: 12px;
    object-fit: cover;
    border-radius: 2px;
}

.overlay-enter-active,
.overlay-leave-active {
    transition: opacity 0.25s ease;
}

.overlay-enter-from,
.overlay-leave-to {
    opacity: 0;
}

.sidebar-enter-active,
.sidebar-leave-active {
    transition: transform 0.3s cubic-bezier(0.32, 0, 0.15, 1);
}

.sidebar-enter-from,
.sidebar-leave-to {
    transform: translateX(100%);
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(12px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>