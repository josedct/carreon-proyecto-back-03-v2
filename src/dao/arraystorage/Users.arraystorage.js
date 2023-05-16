const UsersData = require('./../filestorage/storage/users.json')

class UsersArray {

    constructor(){
        this.array = UsersData
    }

    async queryOne(nickname) {}

    async create(data) {}

}

module.exports = UsersArray