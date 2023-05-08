const getProducts = async (req, res) => {
   return res.sendSuccess('GET All products')
}

const getProduct = async (req, res) => {
    return res.sendSuccess('GET One product')
}

const addProduct = async (req, res) => {
    return res.sendSuccess('ADD One product')
}

const updProduct = async (req, res) => {
    return res.sendSuccess('UPDATE One product')
}

const delProduct = async (req, res) => {
    return res.sendSuccess('DELETE One product')
}

module.exports = { getProducts, getProduct, addProduct, updProduct, delProduct }