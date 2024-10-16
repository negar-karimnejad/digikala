const mongoose = require("mongoose");
require("./User");

const schema = new mongoose.Schema({
  totalPrice: {
    type: Number,
    required: true,
  },
  authority: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const model = mongoose.models?.Checkout || mongoose.model("Checkout", schema);

export default model;
