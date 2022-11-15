const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = Schema({
  user_id:{
    type:Number,
    require: true,
  },
  message: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  user_email: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Contact", contactSchema);