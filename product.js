const mongoose = require('mongoose')

const productschema = new mongoose.Schema({
    name:String,
    Age:Number,
    email:String,
    phone :Number

})

module.exports = mongoose.model('products',productschema)