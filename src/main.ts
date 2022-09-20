import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import router from './router'
import {initRouter} from './router'


 const app = createApp(App)
//  app.use(router)
//初始化路由
initRouter(app)
app.use(ElementPlus)
 app.mount('#app')
