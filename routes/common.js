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
            const contractCount = contract.filter((con => con.phong_id === item._id))
            console.log(contractCount)
            if (contractCount.length < 6) {
                phongcontrong.push(item);
            }
        })
        res.json(phongcontrong)
    } catch (error) {
        next(error)
    }
})

module.exports = router