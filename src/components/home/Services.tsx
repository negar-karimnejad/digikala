import { services } from "@/data/data";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export default function Services() {
  return (
    <div className="flex justify-between items-start my-8 lg:px-4 !mx-auto w-full">
      {services.map((service) => (
        <div
          key={service.title}
          className="max-lg:hidden flex flex-col w-full gap-2 justify-center items-center"
        >
          <Image
            alt={service.title}
            width={55}
            height={55}
            src={service.image}
          />
          <p className="text-center text-xs w-14 leading-6">{service.title}</p>
        </div>
      ))}
      <Carousel
        opts={{
          align: "start",
          direction: "rtl",
        }}
        className="w-full lg:hidden"
      >
        <CarouselContent>
          {services.map((service) => (
            <CarouselItem
              key={service.title}
              className="cursor-pointer lg:basis-28 basis-24 p-0 lg:mx-2"
            >
              <div
                key={service.title}
                className="flex flex-col w-full gap-2 justify-center items-center"
              >
                <Image
                  alt={service.title}
                  width={55}
                  height={55}
                  src={service.image}
                />
                <p className="text-center text-xs w-14 leading-6">
                  {service.title}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
