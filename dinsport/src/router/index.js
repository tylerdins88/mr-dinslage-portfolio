import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectView.vue')
    },
    {
      path: '/workhistory',
      name: 'workhistory',
      component: () => import('../views/WorkHistory.vue')
    },
    {
      path: '/currentupdates',
      name: 'currentupdates',
      component: () => import('../views/CurrentUpdates.vue')
    },
    {
      path: '/webwarlocks',
      name: 'webwarlocks',
      component: () => import('../views/WebWarlocks.vue')
    },
    {
      path: '/contactme',
      name: 'contactme',
      component: () => import('../components/ContactMe.vue')
    }
  ]
})

export default router
