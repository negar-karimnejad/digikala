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
    type: mongoose.Types.ObjectId,
    ref: "Submenu",
  },
});

const model = mongoose.models.Submenu || mongoose.model("Submenu", schema);

export default model;
