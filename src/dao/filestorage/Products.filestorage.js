const fs = require('fs')
const ProductsArray = require('./../arraystorage/Products.arraystorage')

class ProductsFS{

    constructor(){
        this.path = './src/dao/filestorage/storage/products.json'
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

    async queryAll(filter, option){

        const content = await this.#readFs()
        const auxArray = new ProductsArray()

        if(!content){
            auxArray.setArray([])
        }
    
        auxArray.setArray(content)
        
        return auxArray.queryAll(filter, option)
    }

    async queryOne(id){

        const content = await this.#readFs()
        const auxArray = new ProductsArray()

        if(!content){
            auxArray.setArray([])
        }
    
        auxArray.setArray(content)

        return auxArray.queryOne(id)
    }

    async create(data){
        const content = await this.#readFs()
        const auxArray = new ProductsArray()

        if(!content){
            auxArray.setArray([])
        }
    
        auxArray.setArray(content)

        const response = auxArray.create(data)

        await this.#writeFs(auxArray)

        return response

    }

    async updateOne(id, data){

        const content = await this.#readFs()
        const auxArray = new ProductsArray()

        if(!content){
            auxArray.setArray([])
        }
    
        auxArray.setArray(content)

        const response = auxArray.updateOne( id, data )

        await this.#writeFs(auxArray)

        return response

    }

    async deleteOne(id){

        const content = await this.#readFs()
        const auxArray = new ProductsArray()

        if(!content){
            auxArray.setArray([])
        }
    
        auxArray.setArray(content)

        const response = auxArray.deleteOne( id )

        await this.#writeFs(auxArray)

        return response

    }

}

module.exports = ProductsFS
