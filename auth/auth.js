const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = async function(req, res, next){
    const token = req.header('authtoken')
    if(!token){
        res.status(400).send("bad request");
    }
    try{
        const decoded = jwt.verify(token, config.get('jwtKey'))
        if(decoded){
            next()
        }else{
            res.status(401).send("Not Auth")
        }
    }catch(err){
            res.status(500).send("Auth Error")
    }
}