const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schema = new Schema({
    no: {
        type: String
    },
    student_id: {

    },
    date_start: {
        type: String
    },
    date_end: {
        type: String
    },
    room_id: {
        type: String
    }
})
const Contract = mongoose.model('Contract', schema)

module.exports = Contract