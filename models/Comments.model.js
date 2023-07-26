const mongoose = require('mongoose')
const commentsSchema = mongoose.Schema({
    text:{
        type:String,
        default:''
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

const Comments = mongoose.model('Comments',commentsSchema)

module.exports = Comments
