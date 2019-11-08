       <template>
       <head>
          <h4 class="name">Issız Kadınlar Sokağı</h4>
                                            <div itemprop="description">
                                                <p>Taciz, tecavüz, şiddet mağduru 20 kadının hikayesi…</p>
                                                <p>Erkek dişi sorulmaz, muhabbetin dilinde<br />Hakk’ın yarattığı her
                                                    şey yerli yerinde<br />Bizim nazarımızda, kadın erkek farkı
                                                    yok<br />Noksanlıkla eksiklik, senin görüşlerinde</p>
                                                <p>- Hacı Bektaş Veli</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="tab-pane comments" v-if="activetab === 2">
                                            <ul>

                                                <li>
                                                    <h4 class="title">Bu ürüne henüz yorum yapılmamış. İlk yorum yapan
                                                        siz
                                                        olabilirsiniz... </h4>
                                                </li>

                                            </ul>
                                            <div>

                                                <ul>
                                                    <li>
                                                        <h4 class="title"><a
                                                                href="/Kullanici/Giris/?/urun/detay/kitap/issiz-kadinlar-sokagi/1401532">Yorum
                                                                yapabilmek için giriş yapmalısınız.</a></h4>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="tab-pane" v-if="activetab === 3">

                                            <ul>
                                                <li>
                                                    <h4 class="title"><a
                                                            href="/Kullanici/Giris/?/urun/detay/kitap/issiz-kadinlar-sokagi/1401532">Hata
                                                            bildirimi için giriş yapmalısınız.</a></h4>
                                                </li>
                                            </ul>

                                        </div>

                                    </div>
                                    <div>
                                        <div style="height: 400px; overflow: scroll; overflow-x: hidden; padding-bottom: 50px;"
                                            class="tab-pane " v-if="activetab === 4 ">
                                            <table class="table_type_1 shopping_cart_table"
                                                style="width: 40%; padding: 0px; float: left; margin-bottom:10px;margin-right: 5%; margin-left: 5%"
                                                id="tblInstallment1">
                                                <thead>
                                                    <tr>
                                                        <th class="product_title_col" style="text-align: center;"
                                                            colspan="3">
                                                            <img src="resimler/akbank.gif" style="height: 33px">
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <thead>
                                                    <tr>
                                                        <th class="product_title_col"
                                                            style="text-align: center; width: 75px;">
                                                            Taksit</th>
                                                        <th class="product_title_col"
                                                            style="text-align: center; width: 75px;">Taksit Tutarı</th>
                                                        <th class="product_qty_col product_title_col"
                                                            style="text-align: center; width: 75px;">Toplam Tutar</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="subtotal" style="text-align: center;"><b>2</b></td>
                                                        <td class="subtotal" style="text-align: center;"><b>10.22 ₺</b>
                                                        </td>
                                                        <td class="subtotal" style="text-align: center;"><b>20.45 ₺</b>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="subtotal" style="text-align: center;"><b>3</b></td>
                                                        <td class="subtotal" style="text-align: center;"><b>6.92 ₺</b>
                                                        </td>
                                                        <td class="subtotal" style="text-align: center;"><b>20.75 ₺</b>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="subtotal" style="text-align: center;"><b>4</b></td>
                                                        <td class="subtotal" style="text-align: center;"><b>5.26 ₺</b>
                                                        </td>
                                                        <td class="subtotal" style="text-align: center;"><b>21.03 ₺</b>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="subtotal" style="text-align: center;"><b>5</b></td>
                                                        <td class="subtotal" style="text-align: center;"><b>4.27 ₺</b>
                                                        </td>
                                                        <td class="subtotal" style="text-align: center;"><b>21.35 ₺</b>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="subtotal" style="text-align: center;"><b>6</b></td>
                                                        <td class="subtotal" style="text-align: center;"><b>3.62 ₺</b>
                                                        </td>
                                                        <td class="subtotal" style="text-align: center;"><b>21.71 ₺</b>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="subtotal" style="text-align: center;"><b>7</b></td>
                                                        <td class="subtotal" style="text-align: center;"><b>3.15 ₺</b>
                                                        </td>
                                                        <td class="subtotal" style="text-align: center;"><b>22.06 ₺</b>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="subtotal" style="text-align: center;"><b>8</b></td>
                                                        <td class="subtotal" style="text-align: center;"><b>2.80 ₺</b>
                                                        </td>
                                                        <td class="subtotal" style="text-align: center;"><b>22.41 ₺</b>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="subtotal" style="text-align: center;"><b>9</b></td>
                                                        <td class="subtotal" style="text-align: center;">
                                                            <b>2.53 ₺</b></td>
                                                        <td class="subtotal" style="text-align: center;">
                                                            <b>22.79 ₺</b></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <!--OKUYORUM OKUMUYORUM KISMI -->
                <div class="ekbar clearfix" style="margin-left: 190px; ">
                    <div class="okusec">
                        <div class="radio clearfix">
                            <input type="radio" name="okuma" id="sec0" class="regular-radio" value="0"
                                disabled="disabled" />
                            <label for="sec0"></label>
                            <label for="sec0">
                                Okuyacağım <span id="spnInfo0">(2)</span>
                            </label>
                        </div>
                        <div class="radio clearfix">
                            <input type="radio" name="okuma" id="sec1" class="regular-radio" value="1"
                                disabled="disabled" />
                            <label for="sec1"></label>
                            <label for="sec1">
                                Okuyorum <span id="spnInfo1">(0)</span>
                            </label>
                        </div>
                        <div class="radio clearfix">
                            <input type="radio" name="okuma" id="sec2" class="regular-radio" value="2"
                                disabled="disabled" />
                            <label for="sec2"></label>
                            <label for="sec2">
                                Okudum <span id="spnInfo2">(0)</span>
                            </label>
                        </div>
                    </div>

                </div>

                <section class="ilhamBolum clearfix" style="margin-left: 190px;">
                    <div>
                        <div class="col-lg-12">
                            <h3 class="section-title">Yazar Canan Tan Diğer Kitaplar</h3>
                        </div>
                        <div class="ayirici col-lg-12 "></div>
                        <div class="clearfix"></div>
                        <div class="urunBlogu clearfix"
                            style="background-color: white; padding-top: 10px; padding-bottom: 10px;">
                            <div class="govdeKitap">
                                <div class="cikintiBlogu">
                                    <div class="kitaplar">
                                        <div>
                                            <div class="kitapCerceve clearfix sekil">
                                                <div class="col-xs-6 col-sm-4 col-md-4 col-lg-3"
                                                    id="urunSayfasiKitaplari1">
                                                    <div class="kitapIcerik" style="height: 430px !important;">
                                                        <div class="prod">
                                                            <a style="text-decoration: none !important;" href="#iz"></a>
                                                            <div class="prod">
                                                                <a style="text-decoration: none !important;" href="#iz">
                                                                    <div class="pr">
                                                                        <span class="resimWrap resimWrap-gorunur"
                                                                            style="width:145px;">
                                                                            <img style="display: block;" width="145"
                                                                                class="mx" alt="iz"
                                                                                src="resimler/middle-iz.jpg">
                                                                        </span></div>
                                                                </a></div>
                                                            <a style="text-decoration: none !important;" href="#">
                                                                <h5 style="height: 32px;
                                                                                        color: #6f6d6e;
                                                                                        font-family: verdana;
                                                                                        font-weight: 300;
                                                                                        margin-bottom: 5px !important;
                                                                                        margin-top: 15px;
                                                                                        text-decoration: none !important;
                                                                                        padding-left: 3px;
                                                                                        padding-right: 3px;">
                                                                    {{object.kitapAdi}}</h5>
                                                            </a>
                                                            <h6 style="
                                                                                    height: 13px;
                                                                                    font-size: 10px;
                                                                                    margin-top: 5px;
                                                                                    ">
                                                                <span><a href="#">
                                                                        <span>{{object.kitapYazar}}</span></a></span>
                                                            </h6>
                                                            <h6 style="
                                                                                    height: 13px;
                                                                                    font-size: 10px;
                                                                                    margin-top: 5px;
                                                                                    ">
                                                                <span><a href="#">
                                                                        <span>{{object.kitapYayinEvi}}</span></a></span>
                                                            </h6>
                                                            <div class="yildizlar clearfix">
                                                                <div class="input select oyYildiz"
                                                                    style="margin-left: 15%;">
                                                                    <select class="slcVote" style="display: none;">
                                                                        <option value="1">1
                                                                        </option>
                                                                        <option value="2">2
                                                                        </option>
                                                                        <option selected="" value="3">3
                                                                        </option>
                                                                        <option value="4">4
                                                                        </option>
                                                                        <option value="5">5
                                                                        </option>
                                                                    </select>
                                                                    <div class="oy-Sembol">
                                                                        <a href="#" data-rating-value="1"
                                                                            data-rating-text="1"
                                                                            class="oy-Secilen"><span></span></a><a
                                                                            href="#" data-rating-value="2"
                                                                            data-rating-text="2"
                                                                            class="oy-Secilen"><span></span></a><a
                                                                            href="#" data-rating-value="3"
                                                                            data-rating-text="3"
                                                                            class="oy-Secilen"><span></span></a><a
                                                                            href="#" data-rating-value="4"
                                                                            data-rating-text="4"
                                                                            class="br-current oy-Secilen"><span></span></a><a
                                                                            href="#" data-rating-value="5"
                                                                            data-rating-text="5"
                                                                            class=""><span></span></a>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <span
                                                                class="yuzde">%{{object.kitapYuzde}}<span>indirim</span></span>
                                                            <div class="top-eksi"><span
                                                                    class="eski-fiyat">{{object.kitapFiyat}}
                                                                    TL</span>
                                                                <span class="yeniFiyat">{{object.kitapIndirimliFiyat}}
                                                                    TL</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                </section>

                <section class="ilhamBolum clearfix" style="margin-left: 190px;">
                    <div>
                        <div class="col-lg-12">
                            <h3 class="section-title">Yayınevi 'DOĞAN KİTAP' Diğer Kitaplar</h3>
                        </div>
                        <div class="ayirici col-lg-12 "></div>
                        <div class="clearfix"></div>
                        <div class="urunBlogu clearfix"
                            style="background-color: white; padding-top: 10px; padding-bottom: 10px;">
                            <div class="govdeKitap">
                                <div class="cikintiBlogu">
                                    <div class="kitaplar">
                                        <div>
                                            <div class="kitapCerceve clearfix sekil">
                                                <div class="col-xs-6 col-sm-4 col-md-4 col-lg-3"
                                                    id="urunSayfasiKitaplari2">
                                                    <div class="kitapIcerik" style="height: 430px !important;">
                                                        <div class="prod">
                                                            <a style="text-decoration: none !important;"
                                                                href="#portakalin-yuzyili"></a>
                                                            <div class="prod">
                                                                <a style="text-decoration: none !important;"
                                                                    href="#portakalin-yuzyili">
                                                                    <div class="pr">
                                                                        <span class="resimWrap resimWrap-gorunur"
                                                                            style="width:145px;">
                                                                            <img style="display: block;" width="145"
                                                                                class="mx" alt="portakalin-yuzyili"
                                                                                src="resimler/big-raffi-portakal-portakalin-yuzyili.jpg">
                                                                        </span></div>
                                                                </a></div>
                                                            <a style="text-decoration: none !important;" href="#">
                                                                <h5 style="height: 32px;
                                                                                        color: #6f6d6e;
                                                                                        font-family: verdana;
                                                                                        font-weight: 300;
                                                                                        margin-bottom: 5px !important;
                                                                                        margin-top: 15px;
                                                                                        text-decoration: none !important;
                                                                                        padding-left: 3px;
                                                                                        padding-right: 3px;">
                                                                    {{object.kitapAdi}}</h5>
                                                            </a>
                                                            <h6 style="
                                                                                    height: 13px;
                                                                                    font-size: 10px;
                                                                                    margin-top: 5px;
                                                                                    ">
                                                                <span><a href="#">
                                                                        <span>{{object.kitapYazar}}</span></a></span>
                                                            </h6>
                                                            <h6 style="
                                                                                    height: 13px;
                                                                                    font-size: 10px;
                                                                                    margin-top: 5px;
                                                                                    ">
                                                                <span><a href="#">
                                                                        <span>{{object.kitapYayinEvi}}</span></a></span>
                                                            </h6>
                                                            <div class="yildizlar clearfix">
                                                                <div class="input select oyYildiz"
                                                                    style="margin-left: 15%;">
                                                                    <select class="slcVote" style="display: none;">
                                                                        <option value="1">1
                                                                        </option>
                                                                        <option value="2">2
                                                                        </option>
                                                                        <option selected="" value="3">3
                                                                        </option>
                                                                        <option value="4">4
                                                                        </option>
                                                                        <option value="5">5
                                                                        </option>
                                                                    </select>
                                                                    <div class="oy-Sembol">
                                                                        <a href="#" data-rating-value="1"
                                                                            data-rating-text="1"
                                                                            class="oy-Secilen"><span></span></a><a
                                                                            href="#" data-rating-value="2"
                                                                            data-rating-text="2"
                                                                            class="oy-Secilen"><span></span></a><a
                                                                            href="#" data-rating-value="3"
                                                                            data-rating-text="3"
                                                                            class="oy-Secilen"><span></span></a><a
                                                                            href="#" data-rating-value="4"
                                                                            data-rating-text="4"
                                                                            class="br-current oy-Secilen"><span></span></a><a
                                                                            href="#" data-rating-value="5"
                                                                            data-rating-text="5"
                                                                            class=""><span></span></a>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <span
                                                                class="yuzde">%{{object.kitapYuzde}}<span>indirim</span></span>
                                                            <div class="top-eksi"><span
                                                                    class="eski-fiyat">{{object.kitapFiyat}}
                                                                    TL</span>
                                                                <span class="yeniFiyat">{{object.kitapIndirimliFiyat}}
                                                                    TL</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                </section>
                <section class="ilhamBolum clearfix" style="margin-left: 190px;">
                    <div>
                        <div class="col-lg-12">
                            <h3 class="section-title">Bu Ürünü İnceleyenlerin, İncelediği Diğer Ürünler</h3>
                        </div>
                        <div class="ayirici col-lg-12 "></div>
                        <div class="clearfix"></div>
                        <div class="urunBlogu clearfix"
                            style="background-color: white; padding-top: 10px; padding-bottom: 10px;">
                            <div class="govdeKitap">
                                <div class="cikintiBlogu">
                                    <div class="kitaplar">
                                        <div>
                                            <div class="kitapCerceve clearfix sekil">
                                                <div class="col-xs-6 col-sm-4 col-md-4 col-lg-3"
                                                    id="urunSayfasiKitaplari3">
                                                    <div class="kitapIcerik" style="height: 430px !important;">
                                                        <div class="prod">
                                                            <a style="text-decoration: none !important;"
                                                                href="#kendine-hos-geldin"></a>
                                                            <div class="prod">
                                                                <a style="text-decoration: none !important;"
                                                                    href="#kendine-hos-geldin">
                                                                    <div class="pr">
                                                                        <span class="resimWrap resimWrap-gorunur"
                                                                            style="width:145px;">
                                                                            <img style="display: block;" width="145"
                                                                                class="mx" alt="Kendine Hoş Geldin"
                                                                                src="resimler/big-kendine-hos-geldin.jpg">
                                                                        </span></div>
                                                                </a></div>
                                                            <a style="text-decoration: none !important;" href="#">
                                                                <h5 style="height: 32px;
                                                                                        color: #6f6d6e;
                                                                                        font-family: verdana;
                                                                                        font-weight: 300;
                                                                                        margin-bottom: 5px !important;
                                                                                        margin-top: 15px;
                                                                                        text-decoration: none !important;
                                                                                        padding-left: 3px;
                                                                                        padding-right: 3px;">
                                                                    {{object.kitapAdi}}</h5>
                                                            </a>
                                                            <h6 style="
                                                                                    height: 13px;
                                                                                    font-size: 10px;
                                                                                    margin-top: 5px;
                                                                                    ">
                                                                <span><a href="#">
                                                                        <span>{{object.kitapYazar}}</span></a></span>
                                                            </h6>
                                                            <h6 style="
                                                                                    height: 13px;
                                                                                    font-size: 10px;
                                                                                    margin-top: 5px;
                                                                                    ">
                                                                <span><a href="#">
                                                                        <span>{{object.kitapYayinEvi}}</span></a></span>
                                                            </h6>
                                                            <div class="yildizlar clearfix">
                                                                <div class="input select oyYildiz"
                                                                    style="margin-left: 15%;">
                                                                    <select class="slcVote" style="display: none;">
                                                                        <option value="1">1
                                                                        </option>
                                                                        <option value="2">2
                                                                        </option>
                                                                        <option selected="" value="3">3
                                                                        </option>
                                                                        <option value="4">4
                                                                        </option>
                                                                        <option value="5">5
                                                                        </option>
                                                                    </select>
                                                                    <div class="oy-Sembol">
                                                                        <a href="#" data-rating-value="1"
                                                                            data-rating-text="1"
                                                                            class="oy-Secilen"><span></span></a><a
                                                                            href="#" data-rating-value="2"
                                                                            data-rating-text="2"
                                                                            class="oy-Secilen"><span></span></a><a
                                                                            href="#" data-rating-value="3"
                                                                            data-rating-text="3"
                                                                            class="oy-Secilen"><span></span></a><a
                                                                            href="#" data-rating-value="4"
                                                                            data-rating-text="4"
                                                                            class="br-current oy-Secilen"><span></span></a><a
                                                                            href="#" data-rating-value="5"
                                                                            data-rating-text="5"
                                                                            class=""><span></span></a>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <span
                                                                class="yuzde">%{{object.kitapYuzde}}<span>indirim</span></span>
                                                            <div class="top-eksi"><span
                                                                    class="eski-fiyat">{{object.kitapFiyat}}
                                                                    TL</span>
                                                                <span class="yeniFiyat">{{object.kitapIndirimliFiyat}}
                                                                    TL</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                </section>
                <section class="ilhamBolum clearfix" style="margin-left: 190px;">
                
                        <div class="col-lg-12">
                            <h3 class="section-title">Bu Ürünü Satın Alanların, Aldıkları Diğer Ürünler</h3>
                        </div>
                        <div class="ayirici col-lg-12 "></div>
                        <div class="clearfix"></div>
                        <div class="urunBlogu clearfix"
                            style="background-color: white; padding-top: 10px; padding-bottom: 10px;">
                            <div class="govdeKitap">
                                <div class="cikintiBlogu">
                                    <div class="kitaplar">
                                        <div>
                                            <div class="kitapCerceve clearfix sekil">
                                                <div class="col-xs-6 col-sm-4 col-md-4 col-lg-3"
                                                    id="urunSayfasiKitaplari4">
                                                    <div class="kitapIcerik" style="height: 430px !important;">
                                                        <div class="prod">
                                                            <a style="text-decoration: none !important;"
                                                                href="#kalbimin-can-mayasi"></a>
                                                            <div class="prod">
                                                                <a style="text-decoration: none !important;"
                                                                    href="#kalbimin-can-mayasi">
                                                                    <div class="pr">
                                                                        <span class="resimWrap resimWrap-gorunur"
                                                                            style="width:145px;">
                                                                            <img style="display: block;" width="145"
                                                                                class="mx" alt="kalbimin-can-mayasi"
                                                                                src="resimler/big-kalbimin-can-mayasi.jpg">
                                                                        </span></div>
                                                                </a></div>
                                                            <a style="text-decoration: none !important;" href="#">
                                                                <h5 style="height: 32px;
                                                                                        color: #6f6d6e;
                                                                                        font-family: verdana;
                                                                                        font-weight: 300;
                                                                                        margin-bottom: 5px !important;
                                                                                        margin-top: 15px;
                                                                                        text-decoration: none !important;
                                                                                        padding-left: 3px;
                                                                                        padding-right: 3px;">
                                                                    {{object.kitapAdi}}</h5>
                                                            </a>
                                                            <h6 style="
                                                                                    height: 13px;
                                                                                    font-size: 10px;
                                                                                    margin-top: 5px;
                                                                                    ">
                                                                <span><a href="#">
                                                                        <span>{{object.kitapYazar}}</span></a></span>
                                                            </h6>
                                                            <h6 style="
                                                                                    height: 13px;
                                                                                    font-size: 10px;
                                                                                    margin-top: 5px;
                                                                                    ">
                                                                <span><a href="#">
                                                                        <span>{{object.kitapYayinEvi}}</span></a></span>
                                                            </h6>
                                                            <div class="yildizlar clearfix">
                                                                <div class="input select oyYildiz"
                                                                    style="margin-left: 15%;">
                                                                    <select class="slcVote" style="display: none;">
                                                                        <option value="1">1
                                                                        </option>
                                                                        <option value="2">2
                                                                        </option>
                                                                        <option selected="" value="3">3
                                                                        </option>
                                                                        <option value="4">4
                                                                        </option>
                                                                        <option value="5">5
                                                                        </option>
                                                                    </select>
                                                                    <div class="oy-Sembol">
                                                                        <a href="#" data-rating-value="1"
                                                                            data-rating-text="1"
                                                                            class="oy-Secilen"><span></span></a><a
                                                                            href="#" data-rating-value="2"
                                                                            data-rating-text="2"
                                                                            class="oy-Secilen"><span></span></a><a
                                                                            href="#" data-rating-value="3"
                                                                            data-rating-text="3"
                                                                            class="oy-Secilen"><span></span></a><a
                                                                            href="#" data-rating-value="4"
                                                                            data-rating-text="4"
                                                                            class="br-current oy-Secilen"><span></span></a><a
                                                                            href="#" data-rating-value="5"
                                                                            data-rating-text="5"
                                                                            class=""><span></span></a>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <span
                                                                class="yuzde">%{{object.kitapYuzde}}<span>indirim</span></span>
                                                            <div class="top-eksi"><span
                                                                    class="eski-fiyat">{{object.kitapFiyat}}
                                                                    TL</span>
                                                                <span class="yeniFiyat">{{object.kitapIndirimliFiyat}}
                                                                    TL</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                </section>
          
                </head>
            </template>