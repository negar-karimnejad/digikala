"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import OfferSkeleton from "../skeleton/OfferSkeleton";
import { Product, ProductImage } from "@/types/types";



interface ProductSliderProps {
  productImages: ProductImage[];
  product: Product;
}

export default function ProductSlider({
  product,
  productImages,
}: ProductSliderProps) {
  const loading = false;
  return (
    <div className="relative">
      <Swiper
        centeredSlides={true}
        pagination={{
          dynamicBullets: true,
          el: ".swiper-pagination",
        }}
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={0}
        className="cursor-default product-swiper"
      >
        {loading && (
          <>
            {Array.from({ length: 1 }).map((_, index) => (
              <SwiperSlide key={index}>
                <OfferSkeleton />
              </SwiperSlide>
            ))}
          </>
        )}
        {productImages?.map((image) => (
          <SwiperSlide
            key={image._id.toString()}
            className="!flex items-center py-5 justify-center w-full"
          >
            <Image
              alt={`Product Image ${image.productId}`}
              width={300}
              height={300}
              src={image.url}
              className="object-cover"
            />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}
