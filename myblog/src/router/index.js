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
  {
    path: '/mobileIndex',
    name: 'MobileIndex',
    component: () => import('@/views/mobileIndex')
  },
  /*技术分享*/
  {
    path: '/technologyShare',
    name: 'TechnologyShare',
    component: () => import('@/views/technologyShare')
  },
  /*生活点滴*/
  {
    path: '/lifeShare',
    name: 'LifeShare',
    component: () => import('@/views/lifeShare')
  },
  /*心情随笔*/
  {
    path: '/casualTalk',
    name: 'CasualTalk',
    component: () => import('@/views/casualTalk')
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import('@/views/me')
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
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
