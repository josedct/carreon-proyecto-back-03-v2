const mongoose = require('mongoose')
const CartModel = require('../../models/cart.model')

class CartsDB {

    constructor() {
        this.model = mongoose.model(CartModel.collection, CartModel.schema)
    }

    async #sendError(params) {
        return { queryStatus: false, ...params }
    }

    async #sendSuccess(params) {
        return { queryStatus: true, ...params }
    }

    async queryOne(id) {
        try {
            console.log('response Carts-Mongo-getOne')
            const response = await this.model.findById(id).lean().exec()
            console.log(response)
            return await this.#sendSuccess({ dataCart: response })
        } catch (error) {
            console.log('error Carts-Mongo-getOne')
            console.log(error)
            const { name, message, code } = error
            const errorPaths = name === 'CastError' ? [{ path: error.path, type: error.kind }] : []
            return await this.#sendError({ name, code, message, errorPaths })
        }
    }     

    async create() {
        try {
            console.log('response Carts-Mongo-Create')
            const response = await this.model.create({})
            console.log(response)
            return await this.#sendSuccess({ dataCreate: response })
        } catch (error) {
            console.log('error Carts-Mongo-create')
            console.log(error)
            const { name, message} = error
            return await this.#sendError({ name, message })
        }
    }

    async addOneChild(idp, idch) {
        try {
            console.log('response Carts-Mongo-addOneChild')
            const response = await this.model.updateOne({ _id: idp }, { $addToSet: { products: { product: idch } } })
            console.log(response) 
            return await this.#sendSuccess({dataUpdate: response}) 
        } catch (error) {
            console.log('error Carts-Mongo-addOneChild')
            console.log(error)
            return undefined
        }
    }

    async updateAllChild(id, arrayChild) {
        try {
            console.log('response Carts-Mongo-updateAllChild')
            const response = await this.model.updateOne({ _id: id }, { products: arrayChild })
            console.log(response)
            return await this.#sendSuccess({dataUpdate: response}) 
        } catch (error) {
            console.log('error Carts-Mongo-updateAllChild')
            console.log(error)
            return undefined
        }
    }

    async updateQuantityOfChild(idp, idch, quantity) {
        const queryQuantity = quantity === 0 ? { $inc: { 'products.$.quantity': 1 } } : { $set: { 'products.$.quantity': quantity } }
        try {
            console.log('response Carts-Mongo-updateQuantityOfChild')
            const response = await this.model.updateOne({ _id: idp, 'products.product': idch }, queryQuantity)
            console.log(response)
            return await this.#sendSuccess({dataUpdate: response})
        } catch (error) {
            console.log('error Carts-Mongo-updateQuantityOfChild')
            console.log(error)
            return undefined
        }
    }

    async deleteOneChild(idp, idch) {
        try {
            console.log('response Carts-Mongo-deleteOneChild')
            const response = await this.model.updateOne({ _id: idp }, { $pull: { products: { product: idch } } })
            console.log(response)
            return await this.#sendSuccess({dataDelete: response})
        } catch (error) {
            console.log('error Carts-Mongo-deleteOneChild')
            console.log(error)
            return undefined
        }
    }

    async deleteAllChild(id) {
        try {
            console.log('response Carts-Mongo-deleteAllChild')
            const response = await this.model.updateOne({ _id: id }, { products: [] })
            console.log(response)
            return await this.#sendSuccess({dataDelete: response})
        } catch (error) {
            console.log('error Carts-Mongo-deleteAllChild')
            console.log(error)
            return undefined
        }
    }
    
}

module.exports = CartsDB