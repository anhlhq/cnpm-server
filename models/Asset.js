const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    room_id: {
        type: Schema.Types.ObjectId,
        ref: 'Room'
    },
    list: [
        {
            name: {
                type: String
            },
            status: {
                type: String
            },
            price: {
                type: String
            }
        }
    ]
})

const Asset = mongoose.model('Asset', schema)

module.exports = Asset