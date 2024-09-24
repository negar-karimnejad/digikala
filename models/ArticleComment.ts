const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },

  author: {
    type: String,
    required: true,
    trim: true,
  },

  date: {
    type: Date,
    required: true,
    default: Date.now,
  },

  likes: {
    type: Number,
    default: 0,
  },

  content: {
    type: String,
    required: true,
    trim: true,
  },

  articleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article",
    required: true,
  },
});

// Export the Comment model
const model =
  mongoose.models?.ArticleComment || mongoose.model("ArticleComment", schema);

export default model;
