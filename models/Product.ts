const mongoose = require("mongoose");
require("./Comment");
require("./Question");
require("./Feature");
require("./Color");
require("./Order");
require("./Image");
require("./Category");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  en_title: {
    type: String,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
  },
  voter: {
    type: Number,
    required: false,
  },

  sizes: {
    type: String,
    required: false,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: false,
  },
  discount_price: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  recommended_percent: {
    type: Number,
    required: false,
  },
  guarantee: {
    type: String,
    required: false,
  },
  submenuId: {
    type: String,
    required: true,
  },
  submenuItemId: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: false,
  },
  comments: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  questions: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
  },
  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Image",
    },
  ],
  colors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Color",
    },
  ],
  features: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Feature",
    },
  ],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const model = mongoose.models?.Product || mongoose.model("Product", schema);

export default model;
