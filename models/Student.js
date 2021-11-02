const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    student_id: {
        type: String,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true
    },
    date_of_birth: {
        type: String,
    },
    class_id: {
        type: Schema.Types.ObjectId,
        ref: 'Class'
    },
    faculty_id: {
        type: Schema.Types.ObjectId,
        ref: 'Faculty'
    },
    gender: {
        type: Number,
    },
    address: {
        type: String
    },
    phone: {
        type: String
    }
})

const Student = mongoose.model('Student', schema)

module.exports = Student