const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name: {
        type: String,
        unique: true,
        require: true
    },
    building_id: {
        type: Schema.Types.ObjectId,
        ref: 'Building'
    }
})

const Floor = mongoose.model('Floor', schema)

module.exports = Floor