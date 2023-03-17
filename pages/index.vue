<template>
  <div class="container">
    <Loading :is-loading="isLoading" />
    <Chart />
  </div>
</template>

<script setup>
const isLoading = ref(false);
</script>

<style scoped>
.container {
  padding: 32px;
}
</style>
