import db from "@/db/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const stories = await db.story.findMany({
      orderBy: { id: "asc" },
    });

    return NextResponse.json(stories);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch stories" },
      { status: 500 }
    );
  }
}
