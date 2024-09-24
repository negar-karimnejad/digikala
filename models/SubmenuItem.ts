const mongoose = require("mongoose");
require("./Submenu");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  submenuId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Submenu",
  },
});

const model =
  mongoose.models?.SubmenuItem || mongoose.model("SubmenuItem", schema);

export default model;
