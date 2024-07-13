import { createRouter, createWebHistory } from 'vue-router'
import DashBoardVue from '@/views/Dashboard/DashBoard.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashBoardVue
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
