const mongoose = require('mongoose')
const UserModel = require('../../models/product.model')

class UsersDB{

    constructor(){
        this.model = mongoose.model(UserModel.collectionName, UserModel.schema)
    }

    async queryOne(nickname){
        try {
            await this.model.findOne({ email: nickname})
        } catch (error) {
            return undefined
        }
    }

    async create(data){
        try {
            await this.model.create(data)
        } catch (error) {
            return undefined
        }
    }

}

module.exports = UsersDB