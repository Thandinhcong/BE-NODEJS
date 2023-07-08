import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema({
    name: String,
    productQuantity: Number,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }]
});

const Size = mongoose.model('Size', sizeSchema);

export default Size;
