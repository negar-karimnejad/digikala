import Checkout from "@/../../models/Checkout";
import { NextRequest, NextResponse } from "next/server";
import { verifyPayment } from "../../../../utils/zarinpal";
import { useCart } from "@/utils/cartItemsContext";

export const GET = async (req: NextRequest) => {
  const { clearCart } = useCart();

  try {
    const { searchParams } = req.nextUrl;
    const { Authority: authority, Status } = Object.fromEntries(
      searchParams.entries()
    );

    const checkout = await Checkout.findOne({ authority });
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
      return NextResponse.json(
        { message: "Payment not verified !!" },
        { status: 400 }
      );
    }

    await Checkout.deleteOne({
      _id: checkout._id,
    });
    clearCart();

    return NextResponse.json(
      { message: "Payment verified and order created successfully :))" },
      { status: 201 }
    );
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
