const CustomRouter = require('./router')
const { getTestFatal, getTestError, getTestWarning, getTestInfo, getTestHttp, getTestDebug } = require('./../controllers/loggers.controller')

class LoggersRouter extends CustomRouter{
    init(){
        this.get('/fatal', getTestFatal)

        this.get('/error', getTestError)

        this.get('/warning', getTestWarning)

        this.get('/info', getTestInfo)

        this.get('/http', getTestHttp)

        this.get('/debug', getTestDebug)
    }
}

module.exports = LoggersRouter