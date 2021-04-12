import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const constantRoutes = [
    {
      path: '/app',
      component:() => import('@/views/app')
    }
]
const createRouter = () => new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })
  
  const router = createRouter()

  export default router
