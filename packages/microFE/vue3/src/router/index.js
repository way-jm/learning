import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/index'
import Select from '../views/select'

const routes = [
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  // 选车内容
  {
    path: '/select',
    name: 'Select',
    component: Select
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
