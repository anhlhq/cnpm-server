const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    faculty: {
        type: Schema.Types.ObjectId,
        ref: 'Faculty'
    }
})

const Class = mongoose.model('Class', schema)

module.exports = Class