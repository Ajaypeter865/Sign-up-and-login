const mongoose = require('mongoose')


const SignUpSchema = new mongoose.Schema({
    user_name :{
        type: String,
        required: true,
    },
    email: {
         type: String,
        required: true,
       
    },
    password: {
         type: String,
        required: true,
    },
})

const singUpModel = mongoose.model('signUp', SignUpSchema)

module.exports = singUpModel