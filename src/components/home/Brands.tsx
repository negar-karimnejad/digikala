import { brands } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function Brands() {
  return (
    <div className="mx-3 my-10 lg:border rounded-xl p-5">
      <div className="w-full">
        <h2 className="text-center flex items-center justify-center gap-2 text-xl font-irsansb my-2">
          <Image alt="" width={20} height={20} src={"/star.png"} />
          <span>محبوب‌ترین برندها</span>
        </h2>
        <Carousel
          opts={{
            align: "start",
            direction: "rtl",
          }}
          className="w-full mt-10"
        >
          <CarouselContent>
            {brands.map((brand) => (
              <CarouselItem
                key={brand.id}
                className="flex items-center justify-center cursor-pointer basis-40 mx-2 px-1 border-l"
              >
                <Link href={brand.href}>
                  <Image
                    src={brand.logo}
                    width={80}
                    height={80}
                    alt="Brand"
                    className="object-cover"
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="right-0 top-10 w-10 h-10" />
          <CarouselPrevious className="left-0 top-10 w-10 h-10" />
        </Carousel>
      </div>
    </div>
  );
}
