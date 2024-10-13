"use client";

import { deleteOrder } from "@/app/admin/orders/action";
import { CartItem } from "@/utils/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type CartContextType = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  totalPrice: number;
  totalDiscountPrice: number;
  totalDiscount: number;
  decreaseCount: (product: CartItem) => void;
  increaseCount: (product: CartItem) => void;
  deleteFromCart: (productID: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscountPrice, setTotalDiscountPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  useEffect(() => {
    const discount = cart.reduce((total, item) => total + item.discount, 0);
    const price = cart.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
    const discountPrice = cart.reduce(
      (total, item) => total + item.discount_price * item.count,
      0
    );

    setTotalDiscount(discount);
    setTotalPrice(price);
    setTotalDiscountPrice(discountPrice);
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateLocalStorage = (items: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(items));
    setCart(items);
  };

  const decreaseCount = (product: CartItem) => {
    const updatedCartItems = cart.map((item) =>
      item._id === product._id && item.count > 1
        ? { ...item, count: item.count - 1 }
        : item
    );
    updateLocalStorage(updatedCartItems);
  };

  const increaseCount = (product: CartItem) => {
    const updatedCartItems = cart.map((item) =>
      item._id === product._id ? { ...item, count: item.count + 1 } : item
    );
    updateLocalStorage(updatedCartItems);
  };

  const deleteFromCart = (productID) => {
    deleteOrder(productID);
    const updatedCartItems = cart.filter((item) => item._id !== productID);
    updateLocalStorage(updatedCartItems);
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        totalPrice,
        totalDiscount,
        totalDiscountPrice,
        decreaseCount,
        increaseCount,
        deleteFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}

export { CartProvider, useCart };
