<!-- layouts/default.vue -->
<script setup lang="ts">
const isSidebarOpen = ref(false)
</script>

<template>
  <div class="editor">
    <div class="grain"></div>
    <div class="vignette"></div>

    <LayoutTitlebar />
    <LayoutTabbar />

    <div class="editor-body">
      <LayoutGutter />
      <main class="pane">
        <slot />
      </main>
    </div>
``
    <LayoutStatusbar />
    <LayoutPinModal />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100..800&display=swap');

:root {
  --bg-void: #0a0e14;
  --bg-panel: #0d1219;
  --bg-elevated: #11161f;
  --bg-input: #0c1018;
  --border-subtle: #1b212b;
  --border-strong: #262e3a;
  --text-primary: #e3e8ef;
  --text-secondary: #8b94a3;
  --text-tertiary: #5a6373;
  --mint: #00ff9d;
  --mint-dim: #00b873;
  --mint-glow: rgba(0, 255, 157, 0.18);
  --amber: #ffb454;
  --amber-glow: rgba(255, 180, 84, 0.16);
  --red-soft: #ff6b6b;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html, body {
  background: var(--bg-void);
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

a { color: inherit; text-decoration: none; }
button { font-family: inherit; }
ul { list-style: none; }

::selection { background: var(--mint-glow); color: var(--mint); }

::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: var(--bg-void); }
::-webkit-scrollbar-thumb { background: var(--border-strong); border-radius: 8px; }
::-webkit-scrollbar-thumb:hover { background: var(--mint-dim); }

.grain {
  position: fixed; inset: 0; z-index: 9998; pointer-events: none;
  opacity: 0.035; mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
.vignette {
  position: fixed; inset: 0; z-index: 9997; pointer-events: none;
  background: radial-gradient(ellipse at 50% 0%, transparent 40%, rgba(0,0,0,0.45) 100%);
}

.editor { display: flex; flex-direction: column; min-height: 100vh; }
.editor-body { display: flex; flex: 1; }

.pane {
  flex: 1;
  min-width: 0;
  padding: 56px 8vw 90px;
}

.pane-eyebrow {
  font-size: 12px;
  color: var(--mint);
  letter-spacing: 0.04em;
  margin: 0 0 22px;
  opacity: 0.85;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--mint);
  color: #04140d;
  font-family: var(--font-mono);
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 0.02em;
  padding: 11px 20px;
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  transition: transform .18s var(--ease), box-shadow .18s var(--ease), background .18s;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--mint-glow);
  background: #1cffb0;
}

.btn-ghost {
  background: transparent;
  border: 1px solid var(--border-strong);
  color: var(--text-secondary);
  font-family: var(--font-mono);
  font-size: 12.5px;
  padding: 11px 18px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: border-color .2s, color .2s;
}
.btn-ghost:hover { border-color: var(--text-secondary); color: var(--text-primary); }

a:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible {
  outline: 2px solid var(--mint);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
