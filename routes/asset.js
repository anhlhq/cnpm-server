const express = require('express')
const router = express.Router()
const Asset = require('../models/Asset')

router.get('/', async (req, res, next) => {
    try {
        const assets = await Asset.find()
        res.json(assets)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const asset = await Asset.findById(id)
        res.json(asset)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { room_id, list } = req.body
        const asset = await new Asset
        asset.room_id = room_id
        asset.list = list
        await asset.save()
        res.json(asset)
    } catch (err) {
        next(err)
    }
})

router.post('/update/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const { name } = req.body
        const asset = await Asset.findById(id)
        asset.room_id = room_id
        asset.list = list
        await asset.save()
        res.json(asset)
    } catch (err) {
        next(err)
    }
})

router.delete('/delete/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const asset = await Asset.remove({
            _id: id
        })
        res.json(asset)
    } catch (err) {
        next(err)
    }
})

module.exports = router