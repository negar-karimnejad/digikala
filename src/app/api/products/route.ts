import db from "@/db/db";
import { NextResponse } from "next/server";

export async function GET() {
  const products = await db.product.findMany({ orderBy: { title: "asc" } });

  return NextResponse.json(products);
}
