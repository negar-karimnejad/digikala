import connectToDB from "config/mongodb";
import CheckoutModel from "models/Checkout";
import { NextRequest, NextResponse } from "next/server";
import { createPayment } from "../../../utils/zarinpal";
import { authUser } from "@/utils/auth";
import { User } from "@/utils/types";

export async function POST(req: NextRequest) {
  connectToDB();
  const user: User = await authUser();

  const body = await req.json();
  const { totalPrice } = body;

  const payment = await createPayment({
    amountInRial: totalPrice,
    description: "99812 پرداخت با شناسه",
    mobile: "09214052876",
  });

  const checkout = await CheckoutModel.create({
    user,
    totalPrice,
    authority: payment.authority,
  });
  return NextResponse.json(
    {
      message: "Checkout Created Successfully :))",
      checkout,
      payment: payment.paymentUrl,
    },
    { status: 201 }
  );
}
