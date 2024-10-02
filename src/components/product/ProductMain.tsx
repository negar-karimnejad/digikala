"use client";

import { Product } from "@/utils/types";
import { useEffect, useRef } from "react";
import FooterFaq from "../footer/FooterFaq";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductSeller from "./ProductSeller";
import ProductTab from "./ProductTab";

export default function ProductMain({ product }: { product: Product }) {
  const featureRef = useRef<HTMLDivElement>(null);

  // Local Storage Functions
  const addRecentView = (productId) => {
    const existingViews = JSON.parse(localStorage.getItem("recentViews")) || [];
    const updatedViews = [
      productId,
      ...existingViews.filter((id) => id !== productId),
    ].slice(0, 10);
    localStorage.setItem("recentViews", JSON.stringify(updatedViews));
  };

  // Use effect to add product to recent views
  useEffect(() => {
    addRecentView(product._id);
  }, [product._id]);

  return (
    <>
      <div className="grid grid-cols-12 gap-5">
        <ProductImage product={product} />
        <ProductInfo product={product} featureRef={featureRef} />
        <ProductSeller product={product} />
      </div>
      <div className="border-b-4 grayscale opacity-70">
        <hr />
        <FooterFaq featureRef={featureRef} />
      </div>
      <ProductTab product={product} />
    </>
  );
}
