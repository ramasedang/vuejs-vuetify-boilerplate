import { createRouter, createWebHistory } from 'vue-router'
import Hello from '@/components/HelloWorld.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },

  ]
})

export default router
