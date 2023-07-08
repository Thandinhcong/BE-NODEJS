import mongoose from "mongoose";

const schemaProducts = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true
    },
    orinal_price: {
        type: Number,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    longDescription: {
        type: String
    }
    , image: {
        type: String,
        require: true,
    },
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Categories",
    },
    sizes: {
        type: mongoose.Types.ObjectId,
        ref: "Size"
    }
})
export default mongoose.model("Product", schemaProducts)