import db from "@/db/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const submenus = await db.submenu.findMany({
      orderBy: { id: "asc" },
      include: { items: true },
    });

    return NextResponse.json(submenus);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch submenus" },
      { status: 500 }
    );
  }
}
