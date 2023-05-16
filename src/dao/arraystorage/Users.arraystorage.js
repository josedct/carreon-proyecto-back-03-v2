const UsersData = require('./../filestorage/storage/users.json')

class UsersArray {

    constructor(){
        this.array = UsersData
    }

    async #createId() {
        const length = this.array.length
        return length > 0 ? parseInt(this.array[length-1].id) + 1 : 1 
    }

    async setArray( data ){
        this.array = data
    }

    async queryOne(nickname) {
        return this.array.find(element => element.email === nickname)
    }

    async create(data) {
        this.array.push({id: this.#createId(), ...data})
        return this.array[this.array.length-1].id
    }

}

module.exports = UsersArray