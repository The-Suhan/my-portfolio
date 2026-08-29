<script setup lang="ts">
// Site-wide structured data. Page-level meta lives in each page via `useSeo`.
useJsonLd(useSiteSchema())
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
