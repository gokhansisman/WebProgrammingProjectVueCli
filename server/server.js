const express = require('express')

const app = express()

const db = require('./db/index.js')
const Musteriler = require('./model/musteriler.js')
const MusterilerFieldNames = require('./model/musteriler.js').fieldNames

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
    Musteriler.find({}).sort("soyad").exec(function(err, musteriler) {
        if (err) return res.json({hata:"hatalı"})
        const fieldNames = Object.keys(MusterilerFieldNames)
        res.json(musteriler);    
    })
})


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
            return res.json({err})
        }

        res.json({result: "Added"})
        console.log('Added')
    })
    
})

app.post('/save', (req, res) => {
    res.json({asd:233333})
})

app.listen(8080, () => console.log('Started on 8080'))