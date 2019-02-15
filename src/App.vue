<template>
  <div id="app">
    <cors-http></cors-http>
  </div>
</template>

<script>
import CorsHttp from './components/CorsHttp'
export default {
  name: 'App',
  components: {
    CorsHttp
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
