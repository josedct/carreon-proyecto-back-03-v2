const {Router} = require('express')

class CustomRouter{
    constructor(){
        this.router = Router()
        this.init()
    }

    getRouter(){
        return this.router
    }

    init(){}

    get(path, ...callbacks){
        this.router.get(path, this.generateCustomResponses, this.applyCallbacks(callbacks))
    }

    post(path,...callbacks){
        this.router.post(path, this.generateCustomResponses, this.applyCallbacks(callbacks))
    }

    put(path,...callbacks){
        this.router.put(path, this.generateCustomResponses, this.applyCallbacks(callbacks))
    }

    delete(path,...callbacks){
        this.router.delete(path, this.generateCustomResponses, this.applyCallbacks(callbacks))
    }

    applyCallbacks(callbacks){
        return callbacks.map(callback => async (...params) => {
            try {
                await callback.apply(this, params)
            } catch (error) {
                console.log(error)
                params[1].status(500).send(error)
            }
        })
    }

    generateCustomResponses = (req,res, next) => {
        res.sendSuccess = payload => res.status(200).json({status:"success", ...payload})
        res.sendServerError = error => res.status(500).json({status:"error", error})
        res.sendUserError = error => res.status(400).json({status:"error", error})
        res.sendView = (viewName, payload) => res.status(200).render(viewName,{...payload}) 
        next()
    }
}

module.exports = CustomRouter