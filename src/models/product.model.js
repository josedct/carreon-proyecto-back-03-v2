const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const collection = 'products'

const schema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    code: { 
        type: String,
        uppercase: true, 
        required: true,
        unique: true 
    },
    price:  { 
        type:Number, 
        required: true 
    },
    status:  { 
        type:Boolean, 
        required: true 
    },
    stock:  { 
        type:Number, 
        required: true 
    },
    category: { 
        type: String, 
        required: true
    },
    thumbnails: {
        type: [String],
        default: []
    }
})

schema.plugin(mongoosePaginate)
module.exports = {collection, schema}