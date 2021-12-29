const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schema = new Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    sophong: {
        type: String
    },
    toanha: {
        type: String,
        require: true
    },
    tang: {
        type: Number,
        require: true
    },
    sogiuong: {
        type: Number,
        require: true
    },
    songuoitoida: {
        type: Number,
        require: true
    },
    giaphong: {
        type: Number,
        require: true
    },
    gioitinh: {
        type: String,
        require: true
    }
})
const Room = mongoose.model('Room', schema)

module.exports = Room