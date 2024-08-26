import SubmenuItemModel from "models/SubmenuItem";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const submenuItems = await SubmenuItemModel.find({});

    return NextResponse.json(submenuItems);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch submenuItems" },
      { status: 500 }
    );
  }
}
