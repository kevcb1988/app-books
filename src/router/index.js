import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Inicio from '@/views/Inicio.vue'
import Registro from '@/views/Registro.vue'
import Usuario from '@/views/Usuario.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/registro',
    name: 'registro',
    component: Registro
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: Usuario
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
