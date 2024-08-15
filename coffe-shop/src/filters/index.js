import Vue from 'vue'

Vue.filter('addCurruncy',(value) =>{
    return value + '$'
  })