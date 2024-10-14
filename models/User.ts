const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  address: {
    street: { type: String, required: false },
    plate: { type: String, required: false },
    unit: { type: String, required: false },
    postalcode: { type: String, required: false },
    province: { type: String, required: false },
    city: { type: String, required: false },
  },
  idNumber: {
    type: String,
    required: false,
  },
  avatar: {
    type: String,
    required: false,
  },
  job: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    default: "USER",
  },
  refreshToken: String,
});

const model = mongoose.models?.User || mongoose.model("User", schema);

export default model;
