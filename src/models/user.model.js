const mongoose = require('mongoose')

const collection = "users"

const schema = new mongoose.Schema({
    first_name: {
        type: String,
        require:true
    },
    last_name: {
        type: String,
        require:true
    },
    email: {
        type: String,
        unique: true,
        require:true
    },
    age: {
        type: Number,
        require:true
    },
    password: {
        type: String,
        require:true
    },
    role: {
        type: String,
        default: 'user',
        require:true
    },
    cart:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'carts',
        require:true 
    }
})

schema.pre('findOne', function () {
    this.populate('cart')
}) 

module.exports = {collection, schema}