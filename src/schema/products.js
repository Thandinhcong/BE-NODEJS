import Joi from "joi"
export const schemaProduct = Joi.object({
    name: Joi.string().max(225).required("Trường dữ liệu bắt buộc"),
    price: Joi.number().min(1).required(),
    orinal_price: Joi.number().min(1).required(),
    description: Joi.string(),
    longDescription: Joi.string(),
    image: Joi.string(),
    categoryId: Joi.string(),
    sizes: Joi.string()
})