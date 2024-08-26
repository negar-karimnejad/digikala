const mongoose = require("mongoose");
require("./Product");

const schema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  product: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
  },
});

const model = mongoose.models.Feature || mongoose.model("Feature", schema);

export default model;
