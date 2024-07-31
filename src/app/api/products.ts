import type { NextApiRequest, NextApiResponse } from "next";
import db from "@/db/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const products = await db.product.findMany();
    res.status(200).json({ products });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
}
