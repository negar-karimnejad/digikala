const mongoose = require("mongoose");
require("./ArticleComment");
require("./Category");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
  tags: {
    type: [String],
  },
  cover: {
    type: String,
    required: true,
  },
  readingTime: {
    type: String,
  },
  source: {
    type: String,
  },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ArticleComment",
    },
  ],
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const model = mongoose.models?.Article || mongoose.model("Article", schema);
export default model;
