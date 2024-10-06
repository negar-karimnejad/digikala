import mongoose from "mongoose";

export function serializeDoc(doc: any): any {
  if (!doc) return doc;

  // Handle Mongoose documents using `toObject`
  if (doc instanceof mongoose.Document) {
    return serializeDoc(doc.toObject());
  }

  // Handle ObjectId and Buffers
  if (doc instanceof mongoose.Types.ObjectId) return doc.toString();
  if (Buffer.isBuffer(doc)) return doc.toString("base64");

  // Recursively serialize arrays and objects
  if (Array.isArray(doc)) return doc.map(serializeDoc);
  if (typeof doc === "object" && doc !== null) {
    return Object.fromEntries(
      Object.entries(doc).map(([key, value]) => [key, serializeDoc(value)])
    );
  }

  return doc;
}
