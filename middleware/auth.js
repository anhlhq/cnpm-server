const jwt = require('jsonwebtoken')

const checkToken = (req, res, next) => {
    try {
        const header = req.header('Authorization')
        if (!header) {
            res.json('N/A Headers')
        }
        const token = header.replace('Bearer ', '')
        req.data = jwt.verify(token, process.env.JWT_KEY)
        req.token = token
        next()
    } catch (error) {
        next(error)
    }
}

const checkUser = (req, res, next) => {
    try {
        
    } catch (error) {
        next(error)
    }
}
module.exports = {
    checkToken
}