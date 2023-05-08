const CustomRouter = require('./router')
const {getViewHome, getViewProducts, getViewProduct, getViewCart, getViewLogin, getViewRegister, getViewError, getViewDelSession, getViewGitHub} = require('./../controllers/view.controller')

class ViewsRouter extends CustomRouter{
    init(){
        this.get('/',getViewHome)

        this.get('/products',getViewProducts)

        this.get('/product/:pid',getViewProduct)

        this.get('/cart/:cid',getViewCart)
        
        this.get('/login',getViewLogin)
        
        this.get('/register',getViewRegister)
        
        this.get('/error',getViewError)
        
        this.get('/logout',getViewDelSession)
        
        this.get('/github',getViewGitHub)
    }
}

module.exports = ViewsRouter