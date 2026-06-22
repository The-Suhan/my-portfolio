<!-- components/Home/Side.vue -->
<template>
  <div class="hero-side">
    <div class="photo-frame">
      <div class="photo-glow"></div>
      <div class="photo-ring"></div>
      <img src="/avatar.jpg" alt="Suhan Begenjov" class="photo-img" />
      <span class="photo-badge">● online</span>
    </div>

    <div class="cv-row">
      <a href="/cv/cv.pdf" download class="btn-primary">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
        </svg>
        {{ $t('home.social.downloadCV') }}
      </a>

      <div class="social-icons">
        <a href="https://github.com/The-Suhan" target="_blank" rel="noopener" class="social-icon" :aria-label="$t('home.social.github')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/suhan_09.06" target="_blank" rel="noopener" class="social-icon" :aria-label="$t('home.social.instagram')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.75 2C5.13 2 3 4.13 3 6.75v10.5C3 19.87 5.13 22 7.75 22h8.5C18.87 22 21 19.87 21 17.25V6.75C21 4.13 18.87 2 16.25 2h-8.5zm0 2h8.5C17.76 4 19 5.24 19 6.75v10.5c0 1.51-1.24 2.75-2.75 2.75h-8.5C6.24 20 5 18.76 5 17.25V6.75C5 5.24 6.24 4 7.75 4zM18 5.5a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
          </svg>
        </a>
        <a href="https://www.tiktok.com/@suhan_09.06" target="_blank" rel="noopener" class="social-icon" :aria-label="$t('home.social.tiktok')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.75 2h2.5c.2 1.68 1.3 3.12 2.75 3.75.9.4 1.9.55 2.95.55v2.6c-1.7 0-3.35-.45-4.75-1.25v7.6c0 3.2-2.6 5.75-5.8 5.75S4.6 18.45 4.6 15.25 7.2 9.5 10.4 9.5c.35 0 .7.03 1.05.1v2.7c-.35-.12-.7-.2-1.05-.2-1.75 0-3.2 1.45-3.2 3.2s1.45 3.2 3.2 3.2 3.25-1.45 3.25-3.2V2z"/>
          </svg>
        </a>
        <a href="https://t.me/B_Suhan" target="_blank" rel="noopener" class="social-icon" :aria-label="$t('home.social.telegram')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.5 3.5L2.9 10.6c-1.2.5-1.2 1.2-.2 1.5l4.7 1.5 1.8 5.6c.2.6.1.8.7.8.4 0 .6-.2.9-.5l2.2-2.1 4.6 3.4c.9.5 1.5.2 1.7-.9l3.1-14.6c.3-1.3-.5-1.9-1.9-1.3zM9.5 14.1l8.8-5.5c.4-.2.7.1.4.4l-7.2 6.5-.3 3.2-1.7-4.6z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-side {
  flex: 0 0 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
.photo-frame {
  position: relative;
  width: 240px; height: 240px;
}
.photo-glow {
  position: absolute; inset: -20px;
  background: radial-gradient(circle, var(--mint-glow), transparent 70%);
  filter: blur(8px);
  animation: pulse 4s ease-in-out infinite;
}
@keyframes pulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
.photo-ring {
  position: absolute; inset: -8px;
  border-radius: 50%;
  border: 1px dashed var(--border-strong);
  animation: spin 30s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.photo-img {
  position: relative; z-index: 2;
  width: 100%; height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--border-strong);
  filter: grayscale(0.15) contrast(1.05);
}
.photo-badge {
  position: absolute; bottom: 6px; right: 6px; z-index: 3;
  background: var(--bg-elevated);
  border: 1px solid var(--border-strong);
  color: var(--mint);
  font-size: 10px;
  padding: 4px 9px;
  border-radius: 999px;
}

.cv-row { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.social-icons { display: flex; gap: 8px; }
.social-icon {
  display: flex; align-items: center; justify-content: center;
  width: 34px; height: 34px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-subtle);
  color: var(--text-tertiary);
  transition: border-color .2s, color .2s, transform .2s;
}
.social-icon:hover { border-color: var(--mint-dim); color: var(--mint); transform: translateY(-2px); }

@media (max-width: 768px) {
  .hero-side { flex: none; width: 100%; }
}
</style>
