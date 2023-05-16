const CartsData = require('./../filestorage/storage/carts.json')

class CartsArray {

    constructor(){
        this.array = CartsData
    }

    async #createId() {
        const length = this.array.length
        return length > 0 ? parseInt(this.array[length-1].id) + 1 : 1 
    }

    async setArray( data ){
        this.array = data
    }

    async queryOne(id) {
        return this.array.find(element => element.id === id)
    }

    async create() {
        this.array.push({id: this.#createId(), products: []})
        return this.array[this.array.length].id
    }

    async addOneChild(idp, idch) {

        const response = {
            matchedCount : 0,
            modifiedCount : 0,
            acknowledged : false
        }

        const index = this.array.findIndex( element => element.id === idp )

        if(index === -1){
            response.acknowledged = true
            return response
        }

        response.matchedCount = 1
        response.acknowledged = true

        this.array[index].products.push({product: idch, quantity: 1})

        response.modifiedCount = 1
        
        return response

    }

    async updateAllChild(id, arrayChild) {

        const response = {
            matchedCount : 0,
            modifiedCount : 0,
            acknowledged : false
        }

        const index = this.array.findIndex( element => element.id === id )

        if(index === -1){
            response.acknowledged = true
            return response
        }

        response.matchedCount = 1
        response.acknowledged = true

        this.array[index].products = arrayChild

        response.modifiedCount = 1
        
        return response

    }

    async updateQuantityOfChild(idp, idch, quantity) {
        
        const response = {
            matchedCount : 0,
            modifiedCount : 0,
            acknowledged : false
        }

        const indexP = this.array.findIndex( element => element.id === idp )

        if(indexP === -1){
            response.acknowledged = true
            return response
        }

        response.matchedCount = 1
        response.acknowledged = true

        const indexCh = this.array[indexP].products.findIndex( element => element.product === idch )

        if(indexCh === -1){
            return response
        }

        if(quantity === 0){
            this.array[indexP].products[indexCh].quantity++
        }

        this.array[indexP].products[indexCh].quantity = quantity 
        
        response.modifiedCount = 1
        
        return response

    }

    async deleteOneChild(idp, idch) {

        const response = {
            matchedCount : 0,
            modifiedCount : 0,
            acknowledged : false
        }

        const indexP = this.array.findIndex( element => element.id === idp )

        if(indexP === -1){
            response.acknowledged = true
            return response
        }

        response.matchedCount = 1
        response.acknowledged = true

        const indexCh = this.array[indexP].products.findIndex( element => element.product === idch )

        if(indexCh === -1){
            return response
        }

        this.array[indexP].products.slice(indexCh,1)
        response.modifiedCount = 1

        return response

    }

    async deleteAllChild(id) {
        
        const response = {
            matchedCount : 0,
            modifiedCount : 0,
            acknowledged : false
        }

        const index = this.array.findIndex( element => element.id === id )

        if(index === -1){
            response.acknowledged = true
            return response
        }

        response.matchedCount = 1
        response.acknowledged = true

        this.array[index].products = []

        response.modifiedCount = 1

        return response

    }

}

module.exports = CartsArray