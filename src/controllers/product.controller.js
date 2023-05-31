const {ProductsService} = require('./../repository/services')

const getProducts = async (req, res) => {
    const {limit = 10, page: pag = 1, sort ='none', query = {} } = req.query
    const {category = 'all', availability ='all'} = query ? query : {category:'all', availability: 'all'}

    const filter = {}
    
    if(category !== 'all'){
        filter.category = category
    }

    if(availability !== 'all' && (availability === 'yes' || availability === 'no') ){
        filter.availability = availability
    }

    const option = {}

    option.limit = isNaN(limit) || parseInt(limit) < 1 ? 10 : parseInt(limit)
    option.page = isNaN(pag) || parseInt(pag) < 1  ? 1 : parseInt(pag)

    if(sort !== 'none' && (sort === 'asc' || sort === 'desc')){
        option.sort = sort
    }

    console.log('envio de filter y option')
    console.log(filter)
    console.log(option)

    const response = await ProductsService.selectAll(filter,option)

    return res.sendSuccess(response)
}

const getProduct = async (req, res) => {

    const { pid } = req.params

    const response = await ProductsService.selectOne(pid)

    return res.sendSuccess(response)
}

const addProduct = async (req, res) => {

    const data = req.body

    const response = await ProductsService.add(data)

    return res.sendSuccess( response )
}

const updProduct = async (req, res) => {

    const {pid} = req.params
    const data = req.body

    const response = await ProductsService.update(pid, data)

    return res.sendSuccess( response )
}

const delProduct = async (req, res) => {

    const {pid} = req.params

    const response = await ProductsService.delete(pid)

    return res.sendSuccess(response)
}

module.exports = { getProducts, getProduct, addProduct, updProduct, delProduct }