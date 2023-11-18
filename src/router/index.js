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
      path: '/Visual',
      name: 'Visual',
      component: () => import('../views/Visual.vue')
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
