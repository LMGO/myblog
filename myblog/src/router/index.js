import Vue from 'vue'
import VueRouter from 'vue-router'
// import TechnologyShare from '../views/technologyShare/technologyShare.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/views/index')
  },
  /*技术分享*/
  {
    path: '/technologyShare',
    name: 'TechnologyShare',
    component: () => import('@/views/technologyShare/technologyShare.vue')
  },
  /*日常杂谈*/
  {
    path: '/lifeShare',
    name: 'LifeShare',
    component: () => import('@/views/lifeShare/lifeShare.vue')
  },
  {
    path: '*',
    redirect: '/index'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
