import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'
import bestsellers from './bestsellers'
import goods from './goods'
import base from './base'
import coffe from './coffe'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    links,
    bestsellers,
    goods,
    base,
    coffe
  }
})

export default store;