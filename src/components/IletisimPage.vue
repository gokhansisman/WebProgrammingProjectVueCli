<template>
    <div>
    <div style="position: fixed; z-index: 20; width: 100%; top: 0px;">
      <TopBanner/>
      <Header/>

    </div>

    <Navbar />

    <div>
        <div class="container container-wrap">
            <div class="row">
                <div class="col-md-9">
                    <div class="urun">
                        <div class="titlebck">İletişim</div>

                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group iletisim">
                                    <div class="form-row">
                                        <span id="ContentPlaceHolder1_rfvNameSurname" style="color:#DD2331;font-size:Small;display:none;"><span></span>Boş olamaz.</span>
                                        <input name="ctl00$ContentPlaceHolder1$txtNameSurname" type="text" maxlength="50" id="ContentPlaceHolder1_txtNameSurname" class="form-control" placeholder="Ad &amp; Soyad" autocomplete="off" />

                                    </div>
                                    <div class="form-row">
                                        <span id="ContentPlaceHolder1_rfvPhoneNumber" style="color:#DD2331;font-size:Small;display:none;"><span></span>Boş olamaz.</span>
                                        <input name="ctl00$ContentPlaceHolder1$txtPhoneNumber" type="text" maxlength="20" id="ContentPlaceHolder1_txtPhoneNumber" class="form-control phoneNumber" placeholder="Telefon" autocomplete="off" />
                                    </div>
                                    <div class="form-row">
                                        <span id="ContentPlaceHolder1_rfvEmail" style="color:#DD2331;font-size:Small;display:none;"><span></span>Boş olamaz.</span>
                                        <input name="ctl00$ContentPlaceHolder1$txtEmail" type="text" maxlength="100" id="ContentPlaceHolder1_txtEmail" class="form-control" placeholder="Eposta" autocomplete="off" />
                                    </div>
                                    <div class="form-row">
                                        <span id="ContentPlaceHolder1_rfvSubject" style="color:#DD2331;font-size:Small;display:none;"><span></span>Boş olamaz.</span>
                                        <input name="ctl00$ContentPlaceHolder1$txtSubject" type="text" maxlength="100" id="ContentPlaceHolder1_txtSubject" class="form-control" placeholder="Konu" autocomplete="off" />
                                    </div>
                                    <div class="form-row">
                                        <span id="ContentPlaceHolder1_rfvMessage" style="color:#DD2331;font-size:Small;display:none;"><span></span>Boş olamaz.</span>
                                        <textarea name="ctl00$ContentPlaceHolder1$txtMessage" rows="5" cols="20" id="ContentPlaceHolder1_txtMessage" class="form-control" placeholder="Mesaj" autocomplete="off">
</textarea>
                                    </div>
                                    <div class="form-row">
                                        <a class="btn" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ContentPlaceHolder1$ctl00&quot;, &quot;&quot;, true, &quot;Contact&quot;, &quot;&quot;, false, true))">
                                                      <strong>GÖNDER</strong><i class="fa fa-check btnico"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="bilgi iletisim">
                                    <h4>İletişim Bilgilerimiz</h4>
                                    <p>Maltepe Mah. Davutpaşa Cad. Yılanlı Ayazma Sok. No.8 - C
Topkapı İSTANBUL, Zeytinburnu </p>
                                    
                                    <p><i class="fa fa-phone"></i>(0212) 481-31-11</p>
                                    
                                    <p><i class="fa fa-phone"></i>(0212) 481-31-12</p>
                                    
                                    <p><i class="fa fa-fax"></i>(0212) 481-31-10</p>
                                    
                                    <p><i class="fa fa-envelope"></i>bilgi@okuoku.com</p>
                                    
                                    <p><i class="fa fa-envelope"></i>bilgi@okuoku.com</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="col-md-3" style="bottom: 30px;">
                <div class="banner01">
                    <div class="row">
                        <div class="col-lg-12" id="divBannersGroupId4">
                            <div class="mg-image hidden-xs hidden-sm"><a
                                    href=" /urun/listele/cok-satanlar-2019/214"><img
                                        class="sp-image lazyload img-responsive" src="resimler/1284.jpg"
                                        style="display: block; margin-top: 28px;"></a></div>
                        </div>
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
  name: "IletisimPage",
  components: {
    Header,
    Navbar,
    TopBanner,
    FooterPage
  }
}
</script>