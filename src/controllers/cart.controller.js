const {CartsService, ProductsService} = require('./../repository/services')

const getCart = async (req, res) => {
    const {cid} = req.params
    const response = await CartsService.selectOne(cid)
    return res.sendSuccess(response)
}

const addCart = async (req, res) => {
    const response = await CartsService.create()

    return res.sendSuccess(response)
}

const addProductToCart = async (req, res) => {
    const {cid, pid} = req.params

    const findPid = await ProductsService.selectOne(pid)

    findPid.queryStatus

    if(!findPid.queryStatus || findPid.dataProduct === null){
        return res.sendSuccess({msg: 'no found'})
    }

    const response = await CartsService.addToCart(cid, pid)
    return res.sendSuccess(response)
}

const updProductsToCart = async (req, res) => {

    const {cid} = req.params
    const arrayProducts = req.body

    const auxProducts = arrayProducts.map( prod => {
        return { product : {_id : prod.id}, quantity : prod.quantity }
    })

    const response = await CartsService.updateAll(cid, auxProducts)

    return res.sendSuccess(response)
}

const updQuantityToCart = async (req, res) => {
    const {cid,pid} = req.params
    let {quantity} = req.body

    const response = await CartsService.updateQuantity(cid, pid, quantity)

    return res.sendSuccess( response)
}

const delProductToCart = async (req, res) => {
    const {cid, pid} = req.params

    const response = await CartsService.deleteOne(cid, pid)

    return res.sendSuccess(response)
}

const delProductsToCart = async (req, res) => {
    const {cid} = req.params

    const response = await CartsService.deleteAll(cid)

    return res.sendSuccess(response)
}

module.exports = {getCart, addCart, addProductToCart,updProductsToCart,updQuantityToCart,delProductToCart, delProductsToCart}