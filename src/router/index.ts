// 路由配置文件

import { App } from 'vue'
import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'


const routes:RouteRecordRaw[] = [
  {
    path:'/',
    redirect:'/home',
    meta: {
      title: '首页'
    },
  },
  {
    path:'/login',
    name:'login',
    meta: {
      title: '登录页'
    },
    component:()=>import('@/view/login.vue')
  },
  {
    path:'/home',
    name:'home',
    component:()=>import('@/view/homepage/home.vue'),
    children:[
      {
        path:'/home',
        redirect:'/firstView',
        meta: {
          title: '首页'
        },
      },
      {
        path:'/firstView',
        name:'firstView',
        meta: {
          title: '首页'
        },
        component:()=>import('@/view/pages/firstView.vue')
      },
      {
        path:'/setting',
        name:'setting',
        meta: {
          title: '系统设置'
        },
        component:()=>import('@/view/pages/setting.vue')
      },
      {
        path:'/userManagement',
        name:'userManagement',
        meta: {
          title: '用户管理'
        },
        component:()=>import('@/view/pages/userManagement.vue')
      },
      {
        path:'/wechatUser',
        name:'wechatUser',
        meta: {
          title: '微信用户'
        },
        component:()=>import('@/view/pages/wechatUser.vue')
      },
      {
        path:'/weather',
        name:'weather',
        meta: {
          title: '天气预报'
        },
        component:()=>import('@/view/pages/weather.vue')
      },
      {
        path:'/epidemic',
        name:'epidemic',
        meta: {
          title: '疫情数据'
        },
        component:()=>import('@/view/pages/epidemic.vue')
      },
      {
        path:'/markdown',
        name:'markdown',
        meta: {
          title: 'markdown编辑器'
        },
        component:()=>import('@/view/pages/markdown.vue')
      },
      {
        path:'/quill',
        name:'quill',
        meta: {
          title: '富文本框'
        },
        component:()=>import('@/view/pages/quill.vue')
      },
      {
        path:'/calendar',
        name:'calendar',
        meta: {
          title: '日历组件'
        },
        component:()=>import('@/view/pages/calendar.vue')
      }
    ]
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})


router.beforeEach((to,from,next)=>{
  if(typeof (to.meta?.title) === 'string'){
    document.title = to.meta?.title
  }
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