import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
// import { Room } from "../../redux/store/room";
import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

function FullSizeImage({
  room,
  isOpen,
  closeModal,
}: {
  room: Room;
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

  return (
    <div
      className={`fixed right-0 top-0 z-50 flex h-full w-full cursor-default flex-col items-center overflow-y-auto bg-neutral-800/95 backdrop-blur-sm transition-all duration-500 max-sm:px-5 ${
        isOpen >= 0 ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={closeModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex h-full w-screen justify-center  pt-10 transition-all ${
          isOpen >= 0 ? "scale-100" : "scale-0"
        }`}
      >
        <Button
          className="absolute w-5 h-5 top-2 left-8 font-vazirMedium text-5xl text-white"
          onClick={closeModal}
        >
          &times;
        </Button>
        <div className="container my-5 h-[450px] cursor-pointer gap-2">
          <Swiper
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            spaceBetween={250}
            noSwipingClass="swiper-slide"
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs, Navigation]}
            centeredSlides={true}
            navigation={{
              nextEl: ".fullSizeImage-swiper-button-next",
              prevEl: ".fullSizeImage-swiper-button-prev",
            }}
          >
            {room.images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center !overflow-visible"
              >
                <Image
                  fill
                  src={image}
                  className="h-[27rem] w-[700px] rounded-xl object-cover"
                  alt={room.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={0}
            slidesPerView={9}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="fullSizeImageSwiper mt-3 rounded-md bg-neutral-900/90 p-2"
          >
            {room.images.map((image, index) => (
              <SwiperSlide key={index} className="">
                <Image
                  loading="lazy"
                  fill
                  src={image}
                  className="h-20 w-28 rounded-md border-2 border-black object-cover object-top"
                  alt={room.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="fullSizeImage-swiper-button-prev absolute bottom-0 right-5 top-0 z-40 m-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-neutral-950/90 shadow-md shadow-black/40 transition-all">
            <ChevronRight
              size={22}
              className="hover:text-gary-950 text-neutral-300 hover:text-white"
            />
          </div>
          <div className="fullSizeImage-swiper-button-next absolute bottom-0 left-5 top-0 z-40 m-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-neutral-950/90 shadow-md shadow-black/40 transition-all">
            <ChevronLeft
              size={22}
              className="hover:text-gary-950 text-neutral-300 hover:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullSizeImage;
