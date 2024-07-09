import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/exp',
    name: 'experience',
    component: () => import('../views/Experience.vue')
  },
  {
    path: '/aboutme',
    name: 'aboutme',
    component: () => import('../views/AboutMe.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router