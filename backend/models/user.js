const mongoose = require('mongoose')

const User = new mongoose.Schema(
    {   
        name: {type: String, required: true},
        tutor: {type: Boolean, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        availability: {
            type: [[Boolean]], // 2D array where each sub-array represents a day
            default: Array(7).fill(Array(19).fill(false)) // default for 7 days with 19 time slots each
        }
    },
    {collection: 'user-data'}
)

const model = mongoose.model('UserData', User)

module.exports = model