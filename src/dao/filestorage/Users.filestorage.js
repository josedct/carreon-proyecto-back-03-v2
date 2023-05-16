const fs = require('fs')
const UsersArray = require('./../arraystorage/Users.arraystorage')

class UsersFS{

    constructor(){
        this.path = './src/dao/filestorage/storage/users.json'
    }

    async #writeFs(data){

        try {
            await fs.promises.writeFile(this.path, JSON.stringify(data, null, 4))            
        } catch (error) {
            return false
        }

    }

    async #readFs(){

        try {
            const content = await fs.promises.readFile(this.path, 'utf-8')

            if(content === ''){
                return JSON.parse('[]')
            }

            return JSON.parse(content)

        } catch (error) {
            return false
        }

    }

    async queryOne(nickname){

        const content = await this.#readFs()
        const auxArray = new UsersArray()

        if(!content){
            auxArray.setArray([])
        }
    
        auxArray.setArray(content)

        return auxArray.queryOne(nickname)

    }

    async create(data){

        const content = await this.#readFs()
        const auxArray = new UsersArray()

        if(!content){
            auxArray.setArray([])
        }
    
        auxArray.setArray(content)

        const response =  auxArray.create(data)

        await this.#writeFs(auxArray)

        return response

    }

}

module.exports = UsersFS