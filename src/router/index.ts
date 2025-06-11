import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/Admin/stores/authStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: () => import('@/RootView.vue'),
      children: [
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
      ]
    },
    
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/Admin/AdminView.vue'),
      children: [
        {
          path: '/login',
          name: 'admin-login',
          component: () => import('@/Admin/Login/LoginView.vue'),
          meta: { requiresAuth: false }
        },
        {
          path: '/jurisdictions',
          name: 'admin-jurisdictions',
          component: () => import('@/Admin/Jurisdiction/IndexView.vue'),
          meta: { requiresAuth: true, requiresAdmin: true }
        },
        {
          path: '/colaborators',
          name: 'admin-colaborators',
          component: () => import('@/Admin/Colaborators/IndexView.vue'),
          meta: { requiresAuth: true, requiresAdmin: true }
        }
      ]
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

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  const requiresAuth = to.meta.requiresAuth
  const requiresAdmin = to.meta.requiresAdmin
  
  // If route doesn't require authentication, allow access
  if (!requiresAuth) {
    return next()
  }
  
  // If user is not authenticated, redirect to login
  if (!authStore.isAuthenticated) {
    return next({ name: 'admin-login', query: { redirect: to.fullPath } })
  }
  
  // If route requires admin role but user is not admin
  if (requiresAdmin && !authStore.isAdmin) {
    return next({ name: 'home' }) // Redirect to home or unauthorized page
  }
  
  // User has required permissions, proceed
  return next()
})

export default router
