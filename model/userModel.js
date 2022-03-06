const mongoose = require('mongoose')
const userSchema =new mongoose.Schema( {
    email : {
        type : String,
        required : [true,'Must enter email'],
        unique : true,
        trim : true,
        match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password : {
        type : String,
        minlength : [6,'password should be more than 6 charecter'],
        required : [true,'Must enter password'],
        match : [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/,'please enter a secure password']
    }
})
const User = mongoose.model('User',userSchema)
module.exports = User