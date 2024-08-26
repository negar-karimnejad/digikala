const mongoose = require("mongoose");
require("./Category");
require("./SubmenuItem");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
  },
  items: {
    type: mongoose.Types.ObjectId,
    ref: "SubmenuItem",
  },
});

const model = mongoose.models.Submenu || mongoose.model("Submenu", schema);

export default model;
