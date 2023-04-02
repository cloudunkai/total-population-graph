<template>
  <NuxtLayout>
    <Loading />
    <!-- <NuxtLoadingIndicator /> -->
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  const nuxtApp = useNuxtApp();
  const loadingStore = useLodingStore();
  
  nuxtApp.hook("page:start", () => {
    loadingStore.setLoading(true);
  });
  nuxtApp.hook("page:finish", () => {
    loadingStore.setLoading(false);
  });
</script>