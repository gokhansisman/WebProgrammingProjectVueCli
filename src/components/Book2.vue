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
                                          src="resimler/middle-issiz-kadinlar-sokagi.jpg"
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
                                  >{{kitapAdi}}</h5>
                                </a>
                                <h6 style=" height: 13px; font-size: 10px; margin-top: 5px;">
                                  <span>
                                    <a href="#zeynep-sahra">
                                      <span>{{kitapYazar}}</span>
                                    </a>
                                  </span>
                                </h6>
                                <h6 style="height: 13px; font-size: 10px; margin-top: 5px; ">
                                  <span>
                                    <a href="#ren-kitap">
                                      <span>{{kitapYayinEvi}}</span>
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
                                          src="resimler/middle-issiz-kadinlar-sokagi.jpg"
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
                                  >{{kitapAdi}}</h5>
                                </a>
                                <h6 style=" height: 13px; font-size: 10px; margin-top: 5px;">
                                  <span>
                                    <a href="#zeynep-sahra">
                                      <span>{{kitapYazar}}</span>
                                    </a>
                                  </span>
                                </h6>
                                <h6 style="height: 13px; font-size: 10px; margin-top: 5px; ">
                                  <span>
                                    <a href="#ren-kitap">
                                      <span>{{kitapYayinEvi}}</span>
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
                                          src="resimler/middle-issiz-kadinlar-sokagi.jpg"
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
                                  >{{kitapAdi}}</h5>
                                </a>
                                <h6 style=" height: 13px; font-size: 10px; margin-top: 5px;">
                                  <span>
                                    <a href="#zeynep-sahra">
                                      <span>{{kitapYazar}}</span>
                                    </a>
                                  </span>
                                </h6>
                                <h6 style="height: 13px; font-size: 10px; margin-top: 5px; ">
                                  <span>
                                    <a href="#ren-kitap">
                                      <span>{{kitapYayinEvi}}</span>
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
                                          src="resimler/middle-issiz-kadinlar-sokagi.jpg"
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
                                  >{{kitapAdi}}</h5>
                                </a>
                                <h6 style=" height: 13px; font-size: 10px; margin-top: 5px;">
                                  <span>
                                    <a href="#zeynep-sahra">
                                      <span>{{kitapYazar}}</span>
                                    </a>
                                  </span>
                                </h6>
                                <h6 style="height: 13px; font-size: 10px; margin-top: 5px; ">
                                  <span>
                                    <a href="#ren-kitap">
                                      <span>{{kitapYayinEvi}}</span>
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
                                  <span class="eski-fiyat" style="top:-10px">{{kitapFiyat}}</span>
                                  <span class="yeniFiyat">{{kitapIndirimliFiyat}}TL</span>
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
      kitapAdi: "Issız Kadınlar Sokağı",
      kitapYazar: "Canan Tan",
      kitapYayinEvi: "Doğan Kitap",
      kitapYuzde: "28",
      kitapFiyat: "27,00",
      kitapIndirimliFiyat: "19,44",
      kitapEditor: "Nejla Feroğlu"
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