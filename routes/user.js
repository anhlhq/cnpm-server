const express = require('express')
const router = express.Router()
const User = require('../models/User')
const passport = require('passport')

router.get('/', async (req, res, next) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.json(user)
    } catch (error) {
        next(error)
    }
})

router.get('/id_student/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await User.find({
            id_student: id
        })
        res.json(user)
    } catch (error) {
        next(error)
    }
})


router.post('/', async (req, res, next) => {
    try {
        const { username, password, role, id_student } = req.body
        const user = await new User
        user.username = username
        user.password = password
        user.role = role
        user.id_student = id_student
        await user.save()
        res.json(user)
    } catch (err) {
        next(err)
    }
})

router.post('/update/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const { username, password, role, id_student } = req.body
        const user = await User.findById(id)
        user.username = username
        user.password = password
        user.role = role
        user.id_student = id_student
        await user.save()
        res.json(user)
    } catch (err) {
        next(err)
    }
})


router.delete('/delete/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await User.remove({
            _id: id
        })
        res.json(user)
    } catch (error) {
        next(error)
    }
})

module.exports = router