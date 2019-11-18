<template>
  <div>
    <VueLoading />
    <div style="position: fixed; z-index: 20; width: 100%; top: 0px;">
      <TopBanner />
      <Header />
    </div>
    <Navbar />
    <div>
      <div>
        <div class="container container-wrap">
          <div class="row">
            <div class="col-md-3">
              <div id="divFilter">
                <div id="YayınEvifiltre" class="filtresag">
                  <div
                    data-toggle="collapse"
                    v-on:click="activeYayınEvi=!activeYayınEvi"
                    data-target="#ulManufacturersType2"
                    class="titlebck"
                    aria-expanded="true"
                  >Yayınevi Filtrele</div>
                  <ul
                    v-bind:class="[ activeYayınEvi === true ? 'aramalist collapse' : 'aramalist collapse in' ]"
                    aria-expanded="true"
                  >
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcManufacturers"
                          id="checkboxManufacturer13650"
                        />
                        <label for="checkboxManufacturer13650"></label>
                        <label for="checkboxManufacturer13650">Sokak Kitapları</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(7)</span>
                      </div>
                    </li>
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcManufacturers"
                          id="checkboxManufacturer8731"
                        />
                        <label for="checkboxManufacturer8731"></label>
                        <label for="checkboxManufacturer8731">Ayrıntı Yayınları</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(5)</span>
                      </div>
                    </li>
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcManufacturers"
                          id="checkboxManufacturer110312"
                        />
                        <label for="checkboxManufacturer110312"></label>
                        <label for="checkboxManufacturer110312">Gece Akademi</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(3)</span>
                      </div>
                    </li>
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcManufacturers"
                          id="checkboxManufacturer9381"
                        />
                        <label for="checkboxManufacturer9381"></label>
                        <label for="checkboxManufacturer9381">Gece Kitaplığı</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(3)</span>
                      </div>
                    </li>
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcManufacturers"
                          id="checkboxManufacturer9640"
                        />
                        <label for="checkboxManufacturer9640"></label>
                        <label for="checkboxManufacturer9640">İnsan Yayınları</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(3)</span>
                      </div>
                    </li>

                    <li class="manufacturerType2" style="display:none;">
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcManufacturers"
                          id="checkboxManufacturer12817"
                        />
                        <label for="checkboxManufacturer12817"></label>
                        <label for="checkboxManufacturer12817">Pay Yayınları</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>
                    <li class="manufacturerType2" style="display:none;">
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcManufacturers"
                          id="checkboxManufacturer14823"
                        />
                        <label for="checkboxManufacturer14823"></label>
                        <label for="checkboxManufacturer14823">Puslu Yayıncılık</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>
                    <li class="manufacturerType2" style="display:none;">
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcManufacturers"
                          id="checkboxManufacturer13847"
                        />
                        <label for="checkboxManufacturer13847"></label>
                        <label for="checkboxManufacturer13847">Son Çağ Yayınları</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>
                    <li class="manufacturerType2" style="display:none;">
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcManufacturers"
                          id="checkboxManufacturer13452"
                        />
                        <label for="checkboxManufacturer13452"></label>
                        <label for="checkboxManufacturer13452">Uçan Fil</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>
                    <li style="margin-top: 5px">
                      <a
                        
                        style="color: #febf00; font-weight: bold; font-size: 15px; margin-left: 18px; cursor:pointer;"
                      >Devamı</a>
                    </li>
                  </ul>
                </div>
                <div id="Yazarfiltre" class="filtresag">
                  <div
                    class="titlebck"
                    v-on:click="activeYazar=!activeYazar"
                    data-toggle="collapse"
                    data-target="#ulEmployeesType1"
                    aria-expanded="true"
                  >Yazar Filtrele</div>
                  <ul
                    v-bind:class="[ activeYazar === true ? 'aramalist collapse' : 'aramalist collapse in' ]"
                    aria-expanded="true"
                  >
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcEmployees1"
                          id="checkboxEmployee1-81396"
                        />
                        <label for="checkboxEmployee1-81396"></label>
                        <label for="checkboxEmployee1-81396">Beşir Ayvazoğlu</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(2)</span>
                      </div>
                    </li>
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcEmployees1"
                          id="checkboxEmployee1-312113"
                        />
                        <label for="checkboxEmployee1-312113"></label>
                        <label for="checkboxEmployee1-312113">Adem Alağaş</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcEmployees1"
                          id="checkboxEmployee1-306774"
                        />
                        <label for="checkboxEmployee1-306774"></label>
                        <label for="checkboxEmployee1-306774">Alper Er</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcEmployees1"
                          id="checkboxEmployee1-102348"
                        />
                        <label for="checkboxEmployee1-102348"></label>
                        <label for="checkboxEmployee1-102348">Ata Tuncer</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>

                    <li class="employeeType1" style="display:none;">
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcEmployees1"
                          id="checkboxEmployee1-312114"
                        />
                        <label for="checkboxEmployee1-312114"></label>
                        <label for="checkboxEmployee1-312114">Hilmi Karakaş</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>
                    <li class="employeeType1" style="display:none;">
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcEmployees1"
                          id="checkboxEmployee1-78903"
                        />
                        <label for="checkboxEmployee1-78903"></label>
                        <label for="checkboxEmployee1-78903">Honore De Balzac</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>
                    <li class="employeeType1" style="display:none;">
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcEmployees1"
                          id="checkboxEmployee1-90107"
                        />
                        <label for="checkboxEmployee1-90107"></label>
                        <label for="checkboxEmployee1-90107">Hüseyin Rahmi Gürpınar</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>
                    <li class="employeeType1" style="display:none;">
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcEmployees1"
                          id="checkboxEmployee1-185236"
                        />
                        <label for="checkboxEmployee1-185236"></label>
                        <label for="checkboxEmployee1-185236">İsmail Hakkı</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>
                    <li class="employeeType1" style="display:none;">
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcEmployees1"
                          id="checkboxEmployee1-166629"
                        />
                        <label for="checkboxEmployee1-166629"></label>
                        <label for="checkboxEmployee1-166629">İsmail Isparta</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>
                    <li class="employeeType1" style="display:none;">
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcEmployees1"
                          id="checkboxEmployee1-312089"
                        />
                        <label for="checkboxEmployee1-312089"></label>
                        <label for="checkboxEmployee1-312089">John A. Herlihy</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>
                    <li class="employeeType1" style="display:none;">
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcEmployees1"
                          id="checkboxEmployee1-273113"
                        />
                        <label for="checkboxEmployee1-273113"></label>
                        <label for="checkboxEmployee1-273113">Kamil Kısakol</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>
                    <li class="employeeType1" style="display:none;">
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcEmployees1"
                          id="checkboxEmployee1-181781"
                        />
                        <label for="checkboxEmployee1-181781"></label>
                        <label for="checkboxEmployee1-181781">Kolektif</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>
                    <li class="employeeType1" style="display:none;">
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcEmployees1"
                          id="checkboxEmployee1-256695"
                        />
                        <label for="checkboxEmployee1-256695"></label>
                        <label for="checkboxEmployee1-256695">Lordist</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>
                    <li class="employeeType1" style="display:none;">
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcEmployees1"
                          id="checkboxEmployee1-188010"
                        />
                        <label for="checkboxEmployee1-188010"></label>
                        <label for="checkboxEmployee1-188010">M. Hakan Keskin</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>
                    <li class="employeeType1" style="display:none;">
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcEmployees1"
                          id="checkboxEmployee1-77507"
                        />
                        <label for="checkboxEmployee1-77507"></label>
                        <label for="checkboxEmployee1-77507">Maksim Gorki</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>
                    <li class="employeeType1" style="display:none;">
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcEmployees1"
                          id="checkboxEmployee1-312120"
                        />
                        <label for="checkboxEmployee1-312120"></label>
                        <label for="checkboxEmployee1-312120">Mehmet Emin Kırgil</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>
                    <li style="margin-top: 5px">
                      <a
                        style="color: #febf00; font-weight: bold; font-size: 15px; margin-left: 18px; cursor:pointer;"
                      >Devamı</a>
                    </li>
                  </ul>
                </div>
                <div id="KategoriFiltre" class="filtresag">
                  <div
                    class="titlebck"
                    v-on:click="activeKategori=!activeKategori"
                    data-toggle="collapse"
                    aria-expanded="true"
                  >Kategori Filtrele</div>
                  <ul
                    v-bind:class="[ activeKategori === true ? 'aramalist collapse' : 'aramalist collapse in' ]"
                    aria-expanded="true"
                  >
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcCategories"
                          id="checkboxCategory9272819"
                        />
                        <label for="checkboxCategory9272819"></label>
                        <label for="checkboxCategory9272819">Roman</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(12)</span>
                      </div>
                    </li>
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcCategories"
                          id="checkboxCategory9272826"
                        />
                        <label for="checkboxCategory9272826"></label>
                        <label for="checkboxCategory9272826">Şiir</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(5)</span>
                      </div>
                    </li>
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcCategories"
                          id="checkboxCategory9272845"
                        />
                        <label for="checkboxCategory9272845"></label>
                        <label for="checkboxCategory9272845">Akademik</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(4)</span>
                      </div>
                    </li>
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcCategories"
                          id="checkboxCategory9272875"
                        />
                        <label for="checkboxCategory9272875"></label>
                        <label for="checkboxCategory9272875">Araştırma-İnceleme</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(3)</span>
                      </div>
                    </li>
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcCategories"
                          id="checkboxCategory9272905"
                        />
                        <label for="checkboxCategory9272905"></label>
                        <label for="checkboxCategory9272905">Masallar</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(3)</span>
                      </div>
                    </li>
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcCategories"
                          id="checkboxCategory9272827"
                        />
                        <label for="checkboxCategory9272827"></label>
                        <label for="checkboxCategory9272827">Biyografi-Otobiyogafi</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(2)</span>
                      </div>
                    </li>
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcCategories"
                          id="checkboxCategory9272831"
                        />
                        <label for="checkboxCategory9272831"></label>
                        <label for="checkboxCategory9272831">Araştırma - İnceleme</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcCategories"
                          id="checkboxCategory9272919"
                        />
                        <label for="checkboxCategory9272919"></label>
                        <label for="checkboxCategory9272919">Astroloji-Fal- Rüya</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcCategories"
                          id="checkboxCategory9272828"
                        />
                        <label for="checkboxCategory9272828"></label>
                        <label for="checkboxCategory9272828">Deneme</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>

                    <li class="category" style="display:none;">
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcCategories"
                          id="checkboxCategory9272900"
                        />
                        <label for="checkboxCategory9272900"></label>
                        <label for="checkboxCategory9272900">Eleştiri, İnceleme, Kuram</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>

                    <li class="category" style="display:none;">
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcCategories"
                          id="checkboxCategory9272858"
                        />
                        <label for="checkboxCategory9272858"></label>
                        <label for="checkboxCategory9272858">Öykü</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>
                    <li class="category" style="display:none;">
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcCategories"
                          id="checkboxCategory9272865"
                        />
                        <label for="checkboxCategory9272865"></label>
                        <label for="checkboxCategory9272865">Sınavlara Hazırlık Kitapları</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(1)</span>
                      </div>
                    </li>

                    <li style="margin-top: 5px">
                      <a
                        style="color: #febf00; font-weight: bold; font-size: 15px; margin-left: 18px; cursor:pointer;"
                      >Devamı</a>
                    </li>
                  </ul>
                </div>
                <div id="FiyatFiltre" class="filtresag">
                  <div
                    class="titlebck"
                    v-on:click="activeFiyat=!activeFiyat"
                    data-toggle="collapse"
                    data-target="#ulPriceRanges"
                    aria-expanded="true"
                  >Fiyat Filtrele</div>
                  <ul
                    v-bind:class="[ activeFiyat === true ? 'aramalist collapse' : 'aramalist collapse in' ]"
                    aria-expanded="true"
                  >
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcPriceRanges"
                          id="checkboxPriceRange1"
                        />
                        <label for="checkboxPriceRange1"></label>
                        <label for="checkboxPriceRange1">0 - 10 TL</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(2)</span>
                      </div>
                    </li>
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcPriceRanges"
                          id="checkboxPriceRange2"
                        />
                        <label for="checkboxPriceRange2"></label>
                        <label for="checkboxPriceRange2">10 - 20 TL</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(12)</span>
                      </div>
                    </li>
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcPriceRanges"
                          id="checkboxPriceRange3"
                        />
                        <label for="checkboxPriceRange3"></label>
                        <label for="checkboxPriceRange3">20 - 30 TL</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(16)</span>
                      </div>
                    </li>
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcPriceRanges"
                          id="checkboxPriceRange4"
                        />
                        <label for="checkboxPriceRange4"></label>
                        <label for="checkboxPriceRange4">30 - 40 TL</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(4)</span>
                      </div>
                    </li>
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcPriceRanges"
                          id="checkboxPriceRange5"
                        />
                        <label for="checkboxPriceRange5"></label>
                        <label for="checkboxPriceRange5">40 - 50 TL</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(5)</span>
                      </div>
                    </li>
                    <li>
                      <div
                        style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox chcPriceRanges"
                          id="checkboxPriceRange6"
                        />
                        <label for="checkboxPriceRange6"></label>
                        <label for="checkboxPriceRange6">50 TL ve üzeri</label>
                      </div>
                      <div style="float: right; margin-right: 5px; margin-top: 7px">
                        <span class>(4)</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-9">
              <div class="urun">
                <div class="titlebck" id="divFilteringDescription">'Yeni Çıkanlar'</div>
                <div class="filtrealan">
                  <div class="col-md-6">
                    <select id="slcOrderBy" class="form-control">
                      <option value="P.SaleQuantity DESC">Çok Satandan Az Satana</option>
                      <option selected="selected" value="ProductId Desc">Yeniden Eskiye</option>
                      <option value="ProductId ASC">Eskiden yeniye</option>
                      <option value="P.Name ASC">İsme göre artan (A-&gt;Z)</option>
                      <option value="P.Name DESC">İsme göre azalan (Z-&gt;A)</option>
                      <option value="P.SalePrice DESC">Fiyata göre azalan</option>
                      <option value="P.SalePrice ASC">Fiyata göre artan</option>
                    </select>
                  </div>
                  <div class="col-md-6 sonucsayi sifirla hidden-sm hidden-xs">
                    <v-pagination
                      v-model="currentPage"
                      :page-count="totalPages"
                      :classes="bootstrapPaginationClasses"
                      :labels="paginationAnchorTexts"
                    ></v-pagination>
                  </div>
                </div>
                <div class="clearfix"></div>       
                <div v-bind:class="[ shape === true ? 'oneByone' : 'fourGroups' ]" @click="changeShape()"> 
                <Book v-if="currentPage===1" />
                <Book2 v-if="currentPage===2"/>
                <Book3 v-if="currentPage===3"/>
                <Book30 v-if="currentPage===30"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <FooterPage />
    </div>
  </div>
</template>



<script>
import vPagination from "vue-plain-pagination";
import Header from "./Header";
import Navbar from "./Navbar";
import TopBanner from "./TopBanner";
import FooterPage from "./FooterPage";
import VueLoading from "./VueLoading";
import Book from "./Book";
import Book2 from "./Book2";
import Book3 from "./Book3";
import Book30 from "./Book30";

export default {
  name: "YeniCikanlarPage",
  components: {
    Header,
    Navbar,
    TopBanner,
    FooterPage,
    VueLoading,
    vPagination,
    Book,
    Book2,
    Book3,
    Book30
  },
  data() {
    return {
      currentPage: 1,
      totalPages: 30,
      activeYayınEvi: false,
      activeYazar: false,
      activeKategori: false,
      activeFiyat: false,
      shape:true,
      bootstrapPaginationClasses: {
        ul: "pagination",
        li: "page-item",
        liActive: "active",
        liDisable: "disabled",
        button: "page-link"
      },
      paginationAnchorTexts: {
        first: "İlk",
        prev: "<<",
        next: ">>",
        last: "Son"
      }
    };
  },
  methods: {
    changeShape(){
      this.shape=!this.shape
    }
  },
  created() {
    document.title = "Yeni Çıkanlar | Okuoku.com";
  }
};
</script>

<style scoped>
.oneByone {
  -webkit-appearance: searchfield-cancel-button;
}
.fourGroups {

}
</style>
