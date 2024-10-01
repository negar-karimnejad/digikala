"use client";

import { useCart } from "@/context/cartItemsContext";
import { CartItem } from "@/types/types";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartItemControls({ product }: { product: CartItem }) {
  const { decreaseCount, increaseCount, deleteFromCart } = useCart();

  return (
    <div className="border shadow flex items-center justify-between gap-5 rounded-md text-red-500 p-2">
      <button>
        <Plus onClick={() => increaseCount(product)} size={20} />
      </button>
      <span className="font-bold">{product.count}</span>
      <button>
        {product.count > 1 ? (
          <Minus onClick={() => decreaseCount(product)} size={20} />
        ) : (
          <Trash2
            onClick={() => deleteFromCart(product._id.toString())}
            size={16}
          />
        )}
      </button>
    </div>
  );
}
