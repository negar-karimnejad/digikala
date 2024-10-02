"use client";

import { ProductImage } from "@/utils/types";
import { ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

function FullSizeImage({
  image,
  isOpen,
  closeModal,
}: {
  image: ProductImage[];
  isOpen: string;
  closeModal: () => void;
}) {
  const [showAllImages, setShowAllImages] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );

  const handleToggleImages = () => {
    setShowAllImages((prev) => !prev);
  };

  // Determine the initial slide index based on the `isOpen` prop
  const initialSlideIndex = image.findIndex(
    (img) => img._id.toString() === isOpen
  );

  useEffect(() => {
    if (swiperInstance && initialSlideIndex >= 0) {
      swiperInstance.slideTo(initialSlideIndex);
    }
  }, [initialSlideIndex, swiperInstance]);

  return (
    <div
      className={`fixed right-0 top-0 z-50 h-full w-full cursor-default flex-col items-center bg-neutral-950 transition-all duration-500 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={closeModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`h-full flex flex-col justify-between pb-5 w-screen transition-all ${
          isOpen ? "scale-100" : "scale-0"
        }`}
      >
        <button
          className="absolute w-5 h-5 top-5 left-8 font-vazirMedium text-3xl text-white"
          onClick={closeModal}
        >
          &times;
        </button>

        <Swiper
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            if (initialSlideIndex >= 0) {
              swiper.slideTo(initialSlideIndex);
            }
          }}
          slidesPerView={1}
          noSwipingClass="swiper-slide"
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs, Navigation]}
          centeredSlides={true}
          allowTouchMove={true}
          navigation={{
            nextEl: ".fullSizeImage-swiper-button-next",
            prevEl: ".fullSizeImage-swiper-button-prev",
          }}
          className="cursor-pointer relative mt-20 md:w-96 w-full h-96 mx-auto flex items-center rounded-lg justify-between bg-white overflow-hidden"
        >
          {/* Swiper Navigation Buttons */}
          <div className="max-lg:hidden fullSizeImage-swiper-button-next absolute top-44 z-40 left-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow shadow-neutral-700/50 transition-all">
            <ChevronLeft size={22} className="text-neutral-700" />
          </div>
          <div className="max-lg:hidden fullSizeImage-swiper-button-prev absolute top-44 z-40 flex right-2 h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow shadow-neutral-700/50 transition-all">
            <ChevronRight size={22} className="text-neutral-700" />
          </div>

          {image.map((img, index) => (
            <SwiperSlide
              key={index}
              className="items-center w-full h-full justify-center m-auto"
            >
              <Image
                width={500}
                height={500}
                src={img.url}
                className="w-full h-full rounded-xl object-cover"
                alt="Product Image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center mx-5">
          <div
            onClick={() => setShowAllImages(true)}
            className="cursor-pointer w-16 text-center font-irsansb text-xs text-white border rounded-lg p-2 !ml-5 h-full"
          >
            <LayoutGrid size={20} className="mx-auto mb-2" />
            <span>همه تصاویر</span>
          </div>

          {/* Swiper Thumbs */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={0}
            freeMode={true}
            breakpoints={{
              0: {
                slidesPerView: 6,
              },
              800: {
                slidesPerView: 8,
              },
              1024: {
                slidesPerView: 18,
              },
            }}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper relative h-20 flex-1 bg-neutral-950"
          >
            <div className="!mx-10">
              {image.map((img, index) => (
                <SwiperSlide key={img._id.toString()}>
                  <Image
                    width={150}
                    height={150}
                    src={img.url}
                    className={`cursor-pointer !w-full !px-1 h-full object-cover bg-white ${
                      image.length === index + 1 ? "rounded-l-lg" : ""
                    }${index === 0 ? "rounded-r-lg" : ""}
                
                `}
                    alt="Product Image"
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>

        {/* All Images Section */}
        {showAllImages && (
          <div className="bg-white dark:bg-black absolute top-0 right-0 w-full h-screen z-50">
            <div className="flex justify-end w-full">
              <button
                className="w-5 h-5 font-vazirMedium text-3xl mt-5 ml-8"
                onClick={handleToggleImages}
              >
                &times;
              </button>
            </div>
            <div className="h-screen overflow-y-scroll mt-10 p-5  mx-auto max-w-5xl">
              <div className="grid grid-cols-12 justify-between gap-3 mb-28">
                <div className="flex col-span-12 mb-3 px-3 font-bold text-neutral-600 dark:text-neutral-200 items-center justify-between text-sm w-full">
                  <span>تصاویر رسمی</span>
                  <span>{image.length} مورد</span>
                </div>
                {image.map((img) => (
                  <Image
                    key={img._id.toString()}
                    alt="Product Image"
                    width={350}
                    height={350}
                    src={img.url}
                    className="lg:col-span-4 h-80 object-cover col-span-6 border rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FullSizeImage;
