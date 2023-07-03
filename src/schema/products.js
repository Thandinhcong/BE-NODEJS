import Joi from "joi"
export const schemaProduct = Joi.object({
    name: Joi.string().min(3, "Tối thiểu 3 kí tự").max(225, "tối đa 225 kí tự").required("Trường dữ liệu bắt buộc"),
    price: Joi.number().min(1).required(),
    orinal_price: Joi.number().min(1).required(),
})