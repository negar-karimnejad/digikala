import connectToDB from "config/mongodb";
import CheckoutModel from "models/Checkout";
import { NextRequest, NextResponse } from "next/server";
import { createPayment } from "../../../utils/zarinpal";

export async function POST(req: NextRequest) {
  await connectToDB();

  const body = await req.json();
  const { totalPrice, user } = body;
  console.log("🏆body ->", body);

  try {
    const payment = await createPayment({
      amountInRial: totalPrice,
      description: "99812 پرداخت با شناسه",
      mobile: user.phone,
    });

    console.log("🎈🎈payment=> ", payment);

    // Check if payment is valid and has the required properties
    if (!payment || !payment.authority) {
      return NextResponse.json(
        { message: "Payment creation failed or returned invalid data." },
        { status: 400 } // Bad Request
      );
    }

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
  } catch (error) {
    console.log("❌📌error->", error);
    return NextResponse.json(
      { message: "Checkout creation failed.", error: error.message },
      { status: 500 }
    );
  }
}
