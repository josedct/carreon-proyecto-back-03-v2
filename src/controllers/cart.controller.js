const getCart = async (req, res) => {
    return res.sendSuccess('GET Content of cart')
}

const addCart = async (req, res) => {
    return res.sendSuccess('CREATE Cart of user')
}

const addProductToCart = async (req, res) => {
    return res.sendSuccess('ADD One product of cart')
}

const updProductsToCart = async (req, res) => {
    return res.sendSuccess('UPDATE List products of cart')
}

const updQuantityToCart = async (req, res) => {
    return res.sendSuccess('UPDATE Quantity of one product')
}

const delProductToCart = async (req, res) => {
    return res.sendSuccess('DELETE One product of cart')
}

const delProductsToCart = async (req, res) => {
    return res.sendSuccess('DELETE ala products of cart')
}

module.exports = {getCart, addCart, addProductToCart,updProductsToCart,updQuantityToCart,delProductToCart, delProductsToCart}