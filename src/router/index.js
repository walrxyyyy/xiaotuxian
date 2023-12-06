// createRouter:创建router实例对象
// createWebHistory：创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'

// 创建router实例对象
const router = createRouter({
  // 创建history模式的路由
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
        {
          // path为空代表默认进入该页面
          path:'',
          name:'home',
          component:Home
        },
        {
          path:'category/:id',
          name:'category',
          component:Category
        }
      ]
    },
    {
      path: '/login',
      name:'login',
      component: Login
    }
  ]
})

export default router
