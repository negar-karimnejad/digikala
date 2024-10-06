"use client";

import { Product } from "@/utils/types";
import { Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Bestseller({
  title,
  products,
}: {
  title: string;
  products: Product[];
}) {
  const bestSellerProducts = products
    .slice()
    .sort((a, b) => b.recommended_percent - a.recommended_percent);

  const trendProducts = products.slice().sort((a, b) => {
    const aTimestamp = parseInt(a._id.toString().substring(0, 8), 16) * 1000;
    const bTimestamp = parseInt(b._id.toString().substring(0, 8), 16) * 1000;
    return bTimestamp - aTimestamp;
  });

  return (
    <div className="border rounded-xl my-5 p-5 mx-3">
      {title.includes("پرفروش") ? (
        <div className="flex justify-between items-center">
          <div></div>
          <h2 className="text-center flex items-center justify-center gap-2 text-xl font-irsansb my-2">
            <Flame className="text-orange-400" />
            <span>{title}</span>
          </h2>
          <button className="text-sm text-sky-500">
            <Link href="/best-selling">مشاهده همه</Link>
          </button>
        </div>
      ) : (
        <h2 className="text-center flex items-center justify-center gap-2 text-xl font-irsansb my-2">
          <Flame className="text-orange-400" />
          <span>{title}</span>
        </h2>
      )}
      <Swiper
        className="mt-10"
        spaceBetween={250}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {/* {loading && (
          <>
            {Array.from({ length: 6 }).map((_, index) => (
              <SwiperSlide key={index}>
                <OfferSkeleton />
              </SwiperSlide>
            ))}
          </>
        )} */}
        {title.includes("پرفروش")
          ? bestSellerProducts

              ?.slice(0, 6)
              .map((product: Product, index: number) => (
                <SwiperSlide key={index} className="flex flex-col gap-5">
                  <SwiperLink product={product} index={index} />
                </SwiperSlide>
              ))
          : trendProducts
              ?.slice(0, 6)
              .map((product: Product, index: number) => (
                <SwiperSlide key={index} className="flex flex-col gap-5">
                  <SwiperLink product={product} index={index} />
                </SwiperSlide>
              ))}
      </Swiper>
      <Swiper
        className="mt-10"
        spaceBetween={250}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {title.includes("پرفروش")
          ? bestSellerProducts

              ?.slice(6, 12)
              .map((product: Product, index: number) => (
                <SwiperSlide key={index} className="flex flex-col gap-5">
                  <SwiperLink product={product} index={index + 6} />
                </SwiperSlide>
              ))
          : trendProducts
              ?.slice(6, 12)
              .map((product: Product, index: number) => (
                <SwiperSlide key={index} className="flex flex-col gap-5">
                  <SwiperLink product={product} index={index + 6} />
                </SwiperSlide>
              ))}
      </Swiper>
      <Swiper
        className="mt-10"
        spaceBetween={250}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {title.includes("پرفروش")
          ? bestSellerProducts

              ?.slice(12, 18)
              .map((product: Product, index: number) => (
                <SwiperSlide key={index} className="flex flex-col gap-5">
                  <SwiperLink product={product} index={index + 12} />
                </SwiperSlide>
              ))
          : trendProducts
              ?.slice(12, 18)
              .map((product: Product, index: number) => (
                <SwiperSlide key={index} className="flex flex-col gap-5">
                  <SwiperLink product={product} index={index + 12} />
                </SwiperSlide>
              ))}
      </Swiper>
    </div>
  );
}

const SwiperLink = ({
  product,
  index,
}: {
  product: Product;
  index: number;
}) => {
  return (
    <Link href={`/products/${product._id}`} className="flex items-center gap-4">
      <Image
        alt={product.title}
        width={100}
        height={100}
        src={product.thumbnail}
      />
      <div className="flex items-center gap-4">
        <p className="text-sky-500 text-2xl font-bold">{index + 1}</p>
        <p className="text-xs leading-6 h-20 border-b pb-7 text-gray-500 dark:text-gray-200">
          {product.title?.slice(0, 50)}
          {product.title?.length > 50 ? "..." : ""}
        </p>
      </div>
    </Link>
  );
};
