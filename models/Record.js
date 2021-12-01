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
    noidungvipham: {
        type: String,
    },
    thoigianvipham: {
        type: String
    },
    hinhthuckiluat: {
        type: String
    },
    thoigiankiluat: {
        type: Date
    }
})
const Record = mongoose.model('Record', schema)

module.exports = Record