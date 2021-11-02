const express = require('express')
const router = express.Router()
const Faculty = require('../models/Faculty')

router.get('/', async (req, res, next) => {
    try {
        const faculties = await Faculty.find()
        res.json(faculties)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { name, classes } = req.body
        const faculty = await new Faculty
        faculty.name = name
        faculty.classes = classes
        await faculty.save()
        res.json(faculty)
    } catch (error) {
        next(error)
    }
})

router.post('/update/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const { name, classes } = req.body
        const faculty = await Faculty.findById(id)
        faculty.name = name
        faculty.classes = classes
        await faculty.save()
        res.json(faculty)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const faculty = await Faculty.remove({
            _id: id
        })
        res.json(faculty)
    } catch (error) {
        next(error)
    }
})


module.exports = router