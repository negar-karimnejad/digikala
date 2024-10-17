import { NextResponse } from "next/server";
import CheckoutModel from "models/Checkout";
import connectToDB from "config/mongodb";
import { createPayment } from "@/utils/zarinpal";

export const POST = async (req) => {
  connectToDB();
  const body = await req.json();
  const { totalPrice, user } = body;

  const payment = await createPayment({
    amountInRial: totalPrice,
    description: "پرداخت با شناسه 99812",
    mobile: user.phone,
  });

  const checkout = await CheckoutModel.create({
    totalPrice,
    authority: payment.authority,
    user: user._id,
  });

  return NextResponse.json(
    {
      message: "Checkout created successfully :))",
      checkout,
      paymentUrl: payment.paymentUrl,
    },
    { status: 201 }
  );
};
