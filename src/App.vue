<template>
<!DOCTYPE html>
<html>

    <meta charset="utf-8" />
    <title>
        Online kitap alışveriş siteniz
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link href="..assets/css/bootstrap3860.css?v=1" rel="stylesheet" />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link href="../assets/index.css" rel="stylesheet" />
    <link href="../assets/Content/user/css/font-awesome.css" rel="stylesheet" />
  <div id="app">
    <AcilisEkrani />
    <Banner/>
    <Header/>
  </div>
</html>
</template>

<script>

import Banner from './components/banner.vue'
import AcilisEkrani from './components/acilisEkrani.vue'
import Header from './components/header'

export default {
  name: 'app',
  components: {
        Banner,
        AcilisEkrani,
        Header

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
