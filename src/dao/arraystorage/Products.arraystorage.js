const ProductsData = require('./../filestorage/storage/products.json')

class ProductsArray {

    constructor(){
        this.array = ProductsData
    }

    async #createId() {
        const length = this.array.length
        return length > 0 ? parseInt(this.array[length-1].id) + 1 : 1 
    }

    async setArray( data ){
        this.array = data
    }

    async #paginate(limit=10, page=1, array){
        if(limit < 1){
            limit = 10
        }

        if(page < 1){
            page = 1
        }

        const limSup = limit * page
        const limInf = limSup - limit
        const maxLimit = array.length
        const totalPages = Math.ceil(maxLimit/limit)
        const hasPrevPage = (page > 1)
        const hasNextPage = (page < totalPages) 

        const query = { 
            docs : array.slice(limInf, limSup),
            totalDocs : maxLimit,
            limit : limit,
            page : page,
            totalPages : totalPages,
            prevPage : hasPrevPage ? page-1 : null,
            nextPage : hasNextPage ? page+1 : null,
            pagingCounter : limInf,
            hasPrevPage : hasPrevPage,
            hasNextPage : hasNextPage
        }

        return query
    }

    async #sort(type,array){
        if(type === 'asc'){
            return array.sort( (a,b) => a.price - b.price )
        }
        return array.sort( (a,b) => b.price - a.price )
    }

    async #filterCategory(category, array){
        return array.filter(element => element.category === category)
    }

    async #filterStock(availability, array){
        return availability === 'yes' ? array.filter( element => element.stock > 0) : array.filter( element => element.stock === 0) 
    }

    async queryAll(filter, option) {
        const {category, availability} = filter
        const {limit, page, sort} = option
        let query = []

        query = category !== undefined ? await this.#filterCategory(category,this.array) : this.array

        query = availability !== undefined ? await this.#filterStock(availability,query) : query
        
        query = sort !== undefined ? await this.#sort(sort,query) : query

        const queryPaginate = await this.#paginate(limit, page, query)
        
        return queryPaginate
    }

    async queryOne(id){
        return this.array.find(element => element.id === id)
    }

    async create(data){
        this.array.push({id: this.#createId.toString(), ...data}) 
        return this.array[this.array.length - 1].id
    }

    async updateOne(id, data){

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

        const { title, description, code, price, status, stock, category, thumbnails } = data

        const isUpdated = false

        if(title !== undefined && !(element.title === title)){
            element.title = title
            isUpdated = true
        }
        
        if(description !== undefined && !(element.description === description)){
            element.description = description
            isUpdated = true
        }

        if(code !== undefined && !(element.code === code)){
            element.code = code
            isUpdated = true
        }

        if(price !== undefined && !(element.price === price)){
            element.price = price
            isUpdated = true
        }

        if(status !== undefined && !(element.status === status)){
            element.status = status
            isUpdated = true
        }

        if(stock !== undefined && !(element.stock === stock)){
            element.stock = stock
            isUpdated = true
        }

        if(category !== undefined && !(element.category === category)){
            element.category = category
            isUpdated = true
        }

        if(thumbnails !== undefined && !(element.thumbnails.length === thumbnails.length && element.thumbnails.every( strurl => thumbnails.includes(strurl)) )){
            element.thumbnails = thumbnails
            isUpdated = true
        }

        if(isUpdated){
            response.modifiedCount = 1
        }

        return response

    }

    async deleteOne(id) {
        const response = {deletedCount: 0}
        const index = this.array.findIndex( element => element.id === id )

        if( !(index < 0) ){
            this.list.splice( indexId, 1 )
            response.deletedCount = 1    
        }

        return response
    }

}

module.exports = ProductsArray

