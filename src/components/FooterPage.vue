<template>
    <div class="clearfix">
    <!--footerın Üstü-->
    <div class="fa fa-plus-square-o" @click="toggle()">Footer Aç/Kapat</div>
    <div style="margin-top: 20px;
                            background-color: #ececec;
                            width: 1520px;
                            padding-top: 40px;
                            padding-bottom: 40px;" v-if="visible">
        <footer class="bilgi-altbilgi">
            <div class="container">
            </div>
        </footer>
        <footer class="alt-altbilgi">
            <div class="container">
                <div class="col-sm-3" style="margin-top: 10px;">
                    <a href="index.html" title="Okuoku.com">
                        <img style="padding-top: 18px;" src="resimler/logo.png" alt="Logo" />
                    </a>
                </div>
                <div class="hizli-erisim">
                    <ul>
                        <li style="color:#337ab7"><a><i class="fa fa-barcode"></i>Orjinal
                                Ürün</a></li>
                        <li style="color:#337ab7"><a><i class="fa fa-check"></i>Güvenli
                                Ödeme</a></li>
                        <li style="color:#337ab7"><a><i class="fa fa-lock"></i>Güvenli
                                Alışveriş</a></li>
                        <li style="color:#337ab7"><a href="#siparis"><i class="fa fa-bars"></i>Sipariş
                                Takibi</a></li>
                    </ul>
                </div>
                <div class="sosyal-butonlar">
                    <h4>Sosyal Medya</h4>
                    <ul style="margin-left: 82%;">
                        <li><a target="_blank" href="https://www.facebook.com/okuoku1">
                                <img class="img-responsive" src="resimler/facebook.png" alt="icon" width="32"
                                    height="32" /></a></li>
                        <li><a target="_blank" href="https://twitter.com/okuokucom">
                                <img class="img-responsive" src="resimler/twitter.png" alt="icon" width="32"
                                    height="32" /></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/okuoku1">
                                <img class="img-responsive" src="resimler/instagram.png" alt="icon" width="32"
                                    height="32" /></a></li>
                    </ul>
                </div>
            </div>
            
        </footer>
           </div>
            </div>
   
</template>


<script>
export default {
  name: "FooterPage",
   data () {
    return {
      visible:true
    }
  },methods:{
      toggle(){
          this.visible=!this.visible
      }
      
  }
};
</script>

