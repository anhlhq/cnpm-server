const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schema = new Schema({
    id: {
        type: String,
    },
    sinhvienid: {
        type: Number,
    },
    phongid: {
        type: String,
    },
    ngaybatdau: {
        type: String,
    },
    ngayketthuc: {
        type: String,
    },
    tinhtranghopdong: {
        type: String,
    }
})
const Contract = mongoose.model('Contract', schema)

module.exports = Contract