const mongoose = require('mongoose')

const dbConnection = async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/test")
    }catch{
        console.log("DB Connection Error")
    }
}

module.exports = dbConnection