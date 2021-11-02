const express = require('express')
const router = express.Router()
const Floor = require('../models/Floor')

router.get('/', async (req, res, next) => {
    try {
        const floors = await Floor.find()
        res.json(floors)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const floor = await Floor.findById(id)
        res.json(floor)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { name, building_id } = req.body
        const floor = await new Floor
        floor.name = name
        floor.building_id = building_id
        await floor.save()
        res.json(floor)
    } catch (err) {
        next(err)
    }
})

router.post('/update/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const { name, building_id } = req.body
        const floor = await Floor.findById(id)
        floor.name = name
        floor.building_id = building_id

        await floor.save()
        res.json(floor)
    } catch (err) {
        next(err)
    }
})

router.delete('/delete/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const floor = await Floor.remove({
            _id: id
        })
        res.json(floor)
    } catch (err) {
        next(err)
    }
})

module.exports = router