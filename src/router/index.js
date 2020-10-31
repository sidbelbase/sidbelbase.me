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
  routes
})

export default router
