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
                                  >{{books[0].kitapAdi}}</h5>
                                </a>
                                <h6 style=" height: 13px; font-size: 10px; margin-top: 5px;">
                                  <span>
                                    <a href="#zeynep-sahra">
                                      <span>{{books[0].kitapYazar}}</span>
                                    </a>
                                  </span>
                                </h6>
                                <h6 style="height: 13px; font-size: 10px; margin-top: 5px; ">
                                  <span>
                                    <a href="#ren-kitap">
                                      <span>{{books[0].kitapYayinevi}}</span>
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
                                  %{{books[0].kitapYuzde}}
                                  <span>indirim</span>
                                </span>
                                <div class="top-eksi">
                                  <span class="eski-fiyat">{{books[0].kitapFiyat}}</span>
                                  <span class="yeniFiyat">{{books[0].kitapIndirimliFiyat}}TL</span>
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
                                          alt="dun-bugun-yarın-ve-sonsuza-kadar"
                                          src="resimler/middle-dun-bugun-yarin-ve-sonsuza-kadar.jpg"
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
                                  >{{books[0].kitap2Adi}}</h5>
                                </a>
                                <h6 style=" height: 13px; font-size: 10px; margin-top: 5px;">
                                  <span>
                                    <a href="#zeynep-sahra">
                                      <span>{{books[1].kitapYazar}}</span>
                                    </a>
                                  </span>
                                </h6>
                                <h6 style="height: 13px; font-size: 10px; margin-top: 5px; ">
                                  <span>
                                    <a href="#ren-kitap">
                                      <span>{{books[1].kitapYayinevi}}</span>
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
                                  %{{books[1].kitapYuzde}}
                                  <span>indirim</span>
                                </span>
                                <div class="top-eksi">
                                  <span class="eski-fiyat">{{books[1].kitapFiyat}}</span>
                                  <span class="yeniFiyat">{{books[1].kitapIndirimliFiyat}}TL</span>
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
                                          src="resimler/middle-agacin-hafizasi.jpg"
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
                                  >{{books[2].kitapAdi}}</h5>
                                </a>
                                <h6 style=" height: 13px; font-size: 10px; margin-top: 5px;">
                                  <span>
                                    <a href="#zeynep-sahra">
                                      <span>{{books[2].kitapYazar}}</span>
                                    </a>
                                  </span>
                                </h6>
                                <h6 style="height: 13px; font-size: 10px; margin-top: 5px; ">
                                  <span>
                                    <a href="#ren-kitap">
                                      <span>{{books[2].kitapYayinevi}}</span>
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
                                  %{{books[2].kitapYuzde}}
                                  <span>indirim</span>
                                </span>
                                <div class="top-eksi">
                                  <span class="eski-fiyat">{{books[2].kitapFiyat}}</span>
                                  <span class="yeniFiyat">{{books[2].kitapIndirimliFiyat}}TL</span>
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
                                          src="resimler/middle-nalkoyu.jpg"
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
                                  >{{books[3].kitapAdi}}</h5>
                                </a>
                                <h6 style=" height: 13px; font-size: 10px; margin-top: 5px;">
                                  <span>
                                    <a href="#zeynep-sahra">
                                      <span>{{books[3].kitapYazar}}</span>
                                    </a>
                                  </span>
                                </h6>
                                <h6 style="height: 13px; font-size: 10px; margin-top: 5px; ">
                                  <span>
                                    <a href="#ren-kitap">
                                      <span>{{books[3].kitapYayinevi}}</span>
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
                                  %{{books[3].kitapYuzde}}
                                  <span>indirim</span>
                                </span>
                                <div class="top-eksi">
                                  <span class="eski-fiyat" style="top:-10px">{{books[3].kitapFiyat}}</span>
                                  <span class="yeniFiyat">{{books[3].kitapIndirimliFiyat}}TL</span>
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
let API_URL =""
if(localStorage.getItem("filtre")==="yazar"){
API_URL ="http://localhost:8080/kitap"
alert("gokhan")
}
else if(localStorage.getItem("filtre")==="fiyat"){
API_URL ="http://localhost:8080/fiyat" 
alert("gokhan22")
}

export default {
  name: "Book",
  components: {},
  data:() =>({
    hata:"",
    books:[]
  }),
  mounted(){
    fetch(API_URL)
    .then(response=>response.json())
    .then(result=>{
      this.books=result;
    });
  }
 /*  data() {
    return {
      kitap1Adi: "Issız Kadınlar Sokağı",
      kitap1Yazar: "Canan Tan",
      kitap1YayinEvi: "Doğan Kitap",
      kitap1Yuzde: "28",
      kitap1Fiyat: "27,00",
      kitap1IndirimliFiyat: "19,44",
      kitap1Editor: "Nejla Feroğlu",

      kitap2Adi: "Dün Bugün Yarın ve Sonsuza Kadar",
      kitap2Yazar: "Zeynep Sahr",
      kitap2YayinEvi: "Ren Kitap",
      kitap2Yuzde: "40",
      kitap2Fiyat: "30,00",
      kitap2IndirimliFiyat: "23,40",
      kitap2Editor: "Nejla Feroğlu",

      kitap3Adi: "Ağacın Hafızası",
      kitap3Yazar: "Tina Valles",
      kitap3YayinEvi: "Can Yayınları",
      kitap3Yuzde: "30",
      kitap3Fiyat: "27,50",
      kitap3IndirimliFiyat: "19,44",
      kitap3Editor: "19,25",

      kitap30Adi: "Nal Köyü",
      kitap30Yazar: "Mustafa İsen",
      kitap30YayinEvi: "Mustafa İsen",
      kitap30Yuzde: "28",
      kitap30Fiyat: "18,00",
      kitap30IndirimliFiyat: "12,96",
      kitap30Editor: "Nejla Feroğlu"
    }; */,
  methods: {}
};
</script>

<style scoped>
.margin-ver {
  margin-top: -10px;
}
</style>