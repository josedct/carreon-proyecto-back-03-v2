const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const {PORT} =require('./config/env.config')
const {addLogger} = require('./helpers/loggers')
const ProductsRouter = require('./router/products.router')
const CartsRouter = require('./router/carts.router')
const SessionRouter = require('./router/session.router')
const ViewsRouter = require('./router/views.router')
const MongoClient = require('./dao/database/MongoClient')
const client = new MongoClient()
client.connect()

const server = express()
const productsRouter = new ProductsRouter()
const cartsRouter = new CartsRouter()
const sessionRouter = new SessionRouter()
const viewsRouter =new ViewsRouter()

server.use(express.json())
server.use(express.urlencoded({extends: true}))

server.use(addLogger)

server.use(express.static(path.join(__dirname,'public')))
server.engine('handlebars', handlebars.engine())
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'handlebars')

//initializePassport()
//server.use(passport.initialize())




server.use('/api/products', productsRouter.getRouter())
server.use('/api/carts', cartsRouter.getRouter())
server.use('/session',sessionRouter.getRouter())
server.use('/',viewsRouter.getRouter())

server.listen(PORT, () => console.log('Server Up'))