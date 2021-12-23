const express = require('express')
const router = express.Router()
const Asset = require('../models/Asset')

router.get('/', async (req, res, next) => {
    const query = req.query
    const key = Object.keys(query)
    const value = Object.values(query)
    try {
        const assets = await Asset.find({
            [key]: value
        })
        res.json(assets)
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