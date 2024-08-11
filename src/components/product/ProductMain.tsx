"use client";

import { useRef } from "react";
import FooterFaq from "../footer/FooterFaq";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductSeller from "./ProductSeller";
import ProductTab from "./ProductTab";

export default function ProductMain({ productId }: { productId: number }) {
  const featureRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="grid grid-cols-12 gap-5 ">
        <ProductImage productId={productId} />
        <ProductInfo productId={productId} featureRef={featureRef} />
        <ProductSeller productId={productId} />
      </div>
      <div className="border-b-4 grayscale opacity-70">
        <hr />
        <FooterFaq featureRef={featureRef} />
      </div>
      <ProductTab productId={productId} />
    </>
  );
}
