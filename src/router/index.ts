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
    component:()=>import('@/view/login.vue')
  },
  {
    path:'/home',
    name:'home',
    component:()=>import('@/view/homepage/home.vue'),
    children:[
      {
        path:'/home',
        redirect:'/firstView'
      },
      {
        path:'/firstView',
        name:'firstView',
        component:()=>import('@/view/pages/firstView.vue')
      },
      {
        path:'/setting',
        name:'setting',
        component:()=>import('@/view/pages/setting.vue')
      },
      {
        path:'/userManagement',
        name:'userManagement',
        component:()=>import('@/view/pages/userManagement.vue')
      },
      {
        path:'/weather',
        name:'weather',
        component:()=>import('@/view/pages/weather.vue')
      },
      {
        path:'/epidemic',
        name:'epidemic',
        component:()=>import('@/view/pages/epidemic.vue')
      }
    ]
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})


router.beforeEach((to,from,next)=>{
  if(to.path === "/login"){
    next()
  }else{
    if(localStorage.getItem('token')){
      next()
    }else{
      next("/login")
    }
  }
})




//初始化路由
export const initRouter = (app:App<Element>)=>{
  app.use(router)
}

// export default router