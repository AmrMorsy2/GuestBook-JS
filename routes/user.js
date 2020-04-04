const express = require('express')
const validation = require("../Validator/user")
const userDB = require('../schemas/user')
const router = express.Router()
const jwt = require('jsonwebtoken')
const config = require('config')

router.post('/register', (req, res) => {
    const ret = validation.validate(req.body)
    if(ret.error){
        return res.status(400).send(ret.error)
    }
    let dbEntry = new userDB(req.body).save().then( ()=>{
        console.log("DB insert sucessfully")
        res.status(200).send("Insert done")
    }).catch((err)=>{
        console.log("User insert error")
        console.log(err)
        res.status(400).send("User insert error")
    })
})

router.post('/login', async (req, res) => {
    try{ 
        const result = await userDB.find({
            username: req.body.username
        })
        if(req.body.password === result[0].password){
            const payload = req.body
            jwt.sign(payload, config.get('jwtKey'), {
                expiresIn: "1m"
            }, (err, authtoken) => {
                if(err){
                    console.log(err)
                    res.status(500).send("Token issue")
                }
                res.status(200).json({"authtoken": authtoken}).send("Token done")
            })
        }else{
            res.status(300).send("User not found")
        }
    }catch(err){
        console.log(err)
        throw err
    } 
})

module.exports = router