import Vue from 'vue' 
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Index from '../components/Index.vue'
import Introduce from '../components/Introduce.vue'
import Tech from '../components/Tech.vue'
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
 },
 {
 path:'/introduce',
 component: Introduce
 },
 {
 path:'/tech',
 component: Tech
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
