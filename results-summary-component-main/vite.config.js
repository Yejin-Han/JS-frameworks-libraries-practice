import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    copy({
      targets: [
        { src: 'src/assets/data/data.json', dest: 'dist/assets/data' },
        { src: 'src/assets/images/*', dest: 'dist/assets/images' },
      ],
      hook: 'writeBundle'
    })
  ],
  base: '/JS-frameworks-libraries-practice/results-summary-component-main/build/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/vars";
          @import "@/assets/scss/mixin";
        `
      }
    }
  }
})