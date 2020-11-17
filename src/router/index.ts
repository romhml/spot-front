import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import useAuth from '@/composables/useAuth'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Player from '../views/Player.vue'
import Chickens from '../views/Chickens.vue'

const auth = { ...useAuth() }

const ifAuthenticated = (to: any, from: any, next: any) => {
  if (auth.state.authenticated) {
    next()
  } else {
    next('/')
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/play',
    name: 'Player',
    component: Player,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Chickens',
    component: Chickens
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
