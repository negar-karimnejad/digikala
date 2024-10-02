"use client";

import { useCart } from "@/utils/cartItemsContext";
import { ReactNode } from "react";

export default function CartContainer({ children }: { children: ReactNode }) {
  const { cart } = useCart();
  return (
    <div
      className={`flex flex-col gap-5 lg:px-20 pt-5 ${
        cart.length > 0 ? "pb-36 lg:pb-16" : "lg:pb-16 pb-20"
      }`}
    >
      {children}
    </div>
  );
}
