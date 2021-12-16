const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', (req, res) => {
    try {
        res.json({
            "Phòng": "/room",
            "Sinh viên": "/student",
            "Biên bản": "/record",
            "Tài sản": "/taisan",
            "Hóa đơn": "/bill",
            "Hợp đồng": "/contract",
        })
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
router.use('/common', require('./common'))

module.exports = router