"use client";

import { Category } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CategoriesPage({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div className="lg:mx-3 my-12 group relative">
      <div className="w-full">
        <h2 className="text-center text-xl font-irsansb my-2">
          خرید بر اساس دسته‌بندی
        </h2>
        <div className="relative">
          <Swiper
            className="mt-10"
            spaceBetween={250}
            breakpoints={{
              0: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              500: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3.3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 8,
                spaceBetween: 20,
              },
            }}
          >
            {categories?.slice(0, 8).map((category) => (
              <SwiperSlide
                key={category._id.toString()}
                className="flex flex-col gap-5"
              >
                <Link
                  href={category.href}
                  className="flex items-center flex-col"
                >
                  <Image
                    alt={category.title}
                    width={100}
                    height={100}
                    src={category.cover[0]}
                  />
                  <p className="text-xs font-irsansb">{category.title}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            className="mt-10"
            spaceBetween={250}
            breakpoints={{
              0: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              500: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3.3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 8,
                spaceBetween: 20,
              },
            }}
          >
            {categories?.slice(8, 16).map((category) => (
              <SwiperSlide
                key={category._id.toString()}
                className="flex flex-col gap-5"
              >
                <Link
                  href={category.href}
                  className="flex items-center flex-col"
                >
                  <Image
                    alt={category.title}
                    width={100}
                    height={100}
                    src={category.cover[0]}
                  />
                  <p className="text-xs font-irsansb">{category.title}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
