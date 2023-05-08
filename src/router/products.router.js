const CustomRouter = require('./router')
const { getProducts, getProduct, addProduct, updProduct, delProduct } = require('./../controllers/product.controller')

class ProductsRouter extends CustomRouter{
    init(){
        this.get('/', getProducts)

        this.get('/:pid', getProduct)

        this.post('/', addProduct)

        this.put('/:pid', updProduct)

        this.delete('/:pid', delProduct)
    }
}

module.exports = ProductsRouter