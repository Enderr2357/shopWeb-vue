import * as Vue from 'vue'
import {
  createRouter, createWebHistory
} from "vue-router";
import HelloWorld from '../components/world/index.vue'

import SideBar from '../layout/SideBar.vue'
const router = createRouter({
  history: createWebHistory(),//采用hash网址方式实践路由
  routes: [
    {
      path: '/world',
      component: HelloWorld,
    }
  ]
}
)
export default router