<template>
    <div class="flex flex-col gap-5">
        <a href="/cv.pdf" download
            class="download-btn inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#00ff99] text-[#00ff99] font-mono text-xs tracking-widest uppercase w-fit hover:bg-[#00ff99] hover:text-[#1a1a2e] transition-all duration-300">
            {{ $t('home.social.downloadCV') }}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
        </a>

        <div class="flex items-center gap-3">
            <!-- GitHub -->
            <a href="https://github.com/The-Suhan" target="_blank" rel="noopener noreferrer" class="social-icon"
                :aria-label="$t('home.social.github')">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
            </a>

            <!-- Instagram -->
            <a href="https://www.instagram.com/suhan_09.06" target="_blank" rel="noopener noreferrer"
                class="social-icon" :aria-label="$t('home.social.instagram')">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M7.75 2C5.13 2 3 4.13 3 6.75v10.5C3 19.87 5.13 22 7.75 22h8.5C18.87 22 21 19.87 21 17.25V6.75C21 4.13 18.87 2 16.25 2h-8.5zm0 2h8.5C17.76 4 19 5.24 19 6.75v10.5c0 1.51-1.24 2.75-2.75 2.75h-8.5C6.24 20 5 18.76 5 17.25V6.75C5 5.24 6.24 4 7.75 4zM18 5.5a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
            </a>

            <!-- TikTok -->
            <a href="https://www.tiktok.com/@suhan_09.06" target="_blank" rel="noopener noreferrer" class="social-icon"
                :aria-label="$t('home.social.tiktok')">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M12.75 2h2.5c.2 1.68 1.3 3.12 2.75 3.75.9.4 1.9.55 2.95.55v2.6c-1.7 0-3.35-.45-4.75-1.25v7.6c0 3.2-2.6 5.75-5.8 5.75S4.6 18.45 4.6 15.25 7.2 9.5 10.4 9.5c.35 0 .7.03 1.05.1v2.7c-.35-.12-.7-.2-1.05-.2-1.75 0-3.2 1.45-3.2 3.2s1.45 3.2 3.2 3.2 3.25-1.45 3.25-3.2V2z" />
                </svg>
            </a>

            <!-- Telegram -->
            <a href="https://t.me/B_Suhan" target="_blank" rel="noopener noreferrer" class="social-icon"
                :aria-label="$t('home.social.telegram')">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M21.5 3.5L2.9 10.6c-1.2.5-1.2 1.2-.2 1.5l4.7 1.5 1.8 5.6c.2.6.1.8.7.8.4 0 .6-.2.9-.5l2.2-2.1 4.6 3.4c.9.5 1.5.2 1.7-.9l3.1-14.6c.3-1.3-.5-1.9-1.9-1.3zM9.5 14.1l8.8-5.5c.4-.2.7.1.4.4l-7.2 6.5-.3 3.2-1.7-4.6z" />
                </svg>
            </a>
        </div>
    </div>
</template>

<style scoped>
.social-icon {
    @apply w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60;
    @apply hover:border-[#00ff99] hover:text-[#00ff99] transition-all duration-300;
}

.download-btn {
    letter-spacing: 0.15em;
}
</style>