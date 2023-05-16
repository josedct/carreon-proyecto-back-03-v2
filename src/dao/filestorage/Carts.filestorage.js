const fs = require('fs')
const CartsArray = require('./../arraystorage/Carts.arraystorage')

class CartsFS{

    constructor(){
        this.path = './src/dao/filestorage/storage/carts.json'
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

    async queryOne(id){

        const content = await this.#readFs()
        const auxArray = new CartsArray()

        if(!content){
            auxArray.setArray([])
        }
    
        auxArray.setArray(content)

        return auxArray.queryOne(id)

    }

    async create(){

        const content = await this.#readFs()
        const auxArray = new CartsArray()

        if(!content){
            auxArray.setArray([])
        }
    
        auxArray.setArray(content)

        const response =  auxArray.create()

        await this.#writeFs(auxArray)

        return response
    }

    async addOneChild(idp, idch){

        const content = await this.#readFs()
        const auxArray = new CartsArray()

        if(!content){
            auxArray.setArray([])
        }
    
        auxArray.setArray(content)

        const response =  auxArray.addOneChild(idp, idch)

        await this.#writeFs(auxArray)

        return response

    }

    async updateAllChild(id, arrayChild){

        const content = await this.#readFs()
        const auxArray = new CartsArray()

        if(!content){
            auxArray.setArray([])
        }
    
        auxArray.setArray(content)

        const response =  auxArray.updateAllChild(id, arrayChild)

        await this.#writeFs(auxArray)

        return response

    }

    async updateQuantityOfChild(idp, idch, quantity){

        const content = await this.#readFs()
        const auxArray = new CartsArray()

        if(!content){
            auxArray.setArray([])
        }
    
        auxArray.setArray(content)

        const response =  auxArray.updateQuantityOfChild(idp, idch, quantity)

        await this.#writeFs(auxArray)

        return response

    }

    async deleteOneChild(idp, idch){

        const content = await this.#readFs()
        const auxArray = new CartsArray()

        if(!content){
            auxArray.setArray([])
        }
    
        auxArray.setArray(content)

        const response =  auxArray.deleteOneChild(idp, idch)

        await this.#writeFs(auxArray)

        return response

    }

    async deleteAllChild(id){

        const content = await this.#readFs()
        const auxArray = new CartsArray()

        if(!content){
            auxArray.setArray([])
        }
    
        auxArray.setArray(content)

        const response =  auxArray.deleteAllChild(id)

        await this.#writeFs(auxArray)

        return response

    }

}

module.exports = CartsFS