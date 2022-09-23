import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'development',
  //生产服务器中基本的公共路径 
  base: './' ,
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      "assets": path.resolve(__dirname, "src/assets"),
    }
  },
  server: {
    open: true, //vite项目启动时自动打开浏览器
    hmr: true, //启用热更新
  },


  // 使用插件
  plugins: [
    vue(),
  ],

  // vite打包
  build: {
    assetsDir:'assets',
    outDir: 'dist',
    // brotliSize: false,
  },
})
