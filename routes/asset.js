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
            id,
            phongid,
            danhsachtaisan
        } = req.body
        const asset = await new Asset
        asset.id = id
        asset.phongid = phongid
        asset.danhsachtaisan = danhsachtaisan
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
            id,
            phongid,
            danhsachtaisan
        } = req.body
        const asset = await new Asset.findById(oid)
        asset.id = id
        asset.phongid = phongid
        asset.danhsachtaisan = danhsachtaisan
        await asset.save()
        res.json(asset)
    } catch (err) {
        next(err)
    }
})


router.delete('/:oid', async (req, res, next) => {
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