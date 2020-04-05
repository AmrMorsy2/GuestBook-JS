const express = require('express')

const msgDB = require('../schemas/messeges')
const dbo = require('../database')
const router = express.Router()
router.get("/:", (req, res) => {

})


router.delete("/del/:username/:msgid", async (req, res) => {
    console.log(req.body)
    try{
        await msgDB.remove({
            username: req.params.username,
            _id: req.params.msgid
        })
        res.status(200).send("Delete Done")
    }catch{
        res.send(402).send("DB delete error")
    }
})

router.post("/ins/:username", async (req, res) => {
    console.log(req.body)
    let msgObj = {
        username: req.params.username,
        data: req.body.data
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