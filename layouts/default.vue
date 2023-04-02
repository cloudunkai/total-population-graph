<template>
  <div>
    <header class="header">
      <slot name="header">
        <h2>都道府県別の総人口推移グラフ</h2>
      </slot>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  color: #333;
}
</style>
