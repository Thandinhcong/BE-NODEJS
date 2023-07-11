import mongoose from "mongoose";

const shemaOrder = mongoose.Schema({
  orderItem: [
    {
        name: {type: String, require: true },
        amount:{type: Number, require: true },
        image:{type: String, require: true },
        price: {type: Number, require: true },
        products: [{ type: mongoose.Types.ObjectId, ref: "Product" }]
    }
  ],
  shippingAddress: {
    fullName: {type: String, require: true },
    address: {type: String, require: true },
    city: {type: String, require: true },
    country: {type: String, require: true },
    phone: {type: Number, require: true },
  },
  paymentMethod: {type: String, require: true},
  itemsPrice: { type: Number, require: true},
  shippingPrice: { type: Number, require: true},
  totalPrice: { type: Number, require: true},
  user: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  isPaid: {type: Boolean, default: false},
  paidAt: {type: Date},
  isDelivered: {type: Boolean, default: false},
  deliveredAt: {type: Date}
})
export default mongoose.model("OrderProduct", shemaOrder)