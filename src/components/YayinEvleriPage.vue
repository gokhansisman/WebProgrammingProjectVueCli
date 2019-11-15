<template>
    <div>
    <FirstScreen/>
    <div style="position: fixed; z-index: 20; width: 100%; top: 0px;">
      <TopBanner/>
      <Header />

    </div>

    <Navbar />
    <div>

        <div>
            <div id="fihristsayfa" class="container container-wrap">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="urun">
                            <div class="titlebck">YAYINEVİ LİSTELE</div>

                            <div class="form-group">
                                <label class="col-sm-2 control-label fihbas">Yayınevi Ara:</label>
                                <div class="col-sm-7">
                                    <div class="input-group">
                                        <input id="txtSearchText" type="text" class="form-control"
                                            aria-describedby="basic-addon3">
                                        <span class="input-group-addon">
                                            <button id="btnSearch" type="button" class="btn">
                                                LİSTELE
                                            </button>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-sm-3 hidden-xs">
                                </div>
                            </div>
                            <div class="content_publish">
                                <span class="btn letter">0-9</span>
                                <span class="btn active letter">A</span>
                                <span @click="tiklandi" class="btn letter">B</span>
                                <span class="btn letter">C</span>
                                <span class="btn letter">Ç</span>
                                <span class="btn letter">D</span>
                                <span class="btn letter">E</span>
                                <span class="btn letter">F</span>
                                <span class="btn letter">G</span>
                                <span class="btn letter">H</span>
                                <span class="btn letter">I</span>
                                <span class="btn letter">İ</span>
                                <span class="btn letter">J</span>
                                <span class="btn letter">K</span>
                                <span class="btn letter">L</span>
                                <span class="btn letter">M</span>
                                <span class="btn letter">N</span>
                                <span class="btn letter">O</span>
                                <span class="btn letter">Ö</span>
                                <span class="btn letter">P</span>
                                <span class="btn letter">Q</span>
                                <span class="btn letter">R</span>
                                <span class="btn letter">S</span>
                                <span class="btn letter">Ş</span>
                                <span class="btn letter">T</span>
                                <span class="btn letter">U</span>
                                <span class="btn letter">Ü</span>
                                <span class="btn letter">V</span>
                                <span class="btn letter">W</span>
                                <span class="btn letter">X</span>
                                <span class="btn letter">Y</span>
                                <span class="btn letter">Z</span>
                            </div>
                            <div id="divShow">
                                <div id="divList" class="row">
                                    <div class="col-sm-4">
                                        <a style="font-size: 17px;" class="section-title"
                                            href="#">A Kariyer
                                            Yayıncılık (2)</a></div>
                                    <div class="col-sm-4"><a style="font-size: 17px;" class="section-title"
                                            href="#">A Kitap (38)</a></div>
                                    <div class="col-sm-4"><a style="font-size: 17px;" class="section-title"
                                            href="#">A Yayınları (89)</a></div>
                                    
                                    <div class="col-sm-4"><a style="font-size: 17px;" class="section-title"
                                            href="#">Academia Yayınevi
                                            (1)</a></div>
                                    
                                </div>
                                <div>
                                    <div class="col-md-6 sifirla">
                                        <p>Listenen : 4</p>
                                    </div>
                                    <div class="col-md-6 sonucsayi sifirla">
                                        <ul class="ulPaging">
                                            <li><a class="aPageFirst paging not-active">İlk</a></li>
                                            <li><a class="aPageBack paging not-active">&lt;&lt;</a></li>
                                            <li class="paging activeli"><a>1</a></li>
                                            <li class="paging"><a class="aPageIndex">2</a></li>
                                            <li class="paging"><a class="aPageIndex">3</a></li>
                                            <li><a class="aPageNext paging">&gt;&gt;</a></li>
                                            <li><a class="aPageLast paging">Son</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id="divHide"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <input id="hdnActivePage" type="hidden" value="0">
        <input id="hdnPage" type="hidden" value="A">
        <input id="hdnPageCount" type="hidden" value="8">

    </div>
 <FooterPage/>
    </div>
</template>


<script>
import Header from "./Header"
import Navbar from "./Navbar"
import TopBanner from "./TopBanner"
import FirstScreen from "./FirstScreen"
import FooterPage from "./FooterPage"
export default {
  name: "YayinEvleriPage",
  components: {
    Header,
    Navbar,
    TopBanner,
    FirstScreen,
    FooterPage
  },methods:{
      tiklandi(){
          alert("Tiklandi");
      }
  }
};
</script>