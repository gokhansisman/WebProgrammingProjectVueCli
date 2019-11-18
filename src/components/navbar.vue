<template>
  <header>
    <div class="bosluk">
      <nav
        class="anaMenu"
        style="min-height: 0;
            margin-bottom: 0; border-bottom: 2px solid #febf00;
            border-top: 1px solid #dfe0e2;
            height: 53px;
            "
      >
        <div class="container">
          <div>
            <ul class="nav navbar-nav">
              <li>
                <a href="/" title="Okuoku.com">
                  <i class="fa fa-home"></i>
                </a>
              </li>
              <li class="dropdown">
                <a href="/#/YeniCikanlarPage">
                  Yeni
                  Çıkanlar
                </a>

                <a href="#yeni-cikanlar" class="dropdown-child" style="color:goldenrod">Kitaplar</a>
                <a
                  href="/#/KampanyalarPage"
                  class="dropdown-child"
                  style="color:goldenrod"
                >Kampanyalar</a>
              </li>

              <li class="dropdown">
                <a href="/#/YayinEvleri">Yayınevleri</a>
                <a href="#yayinevi/listele" class="dropdown-child" style="color:goldenrod">Acedemia</a>
                <a
                  href="#yayinevi/listele"
                  class="dropdown-child"
                  style="color:goldenrod"
                >Adım Kitap</a>
              </li>
              <li class="dropdown">
                <a href="#kategori/listele">Kategoriler</a>
                <a
                  href="#yayinevi/listele"
                  class="dropdown-child"
                  style="color:goldenrod"
                >Bilgisayar</a>
                <a href="#yayinevi/listele" class="dropdown-child" style="color:goldenrod">Edebiyat</a>
              </li>
              <li style=" text-transform: uppercase;" class="dropdown">
                <a href="/#/KampanyalarPage" style="color: #5cb85c;">
                  <i class="fa fa-gift" style="color: #5cb85c;"></i>
                  <strong>&nbsp;KAMPANYALAR</strong>
                </a>
                <a href="#yayinevi/listele" class="dropdown-child" style="color:goldenrod">OKU OKU</a>
                <a
                  href="#yayinevi/listele"
                  class="dropdown-child"
                  style="color:goldenrod"
                >OGRENCILERE</a>
              </li>
              <li style=" text-transform: uppercase;">
                <a href="#avantajli-setler" style="color: #2196F3;">
                  <strong>
                    &nbsp;AVANTAJLI
                    SETLER
                  </strong>
                </a>
              </li>
              <li style=" text-transform: uppercase;">
                <a style="height:50px" href="#kitapkulubu">
                  <img src="resimler/kulupmenu.png" />
                </a>
              </li>
              <li style=" text-transform: uppercase;">
                <a href="#kampanyali-yayinevleri">
                  <i class="fa fa-paper-plane-o" style="color: #3598DC;"></i>
                  <strong style="color: #3598DC;">
                    &nbsp;
                    <span style="color:#9C27B0">Ç</span>
                    <span style="color:#FF9800">O</span>
                    <span style="color:#4CAF50">C</span>
                    <span style="color:#03A9F4">U</span>
                    <span style="color:#f44336">K</span>
                  </strong>
                </a>
              </li>
              <li style="float: right;bottom: 50px;left: 36px;">
                <a href="#favorilerim">
                  <i class="fa fa-heart" style="color: #D91E18;"></i>
                  <strong style="color: #D91E18;">&nbsp;FAVORİLERİM</strong>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bosluk {
    margin-top: 240px;
}
</style>
