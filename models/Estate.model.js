const mongoose = require('mongoose')

const estateSchema = mongoose.Schema({
    image:String,
    rooms: Number,
    price:Number,
    desc:String,
    size:String,
    favorite: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }
})

const Estate = mongoose.model('Estate',estateSchema)

module.exports = Estate