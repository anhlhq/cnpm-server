const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', () => {
    try {
        res.json('api')
    } catch {

    }
})

router.use('/auth', require('./auth'))
router.use('/user', require('./user'))

router.use('/faculty', require('./faculty'))

router.use('/building', require('./building'))
router.use('/floor', require('./floor'))
router.use('/room', require('./room'))
router.use('/asset', require('./asset'))
module.exports = router