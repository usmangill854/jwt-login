const mongoose = require('mongoose')
const userSchema =new mongoose.Schema( {
    name : {
        type : String,
        required : [true,'Must enter user name'],
        unique : true,
        trim : true
    },
    password : {
        type : Number,
        required : [true,'Must enter password']
    }
})
const User = mongoose.model('User',userSchema)
module.exports = User