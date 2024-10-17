import { verifyPayment } from "@/utils/zarinpal";
import CheckoutModel from "models/Checkout";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const { searchParams } = req.nextUrl;
    const { Authority: authority, Status } = Object.fromEntries(
      searchParams.entries()
    );

    const checkout = await CheckoutModel.findOne({ authority });
    if (!checkout) {
      return NextResponse.json(
        { message: "Checkout not found !!" },
        { status: 404 }
      );
    }

    const payment = await verifyPayment({
      amountInRial: checkout.totalPrice,
      authority,
    });

    if (![100, 101].includes(payment.data.code)) {
      const errorUrl = new URL("/checkout/payment", req.nextUrl.origin);
      errorUrl.searchParams.set("error", "Payment not verified");

      return NextResponse.redirect(errorUrl);
    }

    await CheckoutModel.deleteOne({
      _id: checkout._id,
    });

    const successUrl = new URL("/checkout/payment", req.nextUrl.origin);
    successUrl.searchParams.set(
      "success",
      "Payment verified and order created successfully!"
    );

    return NextResponse.redirect(successUrl);
  } catch (err) {
    return NextResponse.json(
      {
        message: "Internal Server Error !!",
        error: err?.message,
      },
      { status: 500 }
    );
  }
};
