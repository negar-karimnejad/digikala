import ProductModel from "models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await ProductModel.find({})
      .populate("category")
      .populate("color")
      .populate("comment")
      .populate("feature")
      .populate("image")
      .populate("order")
      .populate("question");

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
