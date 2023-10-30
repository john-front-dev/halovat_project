import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/MainPage.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../pages/Products.vue')
    },
    
  ]
})

export default router
