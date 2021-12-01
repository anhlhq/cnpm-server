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
router.use('/room', require('./room'))
router.use('/student', require('./student'))
router.use('/record', require('./record'))
router.use('/asset', require('./asset'))
router.use('/bill', require('./bill'))
router.use('/contract', require('./contract'))

module.exports = router