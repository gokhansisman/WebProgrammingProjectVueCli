<template>
  <div>
     <VueLoading/>
    <div style="position: fixed; z-index: 20; width: 100%; top: 0px;">
      <TopBanner/>
      <Header />
    </div>
     <Navbar />
    <div>
      <div>
        <div class="container container-wrap">
          <div class="row">
            <div class="col-sm-3">
              <div class="urun bozelsol" style="width: 620px;">
                <div class="titlebck">Müşteri Hizmetleri</div>
                <AccordionMenu :contents="contents"></AccordionMenu>
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
import VueLoading from "./VueLoading"
export default {
  name: "AccordionHakkimizda",
  components: {
    Header,
    Navbar,
    TopBanner,
    FooterPage,
    VueLoading
  },
  data() {
    return {
      contents: [
        {
          title: "Hakkımızda",
          msg:
            " 2010 yılında Kitap sektörüne kalite, güven uygun fiyat ve hızlı gönderim yapabilmek, Türkiyedeki Online kitapçılığına hız kazandırmak amacıyla Okuoku.com Online Alışveriş sitesi hayata geçirilmiştir. Her geçen yıl müşteri portföyüne yenilerini ekleyen, müşterilerine birçok avantaj sağlayan ve sektöründe öncü firmalardan biri olma yolunda hızla ilerlemekteyiz.Binlerce kitapsevere hizmet vermemizin yanı sıra, sektörümüzdeki birçok internet sitesinin sağlayamadığı müşteri memnuniyetini en üst düzeyde tutmaktayız.Web sitemizde Türkiye il sınırlarında yayınlanan tüm kitapların satışı yapılmaktadır."
        },
        {
          title: "Mesafeli Satış Sözleşmesi",
          msg:
            "MESAFELİ SATIŞ SÖZLEŞMESİ MADDE 1- TARAFLAR 1.1- SATICI Adres : Maltepe Mahallesi Davutpaşa Caddesi Yılanlı Ayazma Sokak No:8 Zeytinburnu/ İstanbulÜnvanı : Okuoku Kitap Yayın Dağıtım Pazarlama Sanayi ve Ticaret Limirted Şirketi Telefon : (212) 481 31 11-12 Fax : (212) 481 31 10 E-mail : bilgi@okuoku.com1.2 -ALICI Adı/soyadı/Ünvanı: [*parametre1*]Adresi : [*parametre2*] Telefon: [*parametre3*] Email: [*parametre4*] MADDE 2- KONU İşbu mesafeli satış sözleşmesinin konusu, ALICI'nın SATICI'ya ait http://www.okuoku.com alan adlı internet sitesinden elektronik ortamda siparişini yaptığı aşağıda nitelikleri ve satış fiyatı belirtilen ürünün satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkındaki Kanun gereğince tarafların hak ve yükümlülüklerinin saptanmasıdır."
        },
        {
          title: "Sıkça Sorulan Sorular",
          msg:
            "Kargo Ücreti Ne Kadardır? İnternet sayfamızdan yapacağınız tüm alışverişlerde kargo ücreti Türkiye'nin her yerine sadece 5.00 TL’dir. 50 TL ve üzeri alışverişlerde kargo ücretsizdir. Kargom ne zaman ulaşır? Siparişleriniz kitapların temin süresine göre kargoya teslim edilir.Adrese teslimat seçeneğinde siparişiniz kargoya verildikten sonra MNG Kargo, PTT Kargo ve Aras Kargo  aracılığıyla 1-3 iş günü içerisinde adresinize teslim edilir.Mobil bölgelerde (ilçelere uzak) teslimatların biraz daha uzun sürebileceğini lütfen dikkate alınız. Resmi tatil ve bayram dönemlerinde kargo firmaları çalışmadığı için teslimatınız ilk iş günü içerisinde yapılacaktır. Not: Temin süresi: Sabah saat 8:00 den sonra verilen tüm siparişlerin tedariği 1 iş günü sonrası başlar ve yayınevi ve tedarikçilere göre değişiklik gösterebilir."
        },
        {
          title: "Yeni Üyelik",
          msg:
            'Nasıl üye olabilirim? Yeni bir üyelik oluşturmak için anasayfamızda sağ üst köşede bulunan "Hoş geldin ziyaretçi kayıt olun" butonuna tıklayınız. Üye Ol Formunu doldurarak kayıt ol demeniz yeterli olacaktır. Üye olmadan alışveriş yapabilir miyim? Sitemize üye olmadan alışveriş yapamazsınız Kampanyalardan ve yeni ürünlerden nasıl haberdar olabilirim? Kampanyalardan ve yeni ürünlerimizden üye kaydı oluştururken “e-posta veya sms ile bilgi almak istiyorum” seçeneğini seçebilirsiniz. Kişisel bilgilerim güvende mi? Başka şirket ve kurumlarla paylaşılacak mı? Kişisel bilgileriniz hiç bir kurum ve kuruluş ile paylaşılmamaktadır. Kredi kartı ve bankamatik kartı bilgileriniz hiçbir zaman sistemimize kaydedilmemektedir. Kişisel bilgilerinizin ve hesabınızın güvenliği için tüm dünyada yüksek güvenlik sağlayan ‘Norton Verisign SSL’ sertifikası ile şifrelenmiştir.'
        },
        {
          title: "Gizlilik ve Güvenlik",
          msg:
            "İşbu Gizlilik Politikası'nda kullanılan 'Kişisel Bilgiler' terimi sizi tanımlayabilecek isminiz, doğum tarihiniz, e- posta adresiniz veya posta adresiniz dahil fakat bunlarla sınırlı olmamak kaydıyla kredi kartı bilgileriniz, kimlik bilgileriniz gibi bilgileri ifade etmektedir. Okuoku Kitap Yay. Dağ. Paz. San. Ve Tic. Ltd. Şti. olarak biz, ( aşağıda kısaca 'OKUOKU' olarak anılacaktır. ) işbu gizlilik politikası ile tüm kullanıcılarımızı haklarında www.okuoku.com adlı internet sitesinden toplanan Kişisel Bilgilerin kullanımı ve ifşası hakkında bilgilendirmeyi hedeflemekteyiz. OKUOKU olarak biz, kullanıcılarımızın gizliliğine değer vermekte olup, bizimle paylaşılan kişisel bilgilerin gizliliği ve bilgilerin güvenliğini ile ilgili kullanıcılarımızın kaygılarını saygıyla karşılamaktayız. Bu nedenle 'Gizlilik Politikası' gizliliğinizi korumak ve bilgi temininde güvenli bir deneyim sağlamanız için tasarlamış olup, kullanıcıların onayı olmadan kişisel bilgilerini kullanmayacak ve Kişisel Bilgilerin kullanılmasında, tamamen uluslararası alanda kabul edilen mahremiyet koruma standartlarına uymayı taahhüt etmektedir."
        },
        {
          title: "İade ve Değişim İşlemleri",
          msg:
            "Siparişimdeki ürün veya ürünleri nasıl iade edebilirim? Okuoku’ dan satın aldığınız her ürünü, teslim tarihinden itibaren 15  gün içerisinde (iade talebinizi) belirterek iade edebilirsiniz. Satın aldığınız ürünün tahrip edilmemiş, kullanılmamış veya tekrar satılabilirliği bozulmamış olması gerekmektedir. İade edilecek ürünlerin mutlaka ürün faturasının orijinali ile birlikte teslimi gerekmektedir.Paketinizi herhangi bir MNG KARGO ve ARAS KARGO  şubesi aracılığı ile (aşağıda belirtilen cari kodla) karşı ödemeli olarak ücretsiz gönderebilirsiniz. Diğer tüm kargo şirketleriyle yapılan iadelerde, kargo ücreti müşteriye aittir."
        },
        {
          title: "Kargo ve Teslimat",
          msg:
            "Teslimat için ne kadar ücret ödenir? Kargo ücretimiz tüm siparişler için Türkiye' nin her yerine sadece 5,00 TL'dir. Kapıda nakit ödeme için ekstra bir ücret ödemem gerekir mi? 1000 TL’ye kadar olan siparişlerinizde kapıda nakit ödeme seçeneğimizden faydalanabilirsiniz. Kapıda nakit ödeme hizmet bedeli sadece 6,00 TL'dir. Siparişlerinize kargo ücretine ek olarak kapıda ödeme hizmet bedeli yansıtılacaktır. Kapıda nakit ödeme seçeneği ile sipariş verebilmeniz için üyelik hesabı oluşturmanız gerekmektedir. Kargom ne zaman ulaşır? Siparişleriniz kitapların temin süresine göre kargoya teslim edilir.Adrese teslimat seçeneğinde siparişiniz kargoya verildikten sonra MNG Kargo, PTT Kargo ve Aras Kargo  aracılığıyla 1-3 iş günü içerisinde adresinize teslim edilir.Mobil bölgelerde teslimatların biraz daha uzun sürebileceğini lütfen dikkate alınız. Resmi tatil ve bayram dönemlerinde kargo firmaları çalışmadığı için teslimatınız ilk iş günü içerisinde yapılacaktır."
        },
        {
          title: "Ödeme Seçenekleri",
          msg:
            "Alması'da Ödemeside Kolay Kitapçınız Okuoku’u tıkladınız ve binlerce ürün arasından en beğendiklerinizi seçip bir tık’la aldınız. Alışveriş tamam, sıra geldi ödemeye! Merak etmeyin, onun da kolayı var. Bizde ödeme seçeneği çok! Kredi kartı Havale/EFT Kapıda Nakit Kredi Kartıyla Ödeme Okuoku.com'dan verdiğiniz siparişlerin ödemesini kredi kartıyla online olarak yapabilirsiniz. İnternet üzerinden Worldcard, Bonus Card, Shop&Miles, Maximum Kart, Advantage, Paraf Kart Kredi Kartları ve bu kart özelliklerine sahip diğer banka kartlarını kullanarak taksitli  alışveriş yapabilirsiniz.Sitemizden yapacağınız peşin alışverişlerde tüm bankaların kredi kartlarını kullanabilirsiniz."
        }
      ]
    };
  },created() {
      document.title = "Hakkımızda | Okuoku.com";
  }
};
</script>





<style scoped>

</style>

