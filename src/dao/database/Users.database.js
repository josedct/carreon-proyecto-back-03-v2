const mongoose = require('mongoose')
const UserModel = require('../../models/product.model')

class UsersDB{

    constructor(){
        this.model = mongoose.model(UserModel.collection, UserModel.schema)
    }

    async queryOne(nickname){
        try {
            console.log()
            const response = await this.model.findOne({ email: nickname})
            console.log()
            return response
        } catch (error) {
            console.log()
            console.log(error)
            return undefined
        }
    }

    async create(data){
        try {
            console.log()
            const response = await this.model.create(data)
            console.log()
            return response
        } catch (error) {
            console.log()
            console.log(error)
            return undefined
        }
    }

}

module.exports = UsersDB