import mongoose from "mongoose";

const shemaCategories = mongoose.Schema({
    name: {
        type: String,
        require: true,

    },
    image: {
        type: String,
    },
    products: [{ type: mongoose.Types.ObjectId, ref: "Product" }]
})
export default mongoose.model("Categories", shemaCategories)