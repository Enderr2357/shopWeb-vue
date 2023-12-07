import * as Vue from 'vue'
import {
  createRouter, createWebHistory
} from "vue-router";


import SideBar from '../layout/SideBar.vue'
const router = createRouter({
  history: createWebHistory(),//采用hash网址方式实践路由
  routes: [
    {
      path: '/world',
      component: SideBar,
      children: [
        {
          path: '/HelloWorld',
          component: () => import('../components/world/HelloWorld.vue')
        }
      ]
    }
  
  ]
}
)
export default router