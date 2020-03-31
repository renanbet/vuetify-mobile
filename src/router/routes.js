import Login from '@/components/login/index.vue'
import Home from '@/components/home/index.vue'

const routes = [
  {
    path: '/',
    component: Login,
    name: 'login',
    meta: { requiresAuth: false }
  },
  {
    path: '/home',
    component: Home,
    meta: { requiresAuth: false },
    name: 'home'
  }
]

export default routes
