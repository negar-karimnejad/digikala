import { Image as productImage } from "@prisma/client";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  image: productImage[];
  isOpen: number;
  closeModal: () => void;
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    if (swiperInstance && isOpen >= 0) {
      swiperInstance.slideTo(isOpen);
    }
  }, [isOpen, swiperInstance]);
  console.log(thumbsSwiper);

  return (
    <div
      className={`fixed right-0 top-0 z-50 h-full w-full cursor-default flex-col items-center bg-neutral-950 transition-all duration-500 max-sm:px-5 ${
        isOpen >= 0 ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={closeModal}
    >
      <button
        className="absolute w-5 h-5 top-5 left-8 font-vazirMedium text-3xl text-white"
        onClick={closeModal}
      >
        &times;
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`h-full w-screen transition-all ${
          isOpen >= 0 ? "scale-100" : "scale-0"
        }`}
      >
        <Swiper
          onSwiper={(swiper) => setSwiperInstance(swiper)}
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
          className="cursor-pointer relative mt-20 w-96 h-96 mx-auto flex items-center rounded-lg justify-between bg-white overflow-hidden"
        >
          {/* Swiper Navigation Buttons */}
          <div className="fullSizeImage-swiper-button-next absolute top-44 z-40 left-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow shadow-neutral-700/50 transition-all">
            <ChevronLeft size={22} className="text-neutral-700" />
          </div>
          <div className="fullSizeImage-swiper-button-prev absolute top-44 z-40 flex right-2 h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow shadow-neutral-700/50 transition-all">
            <ChevronRight size={22} className="text-neutral-700" />
          </div>

          {/* Swiper Thumbs */}
          {image.map((img, index) => (
            <SwiperSlide
              key={index}
              className="items-center w-full h-full justify-center m-auto"
            >
              <Image
                width={350}
                height={350}
                src={img.url}
                className="w-full h-full rounded-xl object-cover"
                alt="Product Image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={0}
          slidesPerView={18}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="min-w-96 bg-neutral-950 !mx-5 mt-10 mb-5 flex rounded-lg justify-between overflow-hidden"
        >
          {image.map((img, index) => (
            <SwiperSlide key={img.id}>
              <Image
                width={120}
                height={120}
                src={img.url}
                className={`cursor-pointer object-cover bg-white ${
                  thumbsSwiper ? "" : ""
                } ${image.length === index + 1 ? "rounded-l-lg" : ""}`}
                alt="Product Image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default FullSizeImage;
