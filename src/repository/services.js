const { Products, Carts, Users} = require('../dao/factory/factory')
const ProductsRepository = require('./products.repository')
const CartsRepository = require('./carts.repository')
const UsersRepository = require('./users.repository')

const ProductsService = new ProductsRepository(new Products())
const CartsService = new CartsRepository(new Carts())
const UsersService = new UsersRepository(new Users())

module.exports = {ProductsService, CartsService, UsersService}