import mongoose from 'mongoose';

// Utility function to serialize Mongoose documents
export function serializeDoc(doc:any) {
  if (!doc) return doc;
  // Handle ObjectId and Buffers
  if (doc instanceof mongoose.Types.ObjectId) return doc.toString();
  if (Buffer.isBuffer(doc)) return doc.toString('base64');
  // Recursively serialize arrays and objects
  if (Array.isArray(doc)) return doc.map(serializeDoc);
  if (typeof doc === 'object') {
    return Object.fromEntries(
      Object.entries(doc).map(([key, value]) => [key, serializeDoc(value)])
    );
  }
  return doc;
}
