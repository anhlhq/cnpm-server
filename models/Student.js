const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schema = new Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    hoten: {
        type: String,
        require: true
    },
    ngaysinh: {
        type: String,
    },
    lop: {
        type: String,
    },
    khoa: {
        type: String,
    },
    gioitinh: {
        type: String,
    },
    diachi: {
        type: String,
    },
    sodienthoai: {
        type: String
    }
})
const Student = mongoose.model('Student', schema)

module.exports = Student