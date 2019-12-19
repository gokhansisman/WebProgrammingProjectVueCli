const express = require('express')

const app = express()

const db = require('./db/index.js')
const Musteriler = require('./model/musteriler.js')
const MusterilerFieldNames = require('./model/musteriler.js').fieldNames

const Urunler = require('./model/urunler')
const UrunlerFieldNames = require('./model/urunler').fieldNames

const Kitaplar = require('./model/kitaplar')
const KitaplarFieldNames = require('./model/kitaplar').fieldNames

app.set('json spaces', 3)
app.set('view engine', 'ejs')

const bodyParser = require("body-parser");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());


/*
app.get('/', (req, res) => {
    Words.find({}).sort("english").exec(function(err, users) {
        if (err) return res.render("index", {err})

        const fieldNames = Object.keys(WordsFieldNames)
        res.render("index", {users, fieldNames})
        
    })
})
*/
app.get('/', (req, res) => {
    Musteriler.find({}).sort("soyad").exec(function (err, musteriler) {
        if (err) return res.json({ hata: "hatalı" })
        const fieldNames = Object.keys(MusterilerFieldNames)
        res.json(musteriler);
    })
})

app.get('/urunler', (req, res) => {
    Urunler.find({}).sort("urunAdi").exec(function (err, urunler) {
        if (err) return res.json({ hata: "hatalı" })
        const fieldNames = Object.keys(UrunlerFieldNames)
        res.json(urunler);
    })
})
app.post('/urunlerEkle', (req, res) => {
    const nUrun = new Urunler({
        urunAdi: req.body.urunAdi,
        adet: req.body.adet,
        musteri: req.body.musteri,
        
    })

    nUrun.save((err) => {
        if (err) {
            return res.json({ err })
        }

        res.json({ result: "Added" })
        console.log('Added')
    })

})

app.get('/kitap', (req, res) => {
    Kitaplar.find({}).sort("kitapYazar").exec(function (err, kitap) {
        if (err) return res.json({ hata: "hatalı" })
        const fieldNames = Object.keys(KitaplarFieldNames)
        res.json(kitap);
    })
})
app.get('/fiyat', (req, res) => {
    Kitaplar.find({}).sort("kitapFiyat").exec(function (err, kitap) {
        if (err) return res.json({ hata: "hatalı" })
        const fieldNames = Object.keys(KitaplarFieldNames)
        res.json(kitap);
    })
})

app.post('/kitapAdd', (req, res) => {
    const nKitap = new Kitaplar({
        kitapAdi: req.body.kitapAdi,
        kitapYazar: req.body.kitapYazar,
        kitapYayinevi: req.body.kitapYayinevi,
        kitapYuzde: req.body.kitapYuzde,
        kitapFiyat: req.body.kitapFiyat,
        kitapIndirimliFiyat: req.body.kitapIndirimliFiyat
        
    })

    nKitap.save((err) => {
        if (err) {
            return res.json({ err })
        }

        res.json({ result: "Added" })
        console.log('Added')
    })

})

app.get('/filtre', function (req, res) {

    Kitaplar.findOne({kitapYazar: 'Zeynep Sahr'}).exec(function (err, kitap) {
        if (err) return res.json({ hata: "hatalı" })
        const fieldNames = Object.keys(KitaplarFieldNames)
        res.json(kitap);
    })
});


app.post('/login', function (req, res) {
    var ismi = req.body.ismi;
    var sifre = req.body.sifre;

    Musteriler.findOne({ ismi: ismi, sifre: sifre }, function (err, musteriler) {
        if (err) {
            return res.status(500).send();
        }
        if (!musteriler) {
            return res.status(404).send();
        }
        return res.status(200).send(true);
    })
});

app.post('/ekle', (req, res) => {
    const nMusteri = new Musteriler({
        ismi: req.body.ismi,
        soyad: req.body.soyad,
        email: req.body.email,
        sifre: req.body.sifre,
        dogumTarihi: req.body.dogumTarihi
    })

    nMusteri.save((err) => {
        if (err) {
            return res.json({ err })
        }

        res.json({ result: "Added" })
        console.log('Added')
    })

})

app.post('/save', (req, res) => {
    res.json({ asd: 233333 })
})

app.listen(8080, () => console.log('Started on 8080'))