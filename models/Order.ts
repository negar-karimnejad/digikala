const mongoose = require("mongoose");
require("./Product");
require("./User");

const schema = new mongoose.Schema({
  totalAmount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: () => Date.now(),
    immutable: false,
  },
  status: {
    type: String,
    required: true,
  },
  productId: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const model = mongoose.models.Order || mongoose.model("Order", schema);

export default model;
