import joi from "joi";

export const schemaSignin = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    confilmPassWord: joi.string().valid(joi.ref("password")).required()
})
export const schemaSignup = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
})