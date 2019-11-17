<template>
  <div>
    <VueLoading />
    <div style="position: fixed; z-index: 20; width: 100%; top: 0px;">
      <TopBanner />
      <Header />
    </div>

    <Navbar />
    <div class="container container-wrap">
      <div class="row">
        <div class="col-md-12">
          <div class="urun glge">
            <div class="titlebck">ÇOCUK KİTAPLARI FESTİVALİ</div>
            <div class="kampanyaalan">
              <div>
                <img
                  class="kampanyalarSayfasiFoto:hover"
                  src="resimler/cocuk.png"
                  alt="Kampanyalar Banner"
                />
              </div>

              <div class="col-sm-6 sifirla kamsol">
                <a href="cocuk/aysegul.html">
                  <img class="yaylogo ybig" src="resimler/aysegul.png" alt="2019 Çocuk Kitapları" />
                </a>
              </div>

              <div class="col-sm-6 sifirla kamsag">
                <a href="cocuk/bir-genc-kizin.html">
                  <img
                    class="yaylogo ybig"
                    src="resimler/bir-genc-kizin.png"
                    alt="2019 Çocuk Kitapları"
                  />
                </a>
              </div>

              <div class="col-sm-6 sifirla kamsol">
                <a href="cocuk/canavar.html">
                  <img class="yaylogo ybig" src="resimler/canavar.png" alt="2019 Çocuk Kitapları" />
                </a>
              </div>

              <div class="col-sm-6 sifirla kamsag">
                <a href="cocuk/harry-potter.html">
                  <img
                    class="yaylogo ybig"
                    src="resimler/harrypotter.png"
                    alt="2019 Çocuk Kitapları"
                  />
                </a>
              </div>

              <div class="col-sm-6 sifirla kamsol">
                <a href="cocuk/kaptan.html">
                  <img class="yaylogo ybig" src="resimler/kaptan.png" alt="2019 Çocuk Kitapları" />
                </a>
              </div>

              <div class="col-sm-6 sifirla kamsag">
                <a href="cocuk/kucuk-baylar.html">
                  <img
                    class="yaylogo ybig"
                    src="resimler/kucuk-baylar.png"
                    alt="2019 Çocuk Kitapları"
                  />
                </a>
              </div>
              <div class="balloons">
                <div class="balloon balloon1"></div>
                <div class="balloon balloon2"></div>
                <div class="balloon balloon3"></div>
                <div class="balloon balloon4"></div>
                <div class="balloon balloon5"></div>
                <div class="balloon balloon6"></div>
                <div class="balloon balloon7"></div>
                <div class="balloon balloon8"></div>
                <div class="balloon balloon9"></div>
                <div class="balloon balloon10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterPage />
  </div>
</template>



<script>
import Header from "./Header";
import Navbar from "./Navbar";
import TopBanner from "./TopBanner";
import FooterPage from "./FooterPage";
import VueLoading from "./VueLoading";
export default {
  name: "CocukPage",
  components: {
    Header,
    Navbar,
    TopBanner,
    FooterPage,
    VueLoading
  },created() {
      document.title = "Çocuk | Okuoku.com";
  }
};
</script>


<style scoped>
</style>



