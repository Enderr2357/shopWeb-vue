import * as Vue from 'vue'
import {
  createRouter, createWebHistory
} from "vue-router";
import HelloWorld from '../components/world/world.vue'
import Login from '../components/Login/Login.vue'
import Register from '../components/Register/Register.vue'
import Index from '../components/Index/Index.vue'
const router = createRouter({
  history: createWebHistory(),//采用hash网址方式实践路由
  routes: [
    {
      path: '/world',
      component: HelloWorld,
    },
    {
      path: '/Login',
      component: Login,
    },
    {
      path: '/Register',
      component: Register,
    },
    {
      path: '/Index',
      component: Index,
    }
  ]
}
)
export default router