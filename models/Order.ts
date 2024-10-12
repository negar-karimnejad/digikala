const mongoose = require("mongoose");
require("./Product");
require("./User");

const schema = new mongoose.Schema({
  date: {
    type: Date,
    default: () => Date.now(),
    immutable: false,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const model = mongoose.models?.Order || mongoose.model("Order", schema);

export default model;
