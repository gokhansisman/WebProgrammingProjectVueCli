<template>
  <div id="app">
    <Header/>
    <AcilisEkrani />
  </div>
</template>

<script>
import Header from './components/header.vue'
import AcilisEkrani from './components/acilisEkrani.vue'

export default {
  name: 'app',
  components: {
        Header,
        AcilisEkrani

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
  margin-top: 10px;
}
</style>
