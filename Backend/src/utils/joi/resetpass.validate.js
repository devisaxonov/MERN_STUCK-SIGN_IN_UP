import joi from 'joi'

export const validateResetPass = joi.object({
    email: joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
})
