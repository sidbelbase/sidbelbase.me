import { createRouter, createWebHistory } from 'vue-router'
import resume from '../views/resume.vue'

const routes = [
  {
    path: '/',
    name: 'resume',
    component: resume
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return document.querySelector(to.hash).scrollIntoView({ behavior: 'smooth' });
    } else {
      return savedPosition || { x: 0, y: 0 }
    }
  }
})

export default router
