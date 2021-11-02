const express = require('express')
const router = express.Router()
const Class = require('../models/Class')

router.get('/', async (req, res, next) => {
    try {
        const classes = await Class.find()
        res.json(classes)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { name, faculty } = req.body
        const theClass = await new Class
        theClass.name = name
        theClass.faculty = faculty
        await theClass.save()
        res.json(theClass)
    } catch (error) {
        next(error)
    }
})

router.post('/update/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const { name, faculty } = req.body
        const theClass = await Class.findById(id)
        theClass.name = name
        theClass.faculty = faculty
        await theClass.save()
        res.json(theClass)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const theClass = await Class.remove({
            _id: id
        })
        res.json(theClass)
    } catch (error) {
        next(error)
    }
})


module.exports = router