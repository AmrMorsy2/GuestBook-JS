const express = require('express')
const db = require("./database")
const cors = require('cors')

const server = new express()
server.use(cors())
server.use(express.json({extended:true}))
server.use(express.urlencoded({extended:true}))

db()
server.use("/msgs", require('./auth/auth.js'),require('./routes/messeges.js'))
server.use("/user", require('./auth/auth.js'),require('./routes/user.js'))
module.exports = server.listen(8881,() => {
    console.log("BGB")    
})
