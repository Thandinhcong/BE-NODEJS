import mongoose from "mongoose";
const schemaSize = mongoose.Schema({
    name: String,
    productQuantity: Number,
    products: []
})
export default mongoose.model('Size', schemaSize)