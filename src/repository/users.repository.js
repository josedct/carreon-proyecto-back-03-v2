 class UsersRepository {

    constructor(dao){
        this.UsersDao = dao
        //this.init()
    }

    /* async init() {
        this.UsersDao = await UsersFY.getFactory()
    } */

    async select(nickname){
        return await this.UsersDao.queryOne(nickname)
    }

    async create(data){
        return await this.UsersDao.create({cart: cart, ...data})
    }

 }

 module.exports = UsersRepository