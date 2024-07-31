import db from "@/db/db";
import { NextResponse } from "next/server";

export async function GET() {
  const categories = await db.category.findMany({
    orderBy: { title: "asc" },
    include: { submenus: { include: { items: true } } },
  });

  return NextResponse.json(categories);
}
