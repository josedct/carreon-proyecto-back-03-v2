const mongoose = require('mongoose')
const {MONGO_URI} = require('../../config/env.config')

class MongoClient {
    constructor() {
        this.connected = true
        this.client = mongoose
    }

    connect = async() => {
        try {
            await this.client.connect(MONGO_URI)
            console.log('Db connected')
        } catch(error) {
            console.log(error)
        }
    }

}

module.exports = MongoClient