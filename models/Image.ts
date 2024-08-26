const mongoose = require("mongoose");
require("./Product");

const schema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  product: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
  },
});

const model = mongoose.models.Image || mongoose.model("Image", schema);

export default model;
