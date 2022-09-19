import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      
    }
  },
  server:{
    open:true, //vite项目启动时自动打开浏览器
    hmr:true, //启用热更新
  },

  //生产服务器中基本的公共路径 
  base:'./',
  plugins: [
    vue(),
  ],

  // vite打包
  build:{
    
  }
})
