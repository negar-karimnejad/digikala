import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { hero } from "@/data/data";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          direction: "rtl",
        }}
        className="w-full"
      >
        <CarouselContent>
          {hero.map((image, index) => (
            <CarouselItem key={index} className="cursor-pointer p-0 basis-full">
              <div className="p-2">
                <div className="w-full h-full">
                  <Image
                    src={image}
                    width={2000}
                    height={2000}
                    alt="Hero Image"
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="right-3 bottom-0 !opacity-100 !bg-white w-10 h-10" />
        <CarouselPrevious className="right-3 bottom-0 !opacity-100 !bg-white w-10 h-10" />
      </Carousel>
    </div>
  );
}
