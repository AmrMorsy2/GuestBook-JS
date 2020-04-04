const joi = require('@hapi/joi')

const validateSchema = joi.object({
    username: joi.string().min(5).alphanum(),
    password: joi.string().min(8).required(),
    email: joi.string().email(),
})

module.exports = validateSchema