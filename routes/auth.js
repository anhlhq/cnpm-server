const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

router.get('/', async (req, res, next) => {
    const query = req.query
    const key = Object.keys(query)
    const value = Object.values(query)
    try {
        const users = await User.find({
            [key]: value
        })
        res.json(users)
    } catch (err) {
        next(err)
    }
})


router.post('/register', async (req, res, next) => {
    try {
        const { username, password } = req.body
        const user = await new User
        user.username = username
        if (password) {
            await user.hashPassword(password)
        }
        // const token = user.generateAuthToken()
        res.json({
            status: 'success',
            user
        })
        await user.save()
    } catch (error) {
        next(error)
    }
})

router.post('/login', async (req, res, next) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({
            username: username
        })
        if (!user) {
            res.json({
                status: 'failed',
                // token: ''
            })
        }
        const match = await bcrypt.compare(password, user.password)
        if (!match) {
            res.json({
                status: 'failed',
                // token: ''
            })
        }
        // const token = await user.generateAuthToken()
        res.json({
            status: 'success',
            user
        })
    } catch (error) {
        next(error)
    }
});

router.get('/status', async (req, res, next) => {
    try {
        const user = await User.findById(req.data._id)
        if (!user) {
            res.json('guest')
        }
        res.json('logged-in')
    } catch (error) {
        next(error)
    }
})

// router.get('/logout', checkToken, async (req, res, next) => {
//     try {
//         const user = await User.findById(req.data._id)
//         user.tokens = []
//         await user.save()
//         res.json('logged-out')
//         console.log(user)
//     } catch (error) {
//         next(error)
//     }
// })

module.exports = router