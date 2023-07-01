import Joi from "joi";

export const schemaCategories = Joi.object({
    name: Joi.string().required(),
    image: Joi.string()
})