import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/VisualNorth',
      name: 'VisualNorth',
      component: () => import('../views/VisualNorth.vue')
    },
    {
      path: '/VisualMiddle',
      name: 'VisualMiddle',
      component: () => import('../views/VisualMiddle.vue')
    },
    {
      path: '/VisualSouth',
      name: 'VisualSouth',
      component: () => import('../views/VisualSouth.vue')
    },
    {
      path: '/Information',
      name: 'Information',
      component: () => import('../views/Information.vue')
    },
    {
      path: '/Caculate',
      name: 'Caculate',
      component: () => import('../views/Caculate.vue')
    },
  ]
})
export default router
