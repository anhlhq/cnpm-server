const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name: {
        type: String,
        unique: true,
        require: true
    }
})

const Building = mongoose.model('Building', schema)

module.exports = Building