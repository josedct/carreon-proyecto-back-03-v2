const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const {PORT} =require('./config/env.config')
const ProductsRouter = require('./router/products.router')
const CartsRouter = require('./router/carts.router')
const SessionRouter = require('./router/session.router')
const ViewsRouter = require('./router/views.router')


const server = express()
const productsRouter = new ProductsRouter()
const cartsRouter = new CartsRouter()
const sessionRouter = new SessionRouter()
const viewsRouter =new ViewsRouter()

server.use(express.json())
server.use(express.urlencoded({extends: true}))

server.use(express.static(path.join(__dirname,'public')))
server.engine('handlebars', handlebars.engine())
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'handlebars')

server.use('/api/products', productsRouter.getRouter())
server.use('/api/carts', cartsRouter.getRouter())
server.use('/session',sessionRouter.getRouter())
server.use('/',viewsRouter.getRouter())

server.listen(PORT, () => console.log('Server Up'))