<template>
  <div id="app">
    <AcilisEkrani />
    <Banner/>
    <Header/>
    <Product/>
  </div>
</template>

<script>

import Banner from './components/banner.vue'
import AcilisEkrani from './components/acilisEkrani.vue'
import Header from './components/header'
import Product from './components/product'

export default {
  name: 'app',
  components: {
        Banner,
        AcilisEkrani,
        Header,
        Product

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
