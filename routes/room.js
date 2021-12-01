const express = require('express')
const router = express.Router()
const Room = require('../models/Room')

router.get('/', async (req, res, next) => {
    const { keyword } = req.query
    try {
        if (keyword) {
            if (isNaN(parseInt(keyword))) {
                const rooms = await Room.find({
                    $or: [
                        {
                            id: keyword
                        },
                        {
                            toanha: keyword
                        },
                        {
                            gioitinh: keyword
                        }

                    ]
                })
                res.json(rooms)
            }
            else {
                const rooms = await Room.find({
                    $or: [
                        {
                            id: keyword
                        },
                        {
                            toanha: keyword
                        },
                        {
                            tang: keyword
                        },
                        {
                            sogiuong: keyword
                        },
                        {
                            songuoitoida: keyword
                        },
                        {
                            giaphong: keyword
                        },
                        {
                            gioitinh: keyword
                        }

                    ]
                })
                res.json(rooms)
                console.log('a')
            }

        }
        // const rooms = await Room.find()
        // res.json(rooms)
    } catch (error) {
        next(error)
    }
})



router.get('/:oid', async (req, res, next) => {
    try {
        const { oid } = req.params
        const room = await Room.findById(oid)
        res.json(room)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { id, toanha, tang, sogiuong, songuoitoida, giaphong, gioitinh } = req.body
        const room = await new Room
        room.id = id
        room.toanha = toanha
        room.tang = tang
        room.sogiuong = sogiuong
        room.songuoitoida = songuoitoida
        room.giaphong = giaphong
        room.gioitinh = gioitinh
        await room.save()
        res.json(room)
    } catch (err) {
        next(err)
    }
})

router.post('/update/:oid', async (req, res, next) => {
    try {
        const { oid } = req.params
        const { id, toanha, tang, sogiuong, songuoitoida, giaphong, gioitinh } = req.body
        const room = await Room.findById(oid)
        room.id = id
        room.toanha = toanha
        room.tang = tang
        room.sogiuong = sogiuong
        room.songuoitoida = songuoitoida
        room.giaphong = giaphong
        room.gioitinh = gioitinh
        await room.save()
        res.json(room)
    } catch (err) {
        next(err)
    }
})

router.delete('/delete/:oid', async (req, res, next) => {
    try {
        const { oid } = req.params
        const room = await Room.remove({
            _id: oid
        })
        res.json(room)
    } catch (err) {
        next(err)
    }
})

module.exports = router