import Vue from 'vue'
import VueRouter from 'vue-router'

import HeroView from '../views/HeroView'
import OurCoffeView from '../views/OurCoffeView'
import ForYourPleasureViewe from '../views/ForYourPleasureViewe'
import ContactUsViewe from '../views/ContactUsViewe'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: HeroView },
    { path: '/our-coffe', component: OurCoffeView },
    { path: '/for-your-pleasure', component: ForYourPleasureViewe },
    { path: '/Contact-us', component: ContactUsViewe },
    
  ]

  const router = new VueRouter({
    mode: 'history',
    routes 
  })

  export default router