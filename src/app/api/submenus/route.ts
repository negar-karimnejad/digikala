import SubmenuModel from "models/Submenu";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const submenus = await SubmenuModel.find({}).populate("items");

    return NextResponse.json(submenus);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch submenus" },
      { status: 500 }
    );
  }
}
