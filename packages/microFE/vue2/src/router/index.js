import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Energy from '../views/energy/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/energy',
    name: 'Energy',
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: Energy
  }
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
