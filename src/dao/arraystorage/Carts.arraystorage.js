const CartsData = require('./../filestorage/storage/carts.json')

class CartsArray {

    constructor(){
        this.array = CartsData
    }

    async queryOne(id) {}

    async create() {}

    async addOneChild(idp, idch) {}

    async updateAllChild(id, arrayChild) {}

    async updateQuantityOfChild(idp, idch, quantity) {}

    async deleteOneChild(idp, idch) {}

    async deleteAllChild(id) {}

}

module.exports = CartsArray