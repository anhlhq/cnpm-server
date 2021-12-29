const express = require('express')
const router = express.Router()
const Asset = require('../models/Asset')
const Room = require('../models/Room')

router.get('/', async (req, res, next) => {
    const { keyword, maphong } = req.query
    try {
        if (keyword) {
            if (isNaN(parseInt(keyword))) {
                const assets = await Asset.find({
                    $or: [
                        {
                            tentaisan: keyword
                        }, {
                            tinhtrang: keyword
                        }
                    ]
                })
                res.json(assets)
            }
            else {
                const assets = await Asset.find({
                    $or: [
                        {
                            maphong: keyword
                        },
                    ]
                })
                res.json(assets)
            }

        }
        if (maphong) {
            const asset = await Asset.find({
                maphong: maphong
            })
            res.json(asset)
        }
        const assets = await Asset.find()
        const room = await Room.find()

        const data = assets.map(item => {
            return {
                mataisai: item.mataisai,
                maphong: item.maphong,
                sophong: room.filter(item2 => item2.id === item.maphong.toString())[0].sophong,
                toanha: room.filter(item2 => item2.id === item.maphong.toString())[0].toanha,
                tang: room.filter(item2 => item2.id === item.maphong.toString())[0].tang,
                tentaisan: item.tentaisan,
                tinhtrang: item.tinhtrang,
                donvitinh: item.donvitinh
            }
        })
        res.json(data)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await Asset.findById(id)
        res.json(user)
    } catch (error) {
        next(error)
    }
})


router.post('/', async (req, res, next) => {
    try {
        const {
            mataisai,
            maphong,
            tentaisan,
            tinhtrang,
            donvitinh
        } = req.body
        const asset = await new Asset
        asset.mataisai = mataisai
        asset.maphong = maphong
        asset.tentaisan = tentaisan
        asset.tinhtrang = tinhtrang
        asset.donvitinh = donvitinh
        await asset.save()
        res.json(asset)
    } catch (err) {
        next(err)
    }
})

router.post('/update/:oid', async (req, res, next) => {
    try {
        const { oid } = req.params
        const {
            mataisai,
            maphong,
            tentaisan,
            tinhtrang,
            donvitinh
        } = req.body
        const asset = await Asset.findById(oid)
        asset.mataisai = mataisai
        asset.maphong = maphong
        asset.tentaisan = tentaisan
        asset.tinhtrang = tinhtrang
        asset.donvitinh = donvitinh
        await asset.save()
        res.json(asset)
    } catch (err) {
        next(err)
    }
})


router.delete('/delete/:oid', async (req, res, next) => {
    try {
        const { oid } = req.params
        const asset = await Asset.remove({
            _id: oid
        })
        res.json(asset)
    } catch (error) {
        next(error)
    }
})

module.exports = router