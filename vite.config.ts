import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
 

  //生产服务器中基本的公共路径 
  base:'./',
  plugins: [
    vue(),
  ]
})
