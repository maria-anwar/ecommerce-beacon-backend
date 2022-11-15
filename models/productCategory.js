const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productCategorySchema = Schema({
  product_code: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model("ProductCategory", productCategorySchema);