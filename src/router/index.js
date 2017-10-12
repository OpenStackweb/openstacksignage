import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../components/app/home.vue'
import Screen from '../components/app/screen.vue'

Vue.use(VueRouter)

export const $router = new VueRouter({ routes: [
    { path: '*', name: 'home', component: Screen }
]})