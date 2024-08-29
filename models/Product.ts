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
    required: true,
  },
  recommended_percent: {
    type: Number,
    required: false,
  },
  guarantee: {
    type: String,
    required: false,
  },
  likes: {
    type: Number,
    required: false,
  },
  comments: {
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  questions: {
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Question",
      },
    ],
  },
  features: {
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Feature",
      },
    ],
  },
  colors: {
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Color",
      },
    ],
  },
  orders: {
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Order",
      },
    ],
  },
  images: {
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Image",
      },
    ],
  },
  category: {
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Category",
      },
    ],
  },
});

const model = mongoose.models.Product || mongoose.model("Product", schema);

export default model;
