<template>
  <div>
    <div class="col-xs-12 sifirla">
      <section class="section-main-products clearfix">
        <div class="main-content-block">
          <div class="tab-block">
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active clearfix">
                <div class="govdeKitap">
                  <div class="kitaplar">
                    <div style="border-top: 1px solid #f6f6f6;margin-top: 1px;">
                      <div>
                        <div class="kitapCerceve clearfix">
                          <div class="col-xs-6 col-sm-4 col-md-4 col-lg-3">
                            <div class="kitapIcerik" style="height: 430px !important;width: 207px;">
                              <div>
                                <a style="text-decoration: none !important;" href="urun.html"></a>
                                <div class="prod">
                                  <a style="text-decoration: none !important;" href="urun.html">
                                    <div class="pr">
                                      <span
                                        class="resimWrap resimWrap-gorunur"
                                        style="width:145px;"
                                      >
                                        <img
                                          style="display: block;"
                                          width="145"
                                          class="mx"
                                          alt="issiz-kadinlar"
                                          src="resimler/middle-her-sey-seninle-baslar.jpg"
                                        />
                                      </span>
                                    </div>
                                  </a>
                                </div>
                                <a style="text-decoration: none !important;" href="#issiz-kadinlar">
                                  <h5
                                    style="height: 32px;
                                    color: #6f6d6e;
                                    font-family: verdana;
                                    font-weight: 300;
                                    margin-bottom: 5px !important;
                                    margin-top: 15px;
                                    text-decoration: none !important;
                                    padding-left: 3px;
                                    padding-right: 3px;"
                                  >{{kitapAdi1}}</h5>
                                </a>
                                <h6 style=" height: 13px; font-size: 10px; margin-top: 5px;">
                                  <span>
                                    <a href="#zeynep-sahra">
                                      <span>{{kitapYazar1}}</span>
                                    </a>
                                  </span>
                                </h6>
                                <h6 style="height: 13px; font-size: 10px; margin-top: 5px; ">
                                  <span>
                                    <a href="#ren-kitap">
                                      <span>{{kitapYayinEvi1}}</span>
                                    </a>
                                  </span>
                                </h6>
                                <div class="yildizlar clearfix">
                                  <div class="input select oyYildiz" style="margin-left: 15%;">
                                    <select class="slcVote" style="display: none;">
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option selected value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                    </select>
                                    <div class="oy-Sembol">
                                      <a
                                        href="#"
                                        data-rating-value="1"
                                        data-rating-text="1"
                                        class="oy-Secilen"
                                      >
                                        <span></span>
                                      </a>
                                      <a
                                        href="#"
                                        data-rating-value="2"
                                        data-rating-text="2"
                                        class="oy-Secilen"
                                      >
                                        <span></span>
                                      </a>
                                      <a
                                        href="#"
                                        data-rating-value="3"
                                        data-rating-text="3"
                                        class="oy-Secilen"
                                      >
                                        <span></span>
                                      </a>
                                      <a
                                        href="#"
                                        data-rating-value="4"
                                        data-rating-text="4"
                                        class="oy-Secilen"
                                      >
                                        <span></span>
                                      </a>
                                      <a href="#" data-rating-value="5" data-rating-text="5" class>
                                        <span></span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <span class="yuzde">
                                  %{{kitapYuzde}}
                                  <span>indirim</span>
                                </span>
                                <div class="top-eksi">
                                  <span class="eski-fiyat">{{kitapFiyat}}</span>
                                  <span class="yeniFiyat">{{kitapIndirimliFiyat}}TL</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-xs-6 col-sm-4 col-md-4 col-lg-3">
                            <div class="kitapIcerik" style="height: 430px !important;width: 207px;">
                              <div>
                                <a style="text-decoration: none !important;" href="urun.html"></a>
                                <div class="prod">
                                  <a style="text-decoration: none !important;" href="urun.html">
                                    <div class="pr">
                                      <span
                                        class="resimWrap resimWrap-gorunur"
                                        style="width:145px;"
                                      >
                                        <img
                                          style="display: block;"
                                          width="145"
                                          class="mx"
                                          alt="issiz-kadinlar"
                                          src="resimler/middle-aklimda-hep-sen.jpg"
                                        />
                                      </span>
                                    </div>
                                  </a>
                                </div>
                                <a style="text-decoration: none !important;" href="#issiz-kadinlar">
                                  <h5
                                    style="height: 32px;
                                    color: #6f6d6e;
                                    font-family: verdana;
                                    font-weight: 300;
                                    margin-bottom: 5px !important;
                                    margin-top: 15px;
                                    text-decoration: none !important;
                                    padding-left: 3px;
                                    padding-right: 3px;"
                                  >{{kitapAdi2}}</h5>
                                </a>
                                <h6 style=" height: 13px; font-size: 10px; margin-top: 5px;">
                                  <span>
                                    <a href="#zeynep-sahra">
                                      <span>{{kitapYazar2}}</span>
                                    </a>
                                  </span>
                                </h6>
                                <h6 style="height: 13px; font-size: 10px; margin-top: 5px; ">
                                  <span>
                                    <a href="#ren-kitap">
                                      <span>{{kitapYayinEvi2}}</span>
                                    </a>
                                  </span>
                                </h6>
                                <div class="yildizlar clearfix">
                                  <div class="input select oyYildiz" style="margin-left: 15%;">
                                    <select class="slcVote" style="display: none;">
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option selected value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                    </select>
                                    <div class="oy-Sembol">
                                      <a
                                        href="#"
                                        data-rating-value="1"
                                        data-rating-text="1"
                                        class="oy-Secilen"
                                      >
                                        <span></span>
                                      </a>
                                      <a
                                        href="#"
                                        data-rating-value="2"
                                        data-rating-text="2"
                                        class="oy-Secilen"
                                      >
                                        <span></span>
                                      </a>
                                      <a
                                        href="#"
                                        data-rating-value="3"
                                        data-rating-text="3"
                                        class="oy-Secilen"
                                      >
                                        <span></span>
                                      </a>
                                      <a
                                        href="#"
                                        data-rating-value="4"
                                        data-rating-text="4"
                                        class="oy-Secilen"
                                      >
                                        <span></span>
                                      </a>
                                      <a href="#" data-rating-value="5" data-rating-text="5" class>
                                        <span></span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <span class="yuzde">
                                  %{{kitapYuzde2}}
                                  <span>indirim</span>
                                </span>
                                <div class="top-eksi">
                                  <span class="eski-fiyat">{{kitapFiyat2}}</span>
                                  <span class="yeniFiyat">{{kitapIndirimliFiyat2}}TL</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-xs-6 col-sm-4 col-md-4 col-lg-3">
                            <div class="kitapIcerik" style="height: 430px !important;width: 207px;">
                              <div>
                                <a style="text-decoration: none !important;" href="urun.html"></a>
                                <div class="prod">
                                  <a style="text-decoration: none !important;" href="urun.html">
                                    <div class="pr">
                                      <span
                                        class="resimWrap resimWrap-gorunur"
                                        style="width:145px;"
                                      >
                                        <img
                                          style="display: block;"
                                          width="145"
                                          class="mx"
                                          alt="issiz-kadinlar"
                                          src="resimler/middle-siradan-bir-gun.jpg"
                                        />
                                      </span>
                                    </div>
                                  </a>
                                </div>
                                <a style="text-decoration: none !important;" href="#issiz-kadinlar">
                                  <h5
                                    style="height: 32px;
                                    color: #6f6d6e;
                                    font-family: verdana;
                                    font-weight: 300;
                                    margin-bottom: 5px !important;
                                    margin-top: 15px;
                                    text-decoration: none !important;
                                    padding-left: 3px;
                                    padding-right: 3px;"
                                  >{{kitapAdi3}}</h5>
                                </a>
                                <h6 style=" height: 13px; font-size: 10px; margin-top: 5px;">
                                  <span>
                                    <a href="#zeynep-sahra">
                                      <span>{{kitapYazar3}}</span>
                                    </a>
                                  </span>
                                </h6>
                                <h6 style="height: 13px; font-size: 10px; margin-top: 5px; ">
                                  <span>
                                    <a href="#ren-kitap">
                                      <span>{{kitapYayinEvi3}}</span>
                                    </a>
                                  </span>
                                </h6>
                                <div class="yildizlar clearfix">
                                  <div class="input select oyYildiz" style="margin-left: 15%;">
                                    <select class="slcVote" style="display: none;">
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option selected value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                    </select>
                                    <div class="oy-Sembol">
                                      <a
                                        href="#"
                                        data-rating-value="1"
                                        data-rating-text="1"
                                        class="oy-Secilen"
                                      >
                                        <span></span>
                                      </a>
                                      <a
                                        href="#"
                                        data-rating-value="2"
                                        data-rating-text="2"
                                        class="oy-Secilen"
                                      >
                                        <span></span>
                                      </a>
                                      <a
                                        href="#"
                                        data-rating-value="3"
                                        data-rating-text="3"
                                        class="oy-Secilen"
                                      >
                                        <span></span>
                                      </a>
                                      <a
                                        href="#"
                                        data-rating-value="4"
                                        data-rating-text="4"
                                        class="oy-Secilen"
                                      >
                                        <span></span>
                                      </a>
                                      <a href="#" data-rating-value="5" data-rating-text="5" class>
                                        <span></span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <span class="yuzde">
                                  %{{kitapYuzde3}}
                                  <span>indirim</span>
                                </span>
                                <div class="top-eksi">
                                  <span class="eski-fiyat">{{kitapFiyat3}}</span>
                                  <span class="yeniFiyat">{{kitapIndirimliFiyat3}}TL</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-xs-6 col-sm-4 col-md-4 col-lg-3">
                            <div class="kitapIcerik" style="height: 430px !important;width: 207px;">
                              <div>
                                <a style="text-decoration: none !important;" href="urun.html"></a>
                                <div class="prod">
                                  <a style="text-decoration: none !important;" href="urun.html">
                                    <div class="pr">
                                      <span
                                        class="resimWrap resimWrap-gorunur"
                                        style="width:145px;"
                                      >
                                        <img
                                          style="display: block;"
                                          width="145"
                                          class="mx"
                                          alt="issiz-kadinlar"
                                          src="resimler/middle-platon-bir-gun-karikatur-cizer.jpg"
                                        />
                                      </span>
                                    </div>
                                  </a>
                                </div>
                                <a style="text-decoration: none !important;" href="#issiz-kadinlar">
                                  <h5
                                    style="height: 32px;
                                    color: #6f6d6e;
                                    font-family: verdana;
                                    font-weight: 300;
                                    margin-bottom: 5px !important;
                                    margin-top: 15px;
                                    text-decoration: none !important;
                                    padding-left: 3px;
                                    padding-right: 3px;"
                                  >{{kitapAdi4}}</h5>
                                </a>
                                <h6 style=" height: 13px; font-size: 10px; margin-top: 5px;">
                                  <span>
                                    <a href="#zeynep-sahra">
                                      <span>{{kitapYazar4}}</span>
                                    </a>
                                  </span>
                                </h6>
                                <h6 style="height: 13px; font-size: 10px; margin-top: 5px; ">
                                  <span>
                                    <a href="#ren-kitap">
                                      <span>{{kitapYayinEvi4}}</span>
                                    </a>
                                  </span>
                                </h6>
                                <div class="yildizlar clearfix">
                                  <div class="input select oyYildiz" style="margin-left: 15%;">
                                    <select class="slcVote" style="display: none;">
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option selected value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                    </select>
                                    <div class="oy-Sembol">
                                      <a
                                        href="#"
                                        data-rating-value="1"
                                        data-rating-text="1"
                                        class="oy-Secilen"
                                      >
                                        <span></span>
                                      </a>
                                      <a
                                        href="#"
                                        data-rating-value="2"
                                        data-rating-text="2"
                                        class="oy-Secilen"
                                      >
                                        <span></span>
                                      </a>
                                      <a
                                        href="#"
                                        data-rating-value="3"
                                        data-rating-text="3"
                                        class="oy-Secilen"
                                      >
                                        <span></span>
                                      </a>
                                      <a
                                        href="#"
                                        data-rating-value="4"
                                        data-rating-text="4"
                                        class="oy-Secilen"
                                      >
                                        <span></span>
                                      </a>
                                      <a href="#" data-rating-value="5" data-rating-text="5" class>
                                        <span></span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <span class="yuzde">
                                  %{{kitapYuzde4}}
                                  <span>indirim</span>
                                </span>
                                <div class="top-eksi">
                                  <span class="eski-fiyat" style="top:-10px">{{kitapFiyat4}}</span>
                                  <span class="yeniFiyat">{{kitapIndirimliFiyat4}}TL</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
export default {
  name: "Book2",
  components: {},
  data() {
    return {
      kitapAdi1: "Her Şey Seninle Başlar",
      kitapYazar1: "Mümin Sekman",
      kitapYayinEvi1: "Alfa Yayınları",
      kitapYuzde1: "35",
      kitapFiyat1: "20,00",
      kitapIndirimliFiyat1: "13,00",
      kitapEditor1: "Nejla Feroğlu",

      kitapAdi2: "Aklımda Hep Sen",
      kitapYazar2: "Kürşat Başar",
      kitapYayinEvi2: "Everest Yayınları",
      kitapYuzde2: "35",
      kitapFiyat2: "29,00",
      kitapIndirimliFiyat2: "18,85",
      kitapEditor2: "Nejla Feroğlu",

      kitapAdi3: "Sıradan Bir Gün",
      kitapYazar3: "Yekta Kopan",
      kitapYayin3Evi: "Can Yayınları",
      kitapYuzde3: "30",
      kitapFiyat3: "24,50",
      kitapIndirimliFiyat3: "17,15",
      kitap3Editor: "Nejla Feroğlu",

      kitapAdi4: "Platon Bir Gün Bir Karikatür Çizer",
      kitapYazar4: "Thomas Cathcart , Daniel Klein",
      kitapYayinEvi4: "Aylak Kitap",
      kitapYuzde4: "20",
      kitapFiyat4: "29,50",
      kitapIndirimliFiyat4: "23,60",
      kitapEditor4: "Nejla Feroğlu",

    };
  },
  methods: {}
};
</script>

<style scoped>
.margin-ver {
  margin-top: -10px;
}

</style>