const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    floor_id: {
        type: Schema.Types.ObjectId,
        ref: 'Floor'
    },
    building_id: {
        type: Schema.Types.ObjectId,
        ref: 'Building'
    },
    price: {
        type: Number
    },
    limit: {
        type: String
    },
    gender: {
        type: Number
    }
})
const Room = mongoose.model('Room', schema)

module.exports = Room