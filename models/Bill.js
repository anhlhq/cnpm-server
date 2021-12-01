const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schema = new Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    sinhvienid: {
        type: String,
        require: true
    },
    phongid: {
        type: String,
        require: true
    },
    thang: {
        type: Number
    },
    nam: {
        type: Number
    },
    chisodiendau: {
        type: Number
    },
    chisodiencuoi: {
        type: Number
    },
    chisonuocdau: {
        type: Number
    },
    chisonuoccuoi: {
        type: Number
    },
    tinhtranghoadon: {
        type: String
    }

})
const Bill = mongoose.model('Bill', schema)

module.exports = Bill