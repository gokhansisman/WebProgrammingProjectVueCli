<template>
  <div>
    <VueLoading />
    <div style="position: fixed; z-index: 20; width: 100%; top: 0px;">
      <TopBanner />
      <Header />
    </div>
    <Navbar />
    <div>
      <div class="container container-wrap">
        <div class="row">
          <div class="col-md-6 girisform">
            <div class="urun">
              <div class="titlebck">Giriş</div>
              <div class="form-group">
                <label class="col-sm-3 control-label">Eposta</label>
                <div class="col-sm-9">
                  <input v-model="musteriLogin.ismi" type="text" maxlength="100" class="form-control" autocomplete="off" />

                  <span style="color:#DD2331;font-size:Small;display:none;">
                    <span></span>Boş
                    olamaz.
                  </span>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">Sifre</label>
                <div class="col-sm-9">
                  <input type="password" v-model="musteriLogin.sifre" maxlength="20" class="form-control" autocomplete="off" />
                  <span style="color:#DD2331;font-size:Small;display:none;">
                    <span></span>Boş
                    olamaz.
                  </span>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label hidden-xs"></label>
                <div class="col-sm-9">
                  <input type="checkbox" class="regular-checkbox" />
                  <label for="ContentPlaceHolder1_chcRememberMe"></label>
                  <label for="ContentPlaceHolder1_chcRememberMe">
                    <p>Beni hatırla</p>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label hidden-xs"></label>
                <div class="col-sm-9">
                  <button @click="loginOl()" class="btn" type="button" ValidationGroup="Login">
                    GİRİŞ
                    <i class="fa fa-check btnico"></i>
                  </button>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label hidden-xs"></label>
                <div class="col-sm-9">
                  <button class="btn face" type="button">
                    FACEBOOK İLE GİRİŞ{{basarilimi}}
                    <i class="fa fa-facebook-f btnico"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="urun">
              <div class="titlebck">Şifremi Unuttum</div>
              <div class="form-group">
                <label class="col-sm-3 control-label">Eposta</label>
                <div class="col-sm-9">
                  <input type="text" maxlength="100" class="form-control" autocomplete="off" />
                  <span style="color:#DD2331;font-size:Small;display:none;">
                    <span></span>Eposta formatı
                    uygun değil.
                  </span>
                  <span style="color:#DD2331;font-size:Small;display:none;">
                    <span></span>Boş
                    olamaz.
                  </span>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label hidden-xs"></label>
                <div class="col-sm-9">
                  <button class="btn" type="button" ValidationGroup="ForgotPassword">
                    GÖNDER
                    <i class="fa fa-check btnico"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 girisform">
            <div class="urun">
              <div class="titlebck">Üye Ol</div>
              <div class="form-group">
                <label class="col-sm-3 control-label">Ad</label>
                <div class="col-sm-9">
                  <input
                    v-model="musteri.ismi"
                    type="text"
                    maxlength="50"
                    class="firsCapitalUpper form-control"
                    autocomplete="off"
                  />
                  <span style="color:#DD2331;font-size:Small;display:none;">
                    <span></span>Boş
                    olamaz.
                  </span>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">Soyad</label>
                <div class="col-sm-9">
                  <input
                    v-model="musteri.soyad"
                    type="text"
                    maxlength="50"
                    class="firsCapitalUpper form-control"
                    autocomplete="off"
                  />
                  <span style="color:#DD2331;font-size:Small;display:none;">
                    <span></span>Boş
                    olamaz.
                  </span>
                </div>
              </div>

              <div class="form-group">
                <label class="col-sm-3 control-label">Eposta</label>
                <div class="col-sm-9">
                  <input
                    v-model="musteri.email"
                    type="text"
                    maxlength="100"
                    class="form-control"
                    autocomplete="off"
                  />
                  <span style="color:#DD2331;font-size:Small;display:none;">
                    <span></span>Eposta formatı
                    uygun değil.
                  </span>
                  <span style="color:#DD2331;font-size:Small;display:none;">
                    <span></span>Boş
                    olamaz.
                  </span>
                </div>
              </div>

              <div class="form-group">
                <label class="col-sm-3 control-label">Şifre</label>
                <div class="col-sm-9">
                  <input
                    v-model="musteri.sifre"
                    type="password"
                    maxlength="20"
                    class="form-control"
                    autocomplete="off"
                  />
                  <span style="color:#DD2331;font-size:Small;display:none;">
                    <span></span>Boş
                    olamaz.
                  </span>
                </div>
              </div>

              <div class="form-group">
                <label class="col-sm-3 control-label">Şifre Tekrar</label>
                <div class="col-sm-9">
                  <input type="password" maxlength="20" class="form-control" autocomplete="off" />
                  <span style="color:#DD2331;font-size:Small;display:none;">
                    <span></span>Boş
                    olamaz.
                  </span>
                  <span style="color:#DD2331;font-size:Small;display:none;">
                    <span></span>Şifre ve şifre
                    tekrar aynı olmalı.
                  </span>
                </div>
              </div>

              <div class="form-group">
                <label class="col-sm-3 control-label">Doğum Tarihi</label>
                <div class="col-sm-9">
                  <input
                    v-model="musteri.dogumTarihi"
                    type="text"
                    maxlength="16"
                    class="date form-control"
                    autocomplete="off"
                    data-mask-clearifnotmatch="true"
                    data-mask-selectonfocus="true"
                    data-mask="00/00/0000"
                    placeholder="GG/AA/YYYY"
                  />
                  <span style="color:#DD2331;font-size:Small;display:none;">
                    <span></span>Geçerli bir
                    tarih değil.
                  </span>
                </div>
              </div>

              <div class="form-group" style="display: none;">
                <label class="col-sm-3 control-label">Cinsiyet</label>
                <div class="col-sm-9">
                  <select class="form-control">
                    <option selected="selected" value="1">Erkek</option>
                    <option value="0">Kadın</option>
                  </select>
                </div>
              </div>
              <div class="form-group" style="display:none;">
                <label class="col-sm-3 control-label hidden-xs"></label>
                <div class="col-sm-9">
                  <input type="checkbox" class="regular-checkbox" />
                  <label for="ContentPlaceHolder1_chcSmsInfo"></label>
                  <label
                    for="ContentPlaceHolder1_chcSmsInfo"
                    class="checkbilgi"
                  >Sms ile bilgilendirilmek istiyorum.</label>
                </div>
              </div>

              <div class="form-group">
                <label class="col-sm-3 control-label hidden-xs"></label>
                <div class="col-sm-9">
                  <input type="checkbox" class="regular-checkbox" />
                  <label for="ContentPlaceHolder1_chcEmailInfo"></label>
                  <label for="ContentPlaceHolder1_chcEmailInfo" class="checkbilgi">
                    <p>Eposta ile bilgilendirilmek istiyorum.</p>
                  </label>
                </div>
              </div>

              <div class="form-group">
                <label class="col-sm-3 control-label hidden-xs"></label>
                <div class="col-sm-9">
                  <input type="checkbox" class="regular-checkbox" />
                  <label for="ContentPlaceHolder1_chcUserContract"></label>
                  <label for="ContentPlaceHolder1_chcUserContract" class="checkbilgi">
                    <a
                      onclick="window.open('C:/Users/Sisman/Desktop/WebProgrammingProject/uyelikSozlesmesi.html', 'agreement', 'height=800,width=600,scrollbars=yes,resizable=no'); return false;"
                      href="/uyelikSozlesmesi.html"
                    >
                      Sözleşmeyi okudum, anladım ve
                      onaylıyorum.
                    </a>
                  </label>
                </div>
              </div>

              <div class="form-group">
                <label class="col-sm-3 control-label hidden-xs"></label>
                <div class="col-sm-9">
                  <button @click="addMusteri()" class="btn" type="button" ValidationGroup="NewUser">
                    KAYDOL
                    <i class="fa fa-check btnico"></i>
                  </button>
                </div>
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
const API_URL = "http://localhost:8080";
import Header from "./Header";
import Navbar from "./Navbar";
import TopBanner from "./TopBanner";
//import FirstScreen from "./FirstScreen";
import FooterPage from "./FooterPage";
import VueLoading from "./VueLoading";
export default {
  name: "LoginPage",
  components: {
    Header,
    Navbar,
    TopBanner,
    FooterPage,
    VueLoading
  },
  data: () => ({
    error: "",
    musteriler: [],
    basarilimi:false,
    musteri: {
      isim: "",
      soyad: "",
      email: "",
      sifre: "",
      dogumTarihi: ""
    },
    musteriLogin: {
      ismi: "",
      sifre: ""
    },
    data:""
  }),
  created() {
    fetch(API_URL)
      .then(response => response.json())
      .then(result => {
        this.musteriler = result;
      });
  },
  mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then(result => {
        this.musteriler = result;
      });
  },
  methods: {
    addMusteri() {
      fetch(`http://localhost:8080/ekle`, {
        method: "POST",
        body: JSON.stringify(this.musteri),
        headers: {
          "content-type": "application/json"
        }
      })
        .then(response => response.json())
        .then(result => {
          if (result.details) {
            // there was an error...
            const error = result.details
              .map(detail => detail.message)
              .join(". ");
            this.error = error;
            this.basarilimi=false;
          } else {
            //this.basarilimi=!this.basarilimi;
            this.error = "";
            this.showMessageForm = false;
            alert('Gokhan');
            this.musteriler.push(result);
          }
        });
    },
    loginOl() {
      fetch('http://localhost:8080/login', {
        method: "POST",
        body: JSON.stringify(this.musteriLogin),
        headers: {
          "content-type": "application/json;odata=verbose"
        }
      })
        .then(response => response.json())
        .then(result => {
          if (result.details) {
            // there was an error...
            const error = result.details
              .map(detail => detail.message)
              .join(". ");
            this.error = error;
            
            alert("gokhan");
          } else {
            this.error = "";
            this.showMessageForm = false;
            alert('Gokhan');
            this.basarilimi=true;
            localStorage.setItem("kullanici",this.musteriLogin.ismi);
            localStorage.setItem("loading",true);
            //this.$router.push('/');
            window.history.back();
          }
        });
    }
  }
};
</script>


<style scoped>
</style>

