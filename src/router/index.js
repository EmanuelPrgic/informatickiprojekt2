import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchComponent from '../components/SearchComponent.vue'
import HomeComponent from '../components/HomeComponent.vue'
import ContactComponent from '../components/ContactComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  }
  ,
  {
    path: '/search',
    name: 'search',
    component: SearchComponent
  },
  {
    path: '/contact',
    name: 'kontakt',
    component: ContactComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
