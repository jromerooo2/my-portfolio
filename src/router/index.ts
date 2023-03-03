import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/notes',
    name: 'Fact',
    component: () => import('../views/Notes.vue')
  }
  // {
  //   path: '/facts',
  //   name: 'FactList',
  //   component: () => import('../views/FactList.vue')
  // },
  // {
  //   path: '/:catchAll(.*)',
  //   name: 'PageNotFound',
  //   component: () => import('../views/PageNotFound.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router