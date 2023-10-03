import { createRouter, createWebHistory } from 'vue-router'
import HomeScreen from '../views/HomeScreen.vue'
import AboutScreen from '../views/AboutScreen.vue'
import StudentScreen from '../views/StudentScreen.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeScreen
  },
  {
    path: '/student',
    name: 'student',
    component: StudentScreen
  },
  {
    path: '/about',
    name: 'about',
    component: AboutScreen,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router