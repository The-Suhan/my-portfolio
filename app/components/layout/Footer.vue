<template>
  <footer class="footer">
    <div class="container">
      <p>
        © {{ new Date().getFullYear() }} All Rights Reserved
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #0f0f0f;
  border-top: 1px solid #2a2a2a;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
  text-align: center;
}

.footer p {
  margin: 0;
  color: #6b7280;
  font-size: 14px;
}
</style>
