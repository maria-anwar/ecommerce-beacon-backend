const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema({
  product_code: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  image_path: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  sale_price: {
    type: Number,
    required: true,
  },
  cost_price: {
    type: Number,
    required: true,
  },
  available_qty: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);