"use client";

import Image from "next/image";
import { useState } from "react";
import FullSizeImage from "./FullSizeImage";
import ProductSlider from "./ProductSlider";
import { Product } from "@/types/types";

export default function ProductImage({ product }: { product: Product }) {
  const [isOpen, setIsOpen] = useState("");

  const closeModal = () => {
    setIsOpen("");
  };

  if (!product) return null;

  return (
    <div className="w-full col-span-4 max-lg:col-span-12 justify-center items-center">
      <div className="max-lg:hidden overflow-hidden w-full">
        <Image
          alt={product.title}
          width={420}
          height={420}
          src={product.thumbnail}
          className="object-cover mb-5 rounded-lg w-full"
        />
        <div className="flex items-center gap-2">
          {product.images
            ?.slice(0, product.images.length > 5 ? 5 : product.images.length)
            .map((img, index) => (
              <div
                key={img._id.toString()}
                onClick={() => setIsOpen(img._id.toString())}
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
                  alt={`Product Image ${img._id}`}
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
        <ProductSlider product={product} productImages={product.images} />
      </div>
      <div>
        <FullSizeImage
          image={product.images}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
}
