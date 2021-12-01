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
        const faculty = await Faculty.findById(user.faculty_id)
        res.json({
            username: user.username,
            fullname: user.fullname,
            date_of_birth: user.date_of_birth,
            gender: user.gender,
            email: user.email,
            phone: user.phone,
            class: user.class,
            faculty: faculty.name
        })
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { username, password, role, code, fullname, date_of_birth, gender, email, phone, classname, faculty } = req.body
        const user = await new User
        user.username = username
        user.password = password
        user.role = role
        user.code = code
        user.fullname = fullname
        user.date_of_birth = date_of_birth
        user.gender = user.gender
        user.email = email
        user.phone = phone
        user.classname = classname
        user.faculty = faculty
        await user.save()
        res.json(user)
    } catch (err) {
        next(err)
    }
})

router.post('/update/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const { username, password, role, code, fullname, date_of_birth, gender, email, phone, classname, faculty } = req.body
        const user = await User.findById(id)
        user.username = username
        user.password = password
        user.role = role
        user.code = code
        user.fullname = fullname
        user.date_of_birth = date_of_birth
        user.gender = user.gender
        user.email = email
        user.phone = phone
        user.classname = classname
        user.faculty = faculty
        await user.save()
        res.json(user)
    } catch (err) {
        next(err)
    }
})


router.delete('/:id', async (req, res, next) => {
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