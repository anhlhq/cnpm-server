const express = require('express')
const router = express.Router()
const Room = require('../models/Room')
const Asset = require('../models/Asset')

router.get('/', async (req, res, next) => {
    try {
        const rooms = await Room.find()
        res.json(rooms)
    } catch (error) {
        next(error)
    }
})

// router.get('/:id', async (req, res, next) => {
//     try {
//         const { id } = req.params
//         const room = await Room.findById(id)
//         const asset = await Asset.findOne({
//             room_id: id
//         })
//         asset && room
//             ? res.json(
//                 {
//                     name: room.name,
//                     building_id: room.building_id,
//                     floor_id: room.floor_id,
//                     price: room.price,
//                     limit: room.limit,
//                     gender: room.gender,
//                     asset_list: asset.list
//                 }
//             )
//             : res.json({
//                 room: room,
//                 asset: null
//             })
//     } catch (error) {
//         next(error)
//     }
// })

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

router.post('/update/:_id', async (req, res, next) => {
    try {
        const { _id } = req.params
        const { id, toanha, tang, sogiuong, songuoitoida, giaphong, gioitinh } = req.body
        const room = await Room.findById(id)
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

router.delete('/delete/:_id', async (req, res, next) => {
    try {
        const { _id } = req.params
        const room = await Room.remove({
            _id: _id
        })
        res.json(room)
    } catch (err) {
        next(err)
    }
})

module.exports = router