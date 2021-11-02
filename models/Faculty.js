const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name: {
        type: String,
        require: true
    }
})

const Faculty = mongoose.model('Faculty', schema)

module.exports = Faculty