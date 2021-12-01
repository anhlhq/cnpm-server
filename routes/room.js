const express = require('express')
const router = express.Router()
const Room = require('../models/Room')
const escapeStringRegexp = require('escape-string-regexp');

router.get('/', async (req, res, next) => {
    const { keyword } = req.query
    try {
        if (id) {
            const room = await Room.find({
                id: id
            })
            res.json(room)
        }

        if (tang) {
            const room = await Room.find({
                tang: tang
            })
            res.json(room)
        }
        if (sogiuong) {
            const room = await Room.find({
                sogiuong: sogiuong
            })
            res.json(room)
        }
        if (toanha) {
            const $regex = escapeStringRegexp(toanha);
            const room = await Room.find({
                toanha: $regex
            })
            res.json(room)
        }
        if (songuoitoida) {
            const room = await Room.find({
                songuoitoida: songuoitoida
            })
            res.json(room)
        }
        if (giaphong) {
            const room = await Room.find({
                giaphong: giaphong
            })
            res.json(room)
        }
        if (gioitinh) {
            const room = await Room.find({
                gioitinh: gioitinh
            })
            res.json(room)
        }

        if (keyword) {

        }
        const rooms = await Room.find()
        res.json(rooms)
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