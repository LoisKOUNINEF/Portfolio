import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Resume from '../views/ResumeView.vue'
import Projects from '../views/ProjectsView.vue'
import Secret from '../views/SecretView.vue'

const routes = [
  {
    path: '/',
    name: 'About',
    component: Home,
    meta: {
      hideNavbar: true,
    }
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/Secret',
    name: 'Secret',
    component: Secret
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
