<template>
  <div>
    <VueLoading />
    <div style="position: fixed; z-index: 20; width: 100%; top: 0px;">
      <TopBanner />
      <Header />
    </div>

    <Navbar />
    <div>
      <md-steppers md-vertical style="float:left">
        <md-step id="first" md-label="Ürün Seç" md-description="İlk Adım">
          <PurchasePage1 />
        </md-step>

        <md-step id="second" md-label="Ürün Bilgileri" md-description="Burada Ürün iptali olabilir"
         @click="getProductInfo">
          <div v-if="visible">
            <div class="row sifirla">
              <div class="container sifirlaorta">
                <div class="col-md-9">
                  <div id="divBasketDetails" class="urun">
                    <div class="titlebck">Sepetim</div>
                    <table class="table_type_1 shopping_cart_table sepettablo">
                      <thead>
                        <tr>
                          <th class="product_image_col">Ürün</th>
                          <th>Fiyat</th>
                          <th class="product_qty_col">Adet</th>
                          <th>Toplam</th>
                          <th class="product_actions_col"></th>
                          <th class="product_actions_col">
                            <a
                              title
                              data-original-title="Tüm Sepeti Sil"
                              class="hoverTooltip"
                              style="cursor: pointer; font-size: 25px;"
                            >
                              <i class="fa fa-times"></i>
                            </a>
                          </th>
                        </tr>
                      </thead>
                      <tbody id="tbodyBasketDetails">
                        <tr id="tr1401532">
                          <td data-title="Product Image" class="product_image_col">
                            <div class="text-left">
                              <a href="urun.html" class="thumb-holder">
                                <img src="resimler/small-issiz-kadinlar-sokagi.jpg" class="listimg" />
                              </a>
                              <div class="title">
                                <a
                                  href="/urun/detay/kitap/issiz-kadinlar-sokagi/1401532"
                                  class="u-url"
                                >
                                  <h5 class="p-name">Issız Kadınlar Sokağı</h5>
                                </a>
                              </div>
                              <div class="brand">
                                <h6 class="p-brand">
                                  <span>
                                    <a
                                      href="/urun/listele/dogan-kitap/dogan-kitap/9118"
                                      itemprop="manufacturer"
                                    >
                                      <span>
                                        Doğan
                                        Kitap
                                      </span>
                                    </a>
                                  </span>
                                </h6>
                                <h6 class="p-brand">
                                  <span>
                                    <a href="/urun/listele/yazar/1/canan-tan/80240">
                                      <span>
                                        Canan
                                        Tan
                                      </span>
                                    </a>
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td data-title="Price" class="subtotal">19,44 TL</td>
                          <td data-title="Quantity">
                            <div id="sayiArttirma" class="qty min">
                              <div class="addto-cart-button">
                                <input type="button" id="minus" value="-" />
                                <input type="number" min="1" max="1000" />
                                <input type="button" value="+" />
                              </div>
                              <a class="hoverTooltip">
                                <i class="fa fa-refresh"></i>
                              </a>
                            </div>
                          </td>
                          <td class="total">{{19.44*count}} TL</td>
                          <td data-title="Action">
                            <a
                              title="Favorilerime Ekle"
                              class="hoverTooltip"
                              style="cursor: pointer;"
                            >
                              <i class="fa fa-exchange"></i>
                            </a>
                          </td>
                          <td data-title="Action">
                            <a title="Sil" class="hoverTooltip" style="cursor: pointer;">
                              <i class="fa fa-times"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div id="divCampaign" style="display: none;">
                    <br />
                    <div class="urun" style="border: 1px solid rgb(244, 67, 54);">
                      <div
                        class="titlebck flashblue"
                        style="font-size: 20px; text-align: center; line-height: 1.3;"
                      >
                        <span id="spnCampaignTitle">Ücretsiz Ürün Kampanyası</span>
                      </div>
                      <table class="table_type_1 shopping_cart_table">
                        <thead>
                          <tr>
                            <th style="text-align: left;">Ürün</th>
                            <th>Seçim</th>
                          </tr>
                        </thead>
                        <tbody id="tbyCampaignDetails" class="sepettablo"></tbody>
                      </table>
                    </div>
                  </div>
                  <div class="clearfix" style="margin-bottom: 10px;"></div>
                  <div id="divCampaignProductsCampaignType8" style="display: none;">
                    <br />
                    <div class="urun" style="border: 1px solid rgb(53, 152, 220);">
                      <div class="titlebck flashblue">
                        <span id="spnCampaignProductsCampaignType8Title">
                          Sepette
                          Ekstra İndirimli Ürünler
                        </span>
                      </div>
                      <table class="table_type_1 shopping_cart_table">
                        <thead>
                          <tr>
                            <th style="text-align: left;">Ürün</th>
                            <th style="text-align: center;">Fiyat</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody id="tbyCampaignDetailProductsCampaignType8" class="sepettablo"></tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div id="miktar" class="siparis-ozeti">
                    <div class="titlebck" style="text-align: center;">Sipariş Özeti</div>
                    <p>Ürün Adeti</p>
                    <p>
                      <span class="adt">{{count}}</span>
                    </p>
                    <hr class="hrr" />
                    <p>Ürün Tutarı</p>
                    <p>
                      <span id="spnTotalAmount" class="adt">{{count*19.44}} TL</span>
                    </p>
                    <hr class="hrr" />
                    <p>Kargo Tutarı</p>
                    <p>
                      <span id="spnShippingInformation" class="adt">Kargo Ücretsiz</span>
                    </p>
                    <a id="lnkAddOrder" href="#" onclick="CheckCampaign();" class="btn">
                      SATIN AL
                      <i class="fa fa-check btnico"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </md-step>

        <md-step id="third" md-label="Ödeme İşlemi"></md-step>
        <p>Burada ödeme işlemi gerçekleşir</p>
      </md-steppers>
      <FooterPage />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import Navbar from "./Navbar";
import TopBanner from "./TopBanner";
import FooterPage from "./FooterPage";
import VueLoading from "./VueLoading";
import PurchasePage1 from "./PurchasePage1";
export default {
  name: "PurchasePage",
  components: {
    Header,
    Navbar,
    TopBanner,
    FooterPage,
    VueLoading,
    PurchasePage1
  },data(){   
     return {
      count:0,
      visible:true
     }
  },
  methods:{
    deleteBasket(){
if(localStorage.getItem('Urun Sayisi') == 0) {
  this.visible=false;
  }
    },
    getProductInfo(){
      this.count = localStorage.getItem('Urun Sayisi')
    }
  },
    created() {
    document.title = "Satın Al | Okuoku.com";
  }
};
</script>