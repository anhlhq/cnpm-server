const express = require('express')
const router = express.Router()
const Building = require('../models/Building')

router.get('/', async (req, res, next) => {
    try {
        const buildings = await Building.find()
        res.json(buildings)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const building = await Building.findById(id)
        res.json(building)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { name } = req.body
        const building = await new Building
        building.name = name
        await building.save()
        res.json(building)
    } catch (err) {
        next(err)
    }
})

router.post('/update/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const { name } = req.body
        const building = await Building.findById(id)
        building.name = name
        await building.save()
        res.json(building)
    } catch (err) {
        next(err)
    }
})

router.delete('/delete/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const building = await Building.remove({
            _id: id
        })
        res.json(building)
    } catch (err) {
        next(err)
    }
})

module.exports = router