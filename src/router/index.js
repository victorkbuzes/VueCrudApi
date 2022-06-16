
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {

      path : '/addProducts',
      name : 'addProducts',
      component: () => import('../views/AddProducts.vue')
    },
    {

      path : '/products',
      name : 'products',
      component: () => import('../components/ProductsList.vue')
    }
  ]
})

export default router
