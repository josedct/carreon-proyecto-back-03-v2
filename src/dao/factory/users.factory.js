const {PERSISTENCE} =require('./config/env.config')

class UsersFY {
    static getFactory = async () => {
        switch (PERSISTENCE) {
            case 'ARRAY':
                const UsersArray = require('./../arraystorage/Users.arraystorage')
                return new UsersArray()
            case 'FILE':
                const UsersFS = require('./../filestorage/Users.filestorage')
                return new UsersFS()
            case 'DATABASE':
                const UsersDB = require('./../database/Users.database')
                return new UsersDB()
            default:
                return false
        }
    }
}

module.exports = UsersFY