const winston = require('winston')
const {MODE} = require('./../config/env.config')

const  createLogger = (env) => {
    if(env === 'PRODUCTION'){
        return winston.createLogger({
            transports:[
                new winston.transports.File({filename: './winston.log', level: '' })
            ]
        })
    } else {
        return winston.createLogger({
            transports:[
                new winston.transports.Console({level: ''})
            ]
        })
    }
}

const addLogger = (req, res, next) => {
    req.logger =  createLogger(MODE)
    req.logger.http(`${req.method} on ${req.url}`)
    next()
}

module.exports = {addLogger}