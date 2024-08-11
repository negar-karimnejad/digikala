"use client";

import useProduct from "@/hooks/useProduct";
import Image from "next/image";
import { useState } from "react";
import FullSizeImage from "./FullSizeImage";
import ProductSlider from "./ProductSlider";

export default function ProductImage({ productId }: { productId: number }) {
  const [isOpen, setIsOpen] = useState(-1);

  const { product } = useProduct(productId);

  const closeModal = () => {
    setIsOpen(-1);
  };

  if (!product) return null;

  return (
    <div className="w-full col-span-4 max-lg:col-span-12 justify-center items-center">
      <div className="max-lg:hidden">
        <Image
          alt={product.title}
          width={420}
          height={420}
          src={product.thumbnail}
          className="object-cover"
        />
        <div className="flex items-center justify-between gap-2">
          {product.image.slice(0, 5).map((img, index) => (
            <div
              key={img.id}
              onClick={() => setIsOpen(img.id)}
              className="cursor-pointer relative border rounded-lg overflow-hidden"
            >
              <div
                className={`${
                  index === 4
                    ? "absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    : "hidden"
                }`}
              >
                <div className="flex">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <span
                      key={index}
                      className="text-3xl text-neutral-700 rounded-full"
                    >
                      .
                    </span>
                  ))}
                </div>
              </div>
              <Image
                alt={`Product Image ${img.id}`}
                src={img.url}
                width={75}
                height={75}
                className={`${index === 4 ? " blur-sm" : ""}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden w-full">
        <ProductSlider product={product} productImages={product.image} />
      </div>
      <div>
        <FullSizeImage
          image={product.image}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
}
