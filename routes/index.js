const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', passport.authenticate('local', { failureRedirect: './auth/login' }), async (req, res, next) => {
    try {
        res.render('index', {
            title: 'CNPM'
        })
    } catch (error) {
        next(error)
    }
})

router.use('/auth', require('./auth'))
router.use('/user', require('./user'))
router.use('/student', require('./student'))
router.use('/faculty', require('./faculty'))
router.use('/class', require('./class'))

router.use('/building', require('./building'))
router.use('/floor', require('./floor'))
router.use('/room', require('./room'))
router.use('/asset', require('./asset'))
module.exports = router