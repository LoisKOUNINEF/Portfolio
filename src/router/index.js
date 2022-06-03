import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Resume from '../views/ResumeView.vue'

const routes = [
{
  path: '/',
  name: 'About',
  component: Home

},
  {
path: '/resume',
name: 'Resume',
component: Resume
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
