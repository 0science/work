import Vue from 'vue' 
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Index from '../components/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/index'
  },
 {
  path: '/login',
  component: Login
 },
 {
 path:'/index',
 component: Index
 }
]

const router = new VueRouter({
  routes,
})
// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// })

export default router
