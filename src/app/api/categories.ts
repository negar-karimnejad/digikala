import type { NextApiRequest, NextApiResponse } from "next";
import db from "@/db/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const categories = await db.category.findMany({
      orderBy: { title: "asc" },
      include: { submenus: { include: { items: true } } },
    });
    res.status(200).json({ categories });
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
}
