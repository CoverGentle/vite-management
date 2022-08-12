// 路由配置文件

import { App } from 'vue'
import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'


const routes:RouteRecordRaw[] = [
  {
    path:'/login',
    name:'login',
    component:()=>import('../view/login.vue')
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

//初始化路由
export const initRouter = (app:App<Element>)=>{
  app.use(router)
}

// export default router