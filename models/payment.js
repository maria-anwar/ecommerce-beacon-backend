const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = Schema({
  
  user_id:{
    type:Number,
    require: true,
  },
  card_no:{
    type:Number,
    require: true,
  },
  card_title: {
    type: String,
    required: true,
  },
  cvs_code: {
    type: String,
    required: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Payment", paymentSchema);