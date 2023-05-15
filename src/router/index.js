import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
//createRouter:创建路由实例
//createWebHistory:创建history模式的路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children:[
        {
          path:'',
          component:Home
        },
        {
          path:'/category/:id',
          component:Category,
          
        },
        {
          path:'/category/sub/:id',
          component:SubCategory,
          
        },
        {
          path:'/detail/:id',
          component:Detail,
          
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Login
    }
  ],
  //路由滚动行为
  scrollBehavior(){
    return {
      top:0
    }
  }
})

export default router
