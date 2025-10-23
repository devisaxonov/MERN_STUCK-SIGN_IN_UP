import joi from 'joi'


const resetPassValidate = joi.object({
    password: joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
})

export default resetPassValidate;