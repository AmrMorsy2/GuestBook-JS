const express = require('express')

const msgDB = require('../schemas/messeges')
const dbo = require('../database')
const router = express.Router()
router.get("/:", (req, res) => {

})


router.post("/:id", async (req, res) => {
    console.log(req.body)
    let msgObj = {
        id: req.params.id,
        data: req.body.msg
    }
    
    let ret = new msgDB(msgObj).save().then(()=>{
        console.log("DB insert sucessfully")
        res.status(200).send("Insert done")
    }).catch(()=>{
        console.log("DB insert error")
        res.status(400).send("DB insert error")
    })
    const result = await msgDB.find()
    console.log(result)

})

module.exports = router