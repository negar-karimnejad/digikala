import CategoryModel from "models/Category";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await CategoryModel.find({}).populate({
      path: "submenus",
      populate: {
        path: "items",
      },
    });

    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
