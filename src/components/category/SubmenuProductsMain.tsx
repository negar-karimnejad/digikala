"use client";

import { Category, Product, Submenu } from "@/types/types";
import { useEffect, useState } from "react";
import SubmenuProducts from "./SubmenuProducts";
import SubmenuProductsSidebar from "./SubmenuProductsSidebar";

export default function SubmenuProductsMain({
  category,
  submenu,
  products,
}: {
  category: Category;
  submenu: Submenu;
  products: Product[];
}) {
  function roundUpToCeil(value: number): number {
    return Math.ceil(value / 1000000) * 1000000;
  }

  const maxPrice = roundUpToCeil(
    products.reduce((prev, current) => {
      return prev.price > current.price ? prev : current;
    }, products[0])?.price
  );

  const [priceRange, setPriceRange] = useState({ min: 0, max: maxPrice });
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );
    setFilteredProducts(filtered);
  }, [priceRange, products]);

  return (
    <>
      <SubmenuProductsSidebar
        category={category}
        submenu={submenu}
        maxPrice={maxPrice}
        setPriceRange={setPriceRange}
      />
      <SubmenuProducts products={filteredProducts} />
    </>
  );
}
