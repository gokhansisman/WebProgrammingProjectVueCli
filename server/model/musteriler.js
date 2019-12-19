const mongoose = require('mongoose')
const {Schema} = mongoose

const fieldNames = {
    ismi: String,
    soyad: String,
    email: String,
    sifre: String,
    dogumTarihi: String
}

const schema = new Schema({
    ...fieldNames
})

const Musteriler = mongoose.model('Musteriler', schema);

module.exports = Musteriler
module.exports.fieldNames = fieldNames
