<template>
  <header class="enUstBaslik" style="z-index: 1;">
    <div class="container">
      <div class="row">
        <div
          class="baslik-genel"
          style=" position: static !important;
                height: auto !important;  font-weight: 400;
                line-height: 1.1;"
        >
          <nav style="line-height: 1;">
            <ul>
              <li style="float: left;">
                <a
                  href="/#/AccordionHakkimizda"
                  style="color: #7c7c7c;
                            margin-right: 15px;"
                >MÜŞTERİ HİZMETLERİ</a>
              </li>
              <li style="float: left;">
                <a href="#siparis-takip" style="color: #D91E18;">
                  <i class="fa fa-bars" style="color: #D91E18;"></i>
                  <strong>
                    &nbsp;SİPARİŞ
                    TAKİBİ&nbsp;&nbsp;&nbsp;
                  </strong>
                </a>
              </li>
              <li style="float: left;">
                <a
                  href="/#/AccordionHakkimizda"
                  style="color: #7c7c7c;
                                margin-right: 15px;"
                >Hakkımızda</a>
              </li>
              <li style="float: left;">
                <a
                  href="/#/IletisimPage"
                  style="color: #7c7c7c;
                                margin-right: 15px;"
                >İletişim</a>
              </li>
            </ul>
          </nav>
          <!-- sağ üst menü -->
          <!--class = nav pull right ile sağa veya aşağıdaki şekilde olabilir.-->
          <div v-if="loading" style="position: absolute;right:10%">
            <div>
              <ul>
                <li>
                  Tekrar Hoşgeldiniz!
                </li>
              </ul>
            </div>
          </div>
          <div v-if="!loading" style="position: absolute;right:10%">
            <div>
              <ul>
                <li>
                  Hoş geldin ziyaretçi
                  <b>
                    <a href="/#/LoginPage" style="color: #337ab7;">
                      giriş
                      yapın
                    </a>
                  </b>ya da
                  <b>
                    <a href="/#/LoginPage" style="color: #337ab7;">kayıt olun</a>
                  </b>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="orta" style="margin-top: 15px;">
          <div class="logo col-md-3" style=" margin-top: 30px;">
            <a href="/" title="Okuoku.com">
              <img src="resimler/logo.png" />
            </a>
          </div>
          <div>
      <modal name="hello-world" :width="1330" :height="150" :pivotY="0.1">
        <div class="orta" style="margin-top: 15px;">
          <div class="logo col-md-3" style=" margin-top: 30px;">
            <a href="/" title="Okuoku.com">
              <img src="resimler/logo.png" />
            </a>
          </div>
        </div>
        <div class="arama col-md-5" style="width: 100%;margin-top: 4px;">
          <input type="search" placeholder="Ara..." />
          <a class="send" style="float:right;margin-top:-2px">
            <i class="fa fa-search"></i>
          </a>
        </div>
      </modal>
    </div>
          <div class="arama col-md-5">
            <div>
              <div
                style="margin-left: 5px;
                            font-size: 15px;
                            color: #febf00;"
              >
                <b>50 TL Üzeri Kargo Bedava!</b>
              </div>
              <div
                style="float: right;
                             margin-left: 15px;
                            font-size: 14px;
                            color: #febf00;"
              >
                <b>Kapıda Nakit Ödeme</b>
              </div>
            </div>
            <input type="search" placeholder="Ara..." @click="show()"/>
            <a class="send">
              <i class="fa fa-search"></i>
            </a>
          </div>
          <div class="col-md-4 col-sm-5" style="text-align: right;">
            <div style="float:left">
              <a href="/#/PurchasePage" class="sepet" style="margin-top: 40px;">
                <i class="fa fa-shopping-cart"></i>
                <span class="girisYapYazisi">SEPETİM</span>
                <div v-if="loading"><p>({{urunSayisi}}) adet ürün</p></div>
                <p v-if="!loading">Giriş yapmalısınız.</p>
              </a>
            </div>
            <div>
              <a
                class="ozellik"
                style=" height: 25px;
                            color: #6f6d6e;
                            font-family: verdana;
                            font-weight: 300;
                            margin-bottom: 5px !important;
                            margin-top: 40px;
                            text-decoration: none !important;
                            padding-left: 3px;
                            "
                href="/#/LoginPage"
              >
                <i class="fa fa-user">

                </i>
                
                <span v-if="loading" class="girisYapYazisi">{{isim}}</span>
                <span v-if="!loading" class="girisYapYazisi">Giriş Yapınız</span>
                <p v-if="loading" @click="cikisYap()" class="kayitol">Çıkış Yap</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  components:{
    
  },
  data(){
    return {
    loading:false,
    kullanici:"gokhan",
    isim: "",
    urunSayisi:0
     }
   },
  mounted(){
  this.loading =  localStorage.getItem("loading");
  this.kullanici = localStorage.getItem("kullanici");
  this.isim = localStorage.getItem("kullanici");
  this.urunSayisi = localStorage.getItem("Urun Sayisi");
  },
  methods: {
    show() {
      this.$modal.show("hello-world");
    },
    hide() {
      this.$modal.hide("hello-world");
    },
    cikisYap(){
      localStorage.setItem('loading',false);
      localStorage.setItem('kullanici',null);
      this.$router.push('/');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
