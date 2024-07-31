import Vue from 'vue'
import VueRouter from 'vue-router'

import HeroView from '../views/HeroView'
import OurCoffeview from '../views/OurCoffeview'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: HeroView },
    { path: '/our-coffe', component: OurCoffeview },
    
  ]

  const router = new VueRouter({
    mode: 'history',
    routes 
  })

  export default router