"use client";

import { hero } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {
  return (
    <Swiper
      className="lg:h-96 relative mt-5 cursor-default category-swiper group"
      autoplay={{ delay: 5000 }}
      spaceBetween={0}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Navigation, Autoplay]}
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
      {hero.map((item) => (
        <SwiperSlide key={item.title}>
          <Link target="_blank" href={item.href}>
            <div className="w-full h-full">
              <Image
                src={item.cover}
                width={4000}
                height={4000}
                alt={item.title}
                title={item.title}
                className="w-full h-full object-cover object-[60%] max-lg:h-52"
              />
            </div>
          </Link>
        </SwiperSlide>
      ))}

      {/* Navigation buttons */}
      <div className="swiper-button-next bg-white rounded-full group-hover:opacity-100 opacity-0 transition-all duration-300 after:text-red-500 after:!text-sm after:!font-extrabold shadow-md !right-28 !top-80 !w-10 !h-10 !z-20"></div>
      <div className="swiper-button-prev bg-white rounded-full group-hover:opacity-100 opacity-0 transition-all duration-300 after:text-red-500 after:!text-sm after:!font-extrabold shadow-md !right-16 !top-80 !w-10 !h-10 !z-20"></div>
    </Swiper>
  );
}
