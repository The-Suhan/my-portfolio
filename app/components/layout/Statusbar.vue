<!-- components/Layout/Statusbar.vue -->
<template>
  <footer class="statusbar">
    <div class="status-left">
      <span class="status-item">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 3v12a3 3 0 1 0 .75-2M18 9a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3"/>
        </svg>
        main
      </span>
      <span class="status-item">⟳ synced</span>
    </div>
    <div class="status-right">
      <span class="status-item">UTF-8</span>
      <span class="status-item">LF</span>
      <span class="status-item">TypeScript JSX</span>
      <span class="status-item">● Ln 1, Col 1</span>
    </div>
  </footer>
</template>

<style scoped>
.statusbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 26px;
  padding: 0 14px;
  background: var(--mint-dim);
  color: #04140d;
  font-size: 11px;
  flex-shrink: 0;
}
.status-left, .status-right { display: flex; gap: 14px; }
.status-item { display: flex; align-items: center; gap: 5px; font-weight: 600; }
</style>
