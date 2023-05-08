const CustomRouter = require('./router')
const {getUser, getUserGitHub, addUser} = require('./../controllers/session.controller')

class SessionRouter extends CustomRouter{
    init(){
        this.get('/githubcallback',getUserGitHub)

        this.post('/login', getUser)

        this.post('/register', addUser)
    }
}

module.exports = SessionRouter