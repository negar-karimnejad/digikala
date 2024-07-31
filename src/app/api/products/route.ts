import db from "@/db/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await db.product.findMany();

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
