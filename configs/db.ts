// const mongoose = require("mongoose");

// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverSelectionTimeoutMS: 30000,
// };

// const connectToDB = async () => {
//   try {
//     if (mongoose.connections[0].readyState) {
//       return true;
//     } else {
//       await mongoose.connect(process.env.MONGODB_URI, options);
//       console.log("Connect To DB Successfully :))");
//     }
//   } catch (err) {
//     console.log("DB Connection has error ->", err);
//   }
// };

// export default connectToDB;
import { MongoClient, MongoClientOptions } from "mongodb";

const uri = process.env.MONGODB_URI;
const options: MongoClientOptions = {}; // Remove old options

let mongoClient: MongoClient | null = null;
let database: any = null;

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

export default async function connectToDB() {
  try {
    if (mongoClient && database) {
      return { mongoClient, database };
    }
    if (process.env.NODE_ENV === "development") {
      if (!global._mongoClient) {
        mongoClient = await new MongoClient(uri, options).connect();
        global._mongoClient = mongoClient;
      } else {
        mongoClient = global._mongoClient;
      }
    } else {
      mongoClient = await new MongoClient(uri, options).connect();
    }
    database = mongoClient.db(process.env.NEXT_ATLAS_DATABASE);
    return { mongoClient, database };
  } catch (e) {
    console.error(e);
    throw e; 
  }
}
