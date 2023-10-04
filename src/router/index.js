import Vue from 'vue'
import VueRouter from 'vue-router'
import Skull from '../components/Skull.vue'
import AppAccounts from '../components/AppAccounts.vue'
import HomePage from '../components/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Skull',
    name: 'Skull',
    component: Skull
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/accounts',
    name: 'AppAccounts',
    component: AppAccounts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
