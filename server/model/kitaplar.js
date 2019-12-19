const mongoose = require('mongoose')
const {Schema} = mongoose

const fieldNames = {
    kitapAdi: String,
    kitapYazar: String,
    kitapYayinevi:String,
    kitapYuzde: String,
    kitapFiyat: String,
    kitapIndirimliFiyat: String
}

const schema = new Schema({
    ...fieldNames
})

const Kitaplar = mongoose.model('Kitaplar', schema);

module.exports = Kitaplar
module.exports.fieldNames = fieldNames
