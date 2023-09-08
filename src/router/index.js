import Vue from 'vue'
import VueRouter from 'vue-router'
import MainContent from '../components/MainContent'
import Cars from "../views/Cars"
import About from "../views/About"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainContent
  },
  {
    path: '/rent',
    name: 'Rent',
    component: Cars
  },
  ,
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router