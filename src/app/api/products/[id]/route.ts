import db from "@/db/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const product = await db.product.findUnique({
      where: { id: Number(params.id) },
      include: {
        category: { include: { submenus: { include: { items: true } } } },
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
