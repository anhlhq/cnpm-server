const express = require('express')
const Contract = require('../models/Contract')
const router = express.Router()
const Room = require('../models/Room')

router.get('/phong_con_trong', async (req, res, next) => {
    try {
        const room = await Room.find()
        const contract = await Contract.find()

        if (!room) {
            res.json('Chưa có phòng nào')
        }
        let phongcontrong = [];
        room.map((item) => {
            const contractCount = contract.filter((con => con.phongid === item.id))
            if (contractCount.length < item.songuoitoida) {
                phongcontrong.push(item);
            }
        })
        res.json(phongcontrong)
    } catch (error) {
        next(error)
    }
})
router.get('/dashboard', async (req, res, next) => {
    try {
        const room = await Room.find()
        const contract = await Contract.find()

        if (!room) {
            res.json('Chưa có phòng nào')
        }
        let phongcontrong = [];
        room.map((item) => {
            const contractCount = contract.filter((con => con.phongid === item.id))
            if (contractCount.length < item.songuoitoida) {
                phongcontrong.push(item);
            }
        })

        res.json({
            total: room.length,
            empty: phongcontrong.length,
            full: room.length - phongcontrong.length
        })
    } catch (error) {
        console.log(error)
    }
})


module.exports = router