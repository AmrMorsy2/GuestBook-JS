const mongoose = require('mongoose')
const msgSchema = mongoose.Schema

const message = new msgSchema({
    id: {
        type: Number,
        required: true
    },
    data: {
        type: String,
    }
})

module.exports = mongoose.model("MsgData", message)