import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/WeatherView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'weather',
      component: Home,
      props: { title: 'Buscador de clima' }
    },    
  ]
})

export default router
