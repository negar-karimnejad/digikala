const mongoose = require("mongoose");
require("./Product");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  hex: {
    type: String,
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
});

const model = mongoose.models?.Color || mongoose.model("Color", schema);

export default model;
