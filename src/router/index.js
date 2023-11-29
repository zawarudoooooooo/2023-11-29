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
      path: '/InformationNorth',
      name: 'InformationNorth',
      component: () => import('../views/InformationNorth.vue')
    },
    {
      path: '/InformationMiddle',
      name: 'InformationMiddle',
      component: () => import('../views/InformationMiddle.vue')
    },
    {
      path: '/InformationSouth',
      name: 'InformationSouth',
      component: () => import('../views/InformationSouth.vue')
    },
    {
      path: '/CaculateNorth',
      name: 'CaculateNorth',
      component: () => import('../views/CaculateNorth.vue')
    },
    {
      path: '/CaculateMiddle',
      name: 'CaculateMiddle',
      component: () => import('../views/CaculateMiddle.vue')
    },
    {
      path: '/CaculateSouth',
      name: 'CaculateSouth',
      component: () => import('../views/CaculateSouth.vue')
    },
  ]
})
export default router
