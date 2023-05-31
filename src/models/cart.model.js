const mongoose = require('mongoose')

const collection = 'carts'

const productSchema = new mongoose.Schema({
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products',
            require:true 
        },
        quantity: {
            type: Number,
            default: 1,
            require: true
        }
    }
    ,{_id: false}
)

const schema = new mongoose.Schema({
    products: {
        type: [productSchema],
        default: []
    }
})

schema.pre('findOne', function () {
    this.populate('products.product')
}) 

module.exports = {collection,schema}