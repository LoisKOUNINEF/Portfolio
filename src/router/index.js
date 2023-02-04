import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Resume from '../views/ResumeView.vue'
import Projects from '../views/ProjectsView.vue'

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
  },
  {
path: '/projects',
name: 'Projects',
component: Projects
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
