const mongoose = require('mongoose')
const {Schema} = mongoose

const fieldNames = {
    urunAdi: String,
    adet: String,
    musteri: String
}

const schema = new Schema({
    ...fieldNames
})

const Urunler = mongoose.model('Urunler', schema);

module.exports = Urunler
module.exports.fieldNames = fieldNames