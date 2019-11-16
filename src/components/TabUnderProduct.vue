<template>
    <div class="mixed single-page-desc" style="margin-left: 190px;" >
                    <section class="section-main-products clearfix">
                        <div class="main-content-block">
                            <div class="tab-block">
                                 <ul class="nav nav-tabs">
                                    <li>
                                        <a @click="activetab1()"
                                            v-bind:class="[ activetab === 1 ? 'tikladik' : 'tiklanmadanOnce' ]">Açıklama</a>
                                    </li>
                                    <li><a @click="activetab2()"
                                            v-bind:class="[ activetab === 2 ? 'tikladik' : '' ]">Yorumlar</a></li>
                                    <li><a @click="activetab3()"
                                            v-bind:class="[ activetab === 3 ? 'tikladik' : '' ]">Hata Bildir</a></li>
                                    <li><a @click="activetab4()"
                                            v-bind:class="[ activetab === 4 ? 'tikladik' : '' ]">Taksit Seçenekleri</a>
                                    </li>

                                </ul> 
                                <div class="tab-content">
                                     <div role="tabpanel" class="tab-pane active clearfix" v-if="activetab === 1"> 
                                        <div class="row">
                                            <div class="col-md-5">
                                                <table class="table">
                                                    <tr>
                                                        <td><strong>Dil</strong></td>
                                                        <td>Türkçe</td>
                                                    </tr>

                                                    <tr>
                                                        <td><strong>Kağıt Cinsi</strong></td>
                                                        <td>2. Hamur</td>
                                                    </tr>

                                                    <tr>
                                                        <td><strong>Cilt Tipi</strong></td>
                                                        <td>Ciltsiz</td>
                                                    </tr>

                                                    <tr>
                                                        <td><strong>Basım Yeri</strong></td>
                                                        <td>İstanbul</td>
                                                    </tr>

                                                    <tr>
                                                        <td><strong>Yayın Tarihi</strong></td>
                                                        <td>Ekim-2019</td>
                                                    </tr>

                                                    <tr>
                                                        <td><strong>Baskı Sayısı</strong></td>
                                                        <td itemprop="bookEdition">1. Baskı</td>
                                                    </tr>

                                                    <tr>
                                                        <td><strong>Sayfa Sayısı</strong></td>
                                                        <td itemprop="numberOfPages">144</td>
                                                    </tr>

                                                    <tr>
                                                        <td><strong>Ölçü</strong></td>
                                                        <td>13,5x19,5 </td>
                                                    </tr>

                                                </table>
                                            </div>
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
</template>


<script>
export default {
  name: "YayinEvleriPage",
 data() {
    return {
      activetab: 1
    }
 },
 methods:{
     activetab1(){
         this.activetab=1
     },
     activetab2(){
        this.activetab=2
     },
     activetab3(){
        this.activetab=3
     },
     activetab4(){
        this.activetab=4
     }
 }
};
</script>