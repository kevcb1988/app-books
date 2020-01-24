<template>
  <div id="app">
    <!-- <div id="nav" class="fixed-top">
      <router-link to="/">Home</router-link>    |
      <router-link to="/inicio">Inicio de Sesión</router-link>  |
      <router-link to="/registro">Registro</router-link> |
      <router-link to="/usuario">Usuario</router-link>
    </div> -->
    <footer/>
    <router-view/>
  </div>
</template>

<script>
import Cabecera from '@/components/Footer'

export default {
  name: 'app',
  components: {
    Cabecera
  }
}
</script>

