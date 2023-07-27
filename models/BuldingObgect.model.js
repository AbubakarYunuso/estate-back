const mongoose = require('mongoose')

// Модель для стоительного объекта 
const buldingObject = mongoose.Schema({
    name: String,
    final: Boolean,
    geo: String,
    image:[String],
    discript: String
})
const BuldingObject = mongoose.model('BuldingObject' , buldingObject)

module.exports = BuldingObject