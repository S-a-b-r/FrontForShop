import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main.index',
      component: () => import('../views/main/Index.vue')
    },
    {
      path: '/products',
      name: 'main.products',
      component: () => import('../views/product/Index.vue')
    },
    {
      path: '/brewery/:id',
      name: 'brewery.show',
      component: () => import('../views/brewery/BreweryShowComponent.vue')
    }
  ]
})

export default router
