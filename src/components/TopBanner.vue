<template>
  <div id="foto" style="margin: 0px; padding: 0px;" v-show="seen">
    <a href="#kampanyalar">
      <div class="enUstFoto">
        <span class="fotoKapat">
          <i class="fa fa-times" @click="Close()"></i>
        </span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "TopBanner",
  data() {
    return {
      seen: true
    }
  },
  methods: {
    Close () {
      this.seen = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
