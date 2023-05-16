const mongoose = require('mongoose')
const ProductModel = require('../../models/product.model')

class ProductsDB {

    constructor() {
        this.model = mongoose.model(ProductModel.collectionName, ProductModel.schema)
    }

    async queryAll(filter, option) {
        
        if(filter.availability !== undefined) {
            filter.stock = (filter.availability === 'yes') ? { $gt: 0 }  : { $eq: 0 }
        }
        
        delete filter.availability

        if(option.sort !== undefined){
            option.sort = { price: option.sort }
        }

        option.lean = true

        try {
            return await this.model.paginate(filter, option)
        } catch (error) {
            return undefined
        }
    }

    async queryOne(id) {
        try {
            return await this.model.findById(id).lean().exec()
        } catch (error) {
            return undefined
        }
    }

    async create(data) {
        try {
            return await this.model.create(data)
        } catch (error) {
            return undefined
        }
    }

    async updateOne(id, data) {
        try {
            return await this.model.updateOne({ _id: id }, data)
        } catch (error) {
            return undefined
        }
    }

    async deleteOne(id) {
        try {
            return await this.model.deleteOne({ _id: id })
        } catch (error) {
            return undefined
        }
    }

}

module.exports = ProductsDB