"use client";

import { Category } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CategoryHero({ category }: { category: Category }) {
  if (category.hero == null) return null;

  return (
    <div className="relative my-5 px-4 rounded-2xl">
      <Swiper
        className="cursor-default category-swiper lg:h-96 rounded-2xl"
        autoplay={{ delay: 3000 }}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
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

        {category.hero?.map((item, index: number) => (
          <SwiperSlide key={index}>
            <Link href="">
              <Image
                alt={`Banner ${index + 1}`}
                width={1700}
                height={1700}
                src={item}
                className="rounded-lg w-full h-full object-cover object-[60%] max-lg:h-52"
              />
            </Link>
          </SwiperSlide>
        ))}
        {/* Pagination element */}
        <div className="swiper-pagination"></div>

        {/* Navigation buttons */}
        <div className="swiper-button-next bg-white rounded-r-full after:text-red-500 after:!text-sm after:!font-extrabold shadow-md !left-0 !w-12 !h-12"></div>
        <div className="swiper-button-prev bg-white rounded-l-full after:text-red-500 after:!text-sm after:!font-extrabold shadow-md !right-0 !w-12 !h-12"></div>
      </Swiper>
    </div>
  );
}
