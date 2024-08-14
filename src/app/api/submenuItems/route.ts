import db from "@/db/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const submenuItems = await db.submenuItem.findMany();

    return NextResponse.json(submenuItems);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch submenuItems" },
      { status: 500 }
    );
  }
}
