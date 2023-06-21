import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Todo from '../views/Todo.vue'
import Pinia from '../views/Pinia.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/todo',
    name: 'todo',
    component: Todo
  },
  {
    path: '/pinia',
    name: 'pinia',
    component: Pinia
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
