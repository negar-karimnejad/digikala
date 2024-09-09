const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000,
};

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      await mongoose.connect(process.env.MONGODB_URI, options);
      console.log("Connect To DB Successfully :))");
    }
  } catch (err) {
    console.log("DB Connection has error ->", err);
  }
};

export default connectToDB;
