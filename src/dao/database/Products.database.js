const mongoose = require('mongoose')
const ProductModel = require('../../models/product.model')

class ProductsDB {

    constructor() {
        this.model = mongoose.model(ProductModel.collection, ProductModel.schema)
    }

    async #sendError(params) {
        return { queryStatus: false, ...params }
    }

    async #sendSuccess(params) {
        return { queryStatus: true, ...params }
    }

    async queryAll(filter, option) {

        if (filter.availability !== undefined) {
            filter.stock = (filter.availability === 'yes') ? { $gt: 0 } : { $eq: 0 }
        }

        delete filter.availability

        if (option.sort !== undefined) {
            option.sort = { price: option.sort }
        }

        option.lean = true

        try {
            console.log('response Product-Mongo-getAll')
            const response = await this.model.paginate(filter, option)
            console.log(response)
            return await this.#sendSuccess({ dataProducts: response })
        } catch (error) {
            console.log('error Product-Mongo-getAll')
            console.log(error)
            const { name, message, code } = error
            return await this.#sendError({ name, code, message })
        }
    }

    async queryOne(id) {
        try {
            console.log('response Product-Mongo-getOne')
            const response = await this.model.findById(id).lean().exec()
            console.log(response)
            return await this.#sendSuccess({ dataProduct: response })
        } catch (error) {
            console.log('error Product-Mongo-getOne')
            console.log(error)
            const { name, message, code } = error
            const errorPaths = name === 'CastError' ? [{ path: error.path, type: error.kind }] : []
            return await this.#sendError({ name, code, message, errorPaths })
        }
    }

    async create(data) {
        try {
            console.log('response Product-Mongo-Create')
            const response = await this.model.create(data)
            console.log(response)
            return await this.#sendSuccess({ dataCreate: response })
        } catch (error) {
            console.log('error Product-Mongo-Create')
            const { name, message, code } = error
            const errorPaths = []
            let arrErrors = []
            if (name === 'ValidationError' || (name === 'MongoServerError' && code === 11000)) {
                arrErrors = Object.entries(name === 'ValidationError' ? error.errors : error.keyValue)
                arrErrors.map(err => {
                    const infoError = name === 'ValidationError' ? { path: err[1].path, type: err[1].kind } : { path: err[0], type: 'unique' }
                    errorPaths.push(infoError)
                })
            }
            return await this.#sendError({ name, code, message, errorPaths })
        }
    }

    async updateOne(id, data) {
        try {
            console.log('response Product-Mongo-UpdateOne')
            const response = await this.model.updateOne({ _id: id }, data)
            console.log(response)
            return await this.#sendSuccess({ dataUpdate: response })
        } catch (error) {
            console.log('error Product-Mongo-UpdateOne')
            console.log(error)
            const { name, message, code } = error
            const errorPaths = []
            let arrErrors = []

            if (name === 'MongoServerError' && code === 11000) {
                arrErrors = Object.entries(error.keyValue)
                arrErrors.map(err => errorPaths.push({ path: err[0], type: 'unique' }))
            }

            if (name === 'CastError') {
                errorPaths.push({ path: error.path, type: error.kind })
            }

            return await this.#sendError({ name, code, message, errorPaths })
        }
    }

    async deleteOne(id) {
        try {
            console.log('response Product-Mongo-DeleteOne')
            const response = await this.model.deleteOne({ _id: id })
            console.log(response)
            return await this.#sendSuccess({ dataDelete: response })
        } catch (error) {
            console.log('error Product-Mongo-DeleteOne')
            console.log(error)
            const { name, message, code } = error
            const errorPaths = name === 'CastError' ? [{ path: error.path, type: error.kind }] : []
            return await this.#sendError({ name, code, message, errorPaths })
        }
    }

}

module.exports = ProductsDB