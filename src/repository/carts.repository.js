class CartsRepository {
    
    constructor(dao){
        this.CartsDao = dao
        //this.init()
    }

    /* async init() {
        this.CartsDao = await CartsFY.getFactory()
    } */

    //queryOne
    async selectOne(id){
        const response = await this.CartsDao.queryOne(id)
        return response
    }

    //create
    async create(){
        return await this.CartsDao.create()
    }

    //addOneChild
    async addToCart(idp, idch){

        let response = await this.CartsDao.updateQuantityOfChild(idp, idch, 0)

        if(response.modifiedCount > 0){
            return response
        }

        response = await this.CartsDao.addOneChild(idp, idch)

        return response
    }

    //updateAllChild
    async updateAll(id, arrayChild){

        return await this.CartsDao.updateAllChild(id,arrayChild)

    }

    //updateQuantityOfChild
    async updateQuantity(idp, idch, quantity){

        return await  this.CartsDao.updateQuantityOfChild(idp,idch,quantity)

    }

    //deleteOneChild
    async deleteOne(idp, idch){
        
        return await this.CartsDao.deleteOneChild(idp, idch)
    
    }

    //deleteAllChild
    async deleteAll(id){

        return await this.CartsDao.deleteAllChild(id)

    }

}

module.exports = CartsRepository