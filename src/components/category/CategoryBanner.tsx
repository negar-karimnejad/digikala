import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Category } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export default function CategoryBanner({ category }: { category: Category }) {
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
          {category.banner?.map((item, index) => (
            <CarouselItem key={index} className="cursor-pointer basis-full p-0">
              <Link target="_blank" href="">
                <div className="w-full h-full">
                  <Image
                    src={item}
                    width={4000}
                    height={4000}
                    alt={`PIC ${index + 1}`}
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
