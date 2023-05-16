const {PERSISTENCE} =require('./config/env.config')

class ProductsFY {
    static getFactory = async () => {
        switch (PERSISTENCE) {
            case 'ARRAY':
                const ProductsArray = require('./../arraystorage/Products.arraystorage')
                return new ProductsArray()
            case 'FILE':
                const ProductsFS = require('./../filestorage/Products.filestorage')
                return new ProductsFS()
            case 'DATABASE':
                const ProductsDB = require('./../database/Products.database')
                return new ProductsDB()
            default:
                return false
        }
    }
}

module.exports = ProductsFY