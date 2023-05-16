const mongoose = require('mongoose')
const CartModel = require('../../models/cart.model')

class CartsDB {

    constructor() {
        this.model = mongoose.model(CartModel.collectionName, CartModel.schema)
    }

    async queryOne(id) {
        try {
            await this.model.findById(id).lean().exec()
        } catch (error) {
            return undefined
        }
    }

    async create() {
        try {
            await this.model.create({})
        } catch (error) {
            return undefined
        }
    }

    async addOneChild(idp, idch) {
        try {
            await this.model.updateOne({ _id: idp }, { $addToSet: { products: { product: idch } } })
        } catch (error) {
            return undefined
        }
    }

    async updateAllChild(id, arrayChild) {
        try {
            await this.model.updateOne({ _id: id }, { products: arrayChild })
        } catch (error) {
            return undefined
        }
    }

    async updateQuantityOfChild(idp, idch, quantity) {
        const queryQuantity = quantity === 0 ? { $inc: { 'products.$.quantity': 1 } } : { $set: { 'products.$.quantity': quantity } }
        try {
            await this.model.updateOne({ _id: idp, 'products.product': idch }, queryQuantity)
        } catch (error) {
            return undefined
        }
    }

    async deleteOneChild(idp, idch) {
        try {
            await this.model.updateOne({ _id: idp }, { $pull: { products: { product: idch } } })
        } catch (error) {
            return undefined
        }
    }

    async deleteAllChild(id) {
        try {
            await this.model.updateOne({ _id: id }, { products: [] })
        } catch (error) {
            return undefined
        }
    }
    
}

module.exports = CartsDB