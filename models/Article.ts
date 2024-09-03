const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  //   product: {
  //     type: mongoose.Types.ObjectId,
  //     ref: "Product",
  //   },
  //   submenus: [
  //     {
  //       type: mongoose.Types.ObjectId,
  //       ref: "Submenu",
  //     },
  //   ],
});

const model = mongoose.models.Article || mongoose.model("Article", schema);

export default model;
