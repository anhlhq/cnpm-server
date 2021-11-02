const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name: {
        type: String,
        require: true
    },
    classes: [
        { type: String }
    ]
})

const Faculty = mongoose.model('Faculty', schema)

module.exports = Faculty