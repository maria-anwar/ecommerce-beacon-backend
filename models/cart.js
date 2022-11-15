const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = Schema({
  
  user_id: {
    type: Number,
    required: true,
  },
  product_id:{
    type:Number,
    required: true,
  },
  product_quantity:{
    type: Number,
    required: true,
  }
  
});

module.exports = mongoose.model("Cart", cartSchema);