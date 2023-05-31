const winston = require('winston')
const {MODE} = require('./../config/env.config')

const customLevelsOptions = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        http: 4,
        debug: 5
    }
}

const  createLogger = (env) => {
    if(env === 'PRODUCTION'){
        return winston.createLogger({
            levels: customLevelsOptions.levels,
            transports:[
                new winston.transports.Console({level: 'info'}),
                new winston.transports.File({filename: './errors.log', level: 'error' })
            ]
        })
    } else {
        return winston.createLogger({
            levels: customLevelsOptions.levels,
            transports:[
                new winston.transports.Console({level: 'debug'})
            ]
        })
    }
}

const addLogger = (req, res, next) => {
    console.log('mode')
    console.log(MODE)
    req.logger =  createLogger(MODE)
    req.logger.http(`${req.method} on ${req.url}`)
    next()
}

module.exports = {addLogger}