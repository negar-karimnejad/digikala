import StoryModel from "models/Story";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const stories = await StoryModel.find({});

    return NextResponse.json(stories);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch stories" },
      { status: 500 }
    );
  }
}
