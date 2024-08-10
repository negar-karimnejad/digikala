"use client";

import FooterFaq from "../footer/FooterFaq";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductSeller from "./ProductSeller";
import ProductTab from "./ProductTab";

export default function ProductMain() {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 ">
        <ProductImage />
        <ProductInfo />
        <ProductSeller />
      </div>
      <hr />
      <div className="border-b-4 grayscale opacity-70">
        <FooterFaq />
      </div>
      <ProductTab />
    </>
  );
}
