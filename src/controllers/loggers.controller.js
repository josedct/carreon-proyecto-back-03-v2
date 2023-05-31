const getTestFatal = async (req, res) => {
    req.logger.fatal('Logger Fatal')
    res.send('Probando logger Fatal')
}

const getTestError = async (req, res) => {
    req.logger.error('Logger Error')
    res.send('Probando logger Error')
}

const getTestWarning = async (req, res) => {
    req.logger.warning('Logger Warning')
    res.send('Probando logger Warning')
}

const getTestInfo = async (req, res) => {
    req.logger.info('Logger Info')
    res.send('Probando logger Info')
}

const getTestHttp = async (req, res) => {
    req.logger.http('Logger Http')
    res.send('Probando logger Http')
}

const getTestDebug = async (req, res) => {
    req.logger.debug('Logger Debug')
    res.send('Probando logger Debug')
}

module.exports = {getTestFatal, getTestError, getTestWarning, getTestInfo, getTestHttp, getTestDebug}