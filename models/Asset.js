const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schema = new Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    phongid: {
        type: Number,
        require: true
    },
    danhsachtaisan: [{
        tentainsai: {
            type: String,
            require: true
        },
        tinhtrang: {
            type: String,
            require: true
        },
        donvitinh: {
            type: String,
            require: true
        }
    }]

})
const Asset = mongoose.model('Asset', schema)

module.exports = Asset