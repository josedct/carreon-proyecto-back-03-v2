const {PERSISTENCE} = require('../../config/env.config')

    let Products
    let Carts
    let Users

    switch (PERSISTENCE) {
        case 'ARRAY':
            Products = require('../arraystorage/Products.arraystorage')
            Carts = require('../arraystorage/Carts.arraystorage')
            Users = require('../arraystorage/Users.arraystorage')
            break;
        case 'DATABASE':
            Products = require('../database/Products.database')
            Carts = require('../database/Carts.database')
            Users = require('../database/Users.database')
            break;
        case 'FILE':
            Products = require('../filestorage/Products.filestorage')
            Carts = require('../filestorage/Carts.filestorage')
            Users = require('../filestorage/Users.filestorage')
            break;
        default:
            break;
    }
   

module.exports = {Products, Carts, Users}