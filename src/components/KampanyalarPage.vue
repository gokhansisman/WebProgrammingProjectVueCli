<template>
   <div>
    <div style="position: fixed; z-index: 20; width: 100%; top: 0px;">
      <TopBanner/>
      <Header />
  
    </div>

    <Navbar />
        <div class="container container-wrap">
            <div class="row">
                <div class="col-md-12">
                    <div class="urun glge">
                        <div class="titlebck">KAMPANYALAR</div>
                        <div class="kampanyaalan">
                            <div>
                                <img class="kampanyalarSayfasiFoto" src="resimler/firsatlari_kacirmayin_banner.png" alt="Kampanyalar Banner" />
                            </div>

                            <div class="col-sm-6 sifirla kamsol">
                                <a href='kampanya/2019-eylul-parodi-1490-tl-kampanyasi/605.html'>
                                    <img class="kampanyalarSayfasiFoto" src="resimler/2019-eylul-parodi-1490-tl-kampanyasi.jpg"
                                        alt="2019 Eylül Parodi 14,90 TL Kampanyası" />
                                </a>
                            </div>

                            <div class="col-sm-6 sifirla kamsag">
                                <a href='kampanya/2019-mayis-postiga-1290-tl-kampanyasi/582.html'>
                                    <img class="kampanyalarSayfasiFoto" src="resimler/2019-mayis-postiga-1290-tl-kampanyasi.jpg"
                                        alt="2019 MAYIS POSTİGA 12,90 TL KAMPANYASI" />
                                </a>
                            </div>

                            <div class="col-sm-6 sifirla kamsol">
                                <a href='kampanya/2019-ocak-versus-ve-aylak-kitap-5-tlden-baslayan-fiyatlar/537.html'>
                                    <img class="kampanyalarSayfasiFoto" src="resimler/2019-ocak-versus-ve-aylak-kitap-5-tlden-baslayan-f.jpg"
                                        alt="2019 Ocak Versus ve Aylak Kitap 5 TL'den Başlayan Fiyatlar" />
                                </a>
                            </div>

                            <div class="col-sm-6 sifirla kamsag">
                                <a href='kampanya/eylul-2018-1490-genel-kampanyasi/472.html'>
                                    <img class="kampanyalarSayfasiFoto" src="resimler/eylul-2018-1490-genel-kampanyasi.jpg"
                                        alt="EYLÜL 2018 14.90 GENEL KAMPANYASI" />
                                </a>
                            </div>

                            <div class="col-sm-6 sifirla kamsol">
                                <a href='kampanya/eylul-2018-1290-genel/473.html'>
                                    <img class="kampanyalarSayfasiFoto" src="resimler/eylul-2018-1290-genel.jpg" alt="EYLÜL 2018 12,90 GENEL" />
                                </a>
                            </div>

                            <div class="col-sm-6 sifirla kamsag">
                                <a href='kampanya/eylul-2018-marti-790-tl-kampanyasi/484.html'>
                                    <img class="kampanyalarSayfasiFoto" src="resimler/eylul-2018-marti-790-tl-kampanyasi.jpg"
                                        alt="EYLÜL 2018 MARTI 7,90 TL KAMPANYASI" />
                                </a>
                            </div>


                            <div class="col-sm-6 sifirla kamsol">
                                <a href='kampanyasayfa/cizgi-roman-kulubu/33.html'>
                                    <img  class="kampanyalarSayfasiFoto" src="resimler/cizgi-roman.jpg" alt="Çizgi Roman" />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterPage/>
    </div>
</template>



<script>
import Header from "./Header"
import Navbar from "./Navbar"
import TopBanner from "./TopBanner"
import FooterPage from "./FooterPage"
export default {
  name: "KampanyalarPage",
  components: {
    Header,
    Navbar,
    TopBanner,
    FooterPage
  }
};
</script>


<style scoped>
</style>



