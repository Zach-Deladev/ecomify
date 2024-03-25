import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  sizes: {
    type: [String], // Changed to array of strings to represent available sizes
    required: true,
  },
  stockQuantities: {
    L: { type: Number, required: true, default: 0 },
    XL: { type: Number, required: true, default: 0 },
    XXL: { type: Number, required: true, default: 0 },
    XXXL: { type: Number, required: true, default: 0 },
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
