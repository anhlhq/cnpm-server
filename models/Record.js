const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schema = new Schema({
    id: {
        type: String,
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
        type: String
    }
})
const Record = mongoose.model('Record', schema)

module.exports = Record