import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../Main/MainView.vue'),
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('../Pricing/PricingView.vue'),
    },
    {
      path: '/lawyers',
      name: 'lawyers',
      component: () => import('../Lawyer/LawyerView.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../Admin/AdminView.vue'),
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router
