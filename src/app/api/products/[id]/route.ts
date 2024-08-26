import ProductModel from "models/Product";

import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const product = await ProductModel.findOne({ id: Number(params.id) })
      .populate("image")
      .populate("color")
      .populate("feature")
      .populate("comment")
      .populate("order")
      .populate("question")
      .populate({
        path: "category",
        populate: {
          path: "submenus",
          populate: {
            path: "items",
          },
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
