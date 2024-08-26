const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
});

const model = mongoose.models.Story || mongoose.model("Story", schema);

export default model;
