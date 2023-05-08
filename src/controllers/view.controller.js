const getViewHome = async (req, res) => {
    const data = 'Mensaje de la view'
    return res.sendView('test', {data})
}

const getViewProducts = async (req, res) => {
    const data = 'Vista que muestra los productos'
    return res.sendView('test2', {data})
}

const getViewProduct = async (req, res) => {
    const data = 'Mensaje de la view'
    return res.sendView('', data)
}

const getViewCart = async (req, res) => {
    const data = 'Mensaje de la view'
    return res.sendView('', data)
}

const getViewLogin = async (req, res) => {
    const data = 'Mensaje de la view'
    return res.sendView('', data)
}

const getViewRegister = async (req, res) => {
    const data = 'Mensaje de la view'
    return res.sendView('', data)
}

const getViewError = async (req, res) => {
    const data = 'Mensaje de la view'
    return res.sendView('', data)
}

const getViewDelSession = async (req, res) => {
    const data = 'Mensaje de la view'
    return res.sendView('', data)
}

const getViewGitHub = async (req, res) => {
    const data = 'Mensaje de la view'
    return res.sendView('', data)
}

module.exports = {getViewHome, getViewProducts, getViewProduct, getViewCart, getViewLogin, getViewRegister, getViewError, getViewDelSession, getViewGitHub}