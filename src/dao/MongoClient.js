const mongoose = require('mongoose')
const {MONGO_URI} = require('./../config/env.config')

class MongoClient {
    constructor() {
        this.connected = true
        this.client = mongoose
    }

    connect = async() => {
        try {
            await this.client.connect(MONGO_URI)
        } catch(error) {
            console.log(error)
        }
    }

}