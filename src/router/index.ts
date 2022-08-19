// 路由配置文件

import { App } from 'vue'
import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'


const routes:RouteRecordRaw[] = [
  {
    path:'/',
    redirect:'/home'
  },
  
  {
    path:'/login',
    name:'login',
    component:()=>import('../view/login.vue')
  },
  {
    path:'/home',
    name:'home',
    component:()=>import('../view/homepage/home.vue')
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

router.beforeEach((from,to,next)=>{
  console.log(to.path);
  if(to.path === "/login"){
    next()
  }else{
    console.log();
    if(localStorage.getItem("token")){
      next()
    }else{
      next()
    }
    
  }
})



//初始化路由
export const initRouter = (app:App<Element>)=>{
  app.use(router)
}

// export default router