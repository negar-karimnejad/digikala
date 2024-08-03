import db from "@/db/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await db.product.findMany({
      orderBy: { id: "asc" },
      include: {
        comment: true,
        color: true,
        image: true,
        feature: true,
        category: true,
        order: true,
        question: true,
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
