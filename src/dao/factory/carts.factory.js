const {PERSISTENCE} =require('./config/env.config')

class CartsFY {
    static getFactory = async () => {
        switch (PERSISTENCE) {
            case 'ARRAY':
                const CartsArray = require('./../arraystorage/Carts.arraystorage')
                return new CartsArray()
            case 'FILE':
                const CartsFS = require('./../filestorage/Carts.filestorage')
                return new CartsFS()
            case 'DATABASE':
                const CartsDB = require('./../database/Carts.database')
                return new CartsDB()
            default:
                return false
        }
    }
}

module.exports = CartsFY