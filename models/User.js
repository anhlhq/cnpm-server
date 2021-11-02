const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const saltRounds = 12
const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: Number
    },
    code: {
        type: String
    },
    date_of_birth: {
        type: String
    },
    gender: {
        type: Number
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    classname: {
        type: String
    },
    faculty_id: {
        type: Schema.Types.ObjectId,
        ref: 'Faculty'
    },
    contract_code: {
        type: Schema.Types.ObjectId,
        ref: 'Contract'
    },
    tokens: [
        { type: String }
    ]
})

userSchema.methods.hashPassword = function (password) {
    var self = this
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) {
                reject(err)
            }
            self.password = hash
            resolve(self)
        })
    })
}

userSchema.methods.generateAuthToken = async function () {
    const self = this
    const token = jwt.sign({
        _id: self._id
    }, process.env.JWT_KEY)

    const tokens = [...self.tokens, token]

    self.tokens = tokens
    await self.save()
    return token
}

const User = mongoose.model('User', userSchema)

module.exports = User