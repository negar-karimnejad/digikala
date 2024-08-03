"use client";

import useProducts from "@/hooks/useProducts";
import React from "react";

export default function ProductsPage() {
  const { products } = useProducts();

  console.log("products", products);

  return <div>ProductsPage</div>;
}
