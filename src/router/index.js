import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/WeatherView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:city?',
      name: 'weather',
      component: Home,
      //props: { title: 'Buscador de clima' }
      props: route => ({ 
        title: 'Buscador de clima',
        cityParam: route.params.city || 'New York'
      })
    },    
  ]
})

export default router
