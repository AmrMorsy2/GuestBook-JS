const mongoose = require('mongoose')
const msgSchema = mongoose.Schema

const message = new msgSchema({
    username: {
        type: String,
        required: true
    },
    data: {
        type: String,
    }
})

module.exports = mongoose.model("MsgData", message)