class ProductsRepository {
    
    constructor(dao){
        this.ProductsDao = dao
        //this.init()
    }

    /* async init() {
        this.ProductsDao = await ProductsFY.getFactory()
    } */

    //queryAll
    async selectAll(filter, option) {

        //const {limit = 10, page: pag = 1, sort ='none', query = {} } = req.query
        //const {category = 'all', availability ='all'} = query ? query : {category:'all', availability: 'all'}

        //filter {category ['all' | 'text'], availability['all'| 'yes' | 'no']}
        //option {limit [10 | +num], page [ 1 | +num], sort ['none'| 'asc' | 'desc']}

        if(filter.category !== undefined && filter.category === 'all'){
            delete filter.category  
        }

        if(filter.availability !== undefined && filter.availability === 'all'){
            delete filter.availability
        }

        if(option.sort !== undefined && option.sort === 'none'){
            delete option.sort
        }

        return await this.ProductsDao.queryAll(filter, option)
    }

    //queryOne
    async selectOne(id) {
        return await this.ProductsDao.queryOne(id)
    }

    //create
    async add(data) {
        return this.ProductsDao.create(data)
    }

    //updateOne
    async update(id, data) {
        return this.ProductsDao.updateOne(id,data)
    }

    //deleteOne
    async delete(id) {
        return this.ProductsDao.deleteOne(id)
    }

}

module.exports = ProductsRepository