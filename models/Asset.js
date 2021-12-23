const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schema = new Schema({
    mataisai: String,
    maphong: String,
    tentaisan: String,
    tinhtrang: String,
    soluong: String,
    donvitinh: String
})
const Asset = mongoose.model('Asset', schema)

module.exports = Asset