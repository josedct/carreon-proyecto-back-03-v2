const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI
const PERSISTENCE = process.env.PERSISTENCE

module.exports = {PORT, MONGO_URI, PERSISTENCE}