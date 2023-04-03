/// <reference types="vitest" />Í

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  // Vite の設定をエクスポート
  plugins: [
    Vue(),
    AutoImport({
      imports: ["vue"],
    }),
  ], // Vue プラグインをプラグイン配列に追加
  test: {
    // テスト設定
    globals: true, // グローバルな設定を有効にする
    environment: "jsdom", // テスト環境として "jsdom" を使用
  },
});
