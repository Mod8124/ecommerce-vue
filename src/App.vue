<template>
  <NavBar/>
  <router-view/>
</template>

<style>
@import './assets/css/global.css';

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>

<script>
import NavBar from '@/components/NavBar/NavBar.vue'

export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>
