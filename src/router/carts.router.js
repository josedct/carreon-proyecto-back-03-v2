const CustomRouter = require('./router')
const {getCart, addCart, addProductToCart,updProductsToCart,updQuantityToCart,delProductToCart, delProductsToCart} = require('./../controllers/cart.controller')

class CartsRouter extends CustomRouter{
    init(){
        this.get('/:cid', getCart)

        this.post('/', addCart)

        this.post('/:cid/products/:pid', addProductToCart)

        this.put('/:cid', updProductsToCart)

        this.put('/:cid/products/:pid', updQuantityToCart)

        this.delete('/:cid/products/:pid', delProductToCart)

        this.delete('/:cid', delProductsToCart)
    }
    //
}

module.exports = CartsRouter