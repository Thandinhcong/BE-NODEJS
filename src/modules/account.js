import mongoose from "mongoose";
const schemaUser = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: Number,
    },
    address: {
        type: String
    },

    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: "member",
    }
})
export default mongoose.model("User", schemaUser)