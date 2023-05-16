const passport = require('passport')
const local = require('passport-local')

const LocalStrategy = local.Strategy

const initializePassport = () => {

    passport.use('register', new LocalStrategy({
        passReqToCallback: true,
        usernameField: 'email'
    },
    async (req, username, password, done) => {
        const {first_name, last_name, email, age} = req.body

        try {
            const user = await userModel.findOne({email: username})
            if(user){
                return done(null, false)
            }

            const newUser = {
                first_name,
                last_name,
                email,
                age,
                password: hashPassword(password),
                role: email === ADMIN_EMAIL ? 'admin' : 'user',
                
            }

        } catch (error) {
            
        }

    }))

}