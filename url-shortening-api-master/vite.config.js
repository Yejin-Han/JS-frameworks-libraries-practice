import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.svg'],
  /* server: {
    proxy: {
      '/api': {
        target: 'https://cleanuri.com',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  }, */
  /* base: '/JS-frameworks-libraries-practice/url-shortening-api-master/dist/' */
})


/**
 *  왠지는 모르겠는데 나는 아래줄이 빼야 작동했다.. 흑
 *  rewrite: (path) => path.replace(/^\/api/, ''),
 */