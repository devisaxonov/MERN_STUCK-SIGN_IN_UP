import joi from 'joi'

export const validateForgetPass = joi.object({
    email: joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
})
