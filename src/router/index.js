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
    {
      path: '/aboutCompany',
      name: 'aboutCompany',
      component: () => import('../pages/AboutCompany.vue')
    },
  ]
})

export default router
