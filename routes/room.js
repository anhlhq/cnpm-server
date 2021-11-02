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

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const room = await Room.findById(id)
        const asset = await Asset.findOne({
            room_id: id
        })
        asset && room
            ? res.json(
                {
                    name: room.name,
                    building_id: room.building_id,
                    floor_id: room.floor_id,
                    price: room.price,
                    limit: room.limit,
                    gender: room.gender,
                    asset_list: asset.list
                }
            )
            : res.json({
                room: room,
                asset: null
            })
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { name, floor_id, building_id, price, limit, gender } = req.body
        const room = await new Room
        room.name = name
        room.building_id = building_id
        room.floor_id = floor_id
        room.price = price
        room.limit = limit
        room.gender = gender
        await room.save()
        res.json(room)
    } catch (err) {
        next(err)
    }
})

router.post('/update/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const { name, building_id } = req.body
        const room = await Room.findById(id)
        room.name = name
        room.building_id = building_id
        room.floor_id = floor_id
        room.price = price
        room.limit = limit
        room.gender = gender
        await room.save()
        res.json(floor)
    } catch (err) {
        next(err)
    }
})

router.delete('/delete/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const room = await Room.remove({
            _id: id
        })
        res.json(room)
    } catch (err) {
        next(err)
    }
})

module.exports = router