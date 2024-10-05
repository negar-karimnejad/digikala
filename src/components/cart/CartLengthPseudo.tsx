"use client";

import { useCart } from "@/utils/cartItemsContext";

export default function CartLengthPseudo({
  className,
}: {
  className?: string;
}) {
  const { cart } = useCart();
  return (
    <>
      {cart.length > 0 && (
        <span
          className={`flex items-center justify-center text-xs rounded-sm absolute w-4 h-3 bg-red-500 -bottom-1 -right-2 text-white ${className}`}
        >
          {cart.length}
        </span>
      )}
    </>
  );
}
