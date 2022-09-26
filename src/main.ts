import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import locale from 'element-plus/lib/locale/lang/zh-cn'
// import router from './router'
import {initRouter} from './router'
import i18n from './i18n/index'


 const app = createApp(App)
//  app.use(router)
//初始化路由
initRouter(app)
app.use(ElementPlus)
app.use(i18n)
app.mount('#app')
