import db from "@/db/db";
import { NextResponse } from "next/server";

export async function GET() {
  const products = await db.product.findMany();

  return NextResponse.json(products);
}
