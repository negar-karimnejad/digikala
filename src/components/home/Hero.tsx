import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { hero } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          direction: "rtl",
        }}
        className="w-full group"
      >
        <CarouselContent>
          {hero.map((item) => (
            <CarouselItem
              key={item.title}
              className="cursor-pointer basis-full p-0"
            >
              <Link target="_blank" href={`/products/${item.title.replaceAll(" ", "+")}`}>
                <div className="w-full h-96">
                  <Image
                    src={item.cover}
                    width={4000}
                    height={4000}
                    alt={item.title}
                    title={item.title}
                    className="object-cover h-full w-full"
                  />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="group-hover:opacity-100 opacity-0 transition-all duration-300">
          <CarouselNext className="right-16 top-80 w-10 h-10" />
          <CarouselPrevious className="right-28 top-80 w-10 h-10" />
        </div>
      </Carousel>
    </div>
  );
}
