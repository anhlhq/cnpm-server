const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schema = new Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    sinhvienid: {
        type: Number,
        require: true
    },
    phongid: {
        type: String,
        require: true
    },
    ngaybatdau: {
        type: String,
        // require: true
    },
    ngayketthuc: {
        type: String,
        // require: true
    },
    tinhtranghopdong: {
        type: Number,
        // require: true
    }
})
const Contract = mongoose.model('Contract', schema)

module.exports = Contract