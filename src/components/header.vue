<template>
    <div id="foto" v-if="seen" style="margin: 0;
    padding: 0;">
        <a href="#kampanyalar">
            <div class="enUstFoto">
                <span class="fotoKapat"><i v-on:click="seen=false" class="fa fa-times"></i></span>
            </div>
        </a>
    </div>
</template>

<script>
export default {
  el: '#foto',
  props:{
      seen:Boolean
  },created(){
      this.seen=true;
  }
}
</script>

<style scoped>
.enUstFoto {
   background-image: url(../assets/small-1041.jpg);
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   height: 60px;
   width: 100%;
   position: relative;
   overflow: hidden;
   transition: height 0.5s;
}
.enUstFoto:hover {
   background-image: url(../assets/1041.jpg);
   height: 200px;
}
.enUstFoto .fotoKapat {
   cursor: pointer;
   position: absolute;
   right: 20px;
   top: calc(50% - 12px);
   background-color: rgba(136,136,136,.5);
   border-radius: 50%;
   width: 29px;
   height: 29px;
   font-size: 20px;
   color: #fff;
   text-align: center;
   display: block !important;
}
</style>