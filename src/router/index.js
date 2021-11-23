import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Privacy from '@/views/Privacy.vue'
import About from '@/views/About.vue'

Vue.use(VueRouter)

const routes = [
  {path:'/', redirect: '/home'},
  {path:'/home', component: Home},
  {path:'/privacy', component: Privacy},
  {path:'/about', component: About}
]

const router = new VueRouter({
  routes
})

export default router
