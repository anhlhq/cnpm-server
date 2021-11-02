const express = require('express')
const router = express.Router()
const User = require('../models/User')
const passport = require('passport')

router.get('/register', (req, res, next) => {
    try {
        res.render('register/index', {
            title: 'Đăng kí'
        })
    } catch (error) {
        next(error)
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
        const token = user.generateAuthToken()
        res.json(user, token)
        await user.save()
        res.redirect('user/info')
    } catch (error) {
        next(error)
    }
})

router.get('/login', (req, res, next) => {
    try {
        res.render('login/index', {
            title: 'Đặng nhập'
        })
    } catch (error) {
        next(error)
    }
})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

router.get('/logout', (req, res, next) => {
    try {
        req.logout();
        res.redirect('/');
    } catch (error) {
        next(error)
    }
})

module.exports = router