const mongoose = require("mongoose");
require("./Product");
require("./Submenu");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
  },
  cover: {
    type: [String],
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  hero: {
    type: [String],
    required: true,
  },
  banner: {
    type: [String],
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  submenus: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Submenu",
    },
  ],
});

const model = mongoose.models?.Category || mongoose.model("Category", schema);

export default model;
