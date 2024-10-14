"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Category, Product } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

export default function IncredibleOffersCategoriesSlider({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <Carousel
      opts={{
        align: "start",
        direction: "rtl",
      }}
      className="min-w-screen mr-4"
    >
      <CarouselContent>
        <CarouselItem className="text-center basis-28 rounded-sm bg-neutral-100 dark:!bg-transparent">
          <Image
            alt="incridble-offers-bag"
            width={90}
            height={90}
            src="/incredible-offers/bag.png"
          />
          <p className="text-xs my-3">همه دسته‌بندی‌ها</p>
        </CarouselItem>
        {categories?.map((category: Category) => (
          <CarouselItem key={category._id.toString()} className="basis-36">
            <Link
              href={category.href}
              className="flex items-center text-center justify-center flex-col"
            >
              <Image
                alt={category.title}
                width={90}
                height={90}
                src={category.cover[0]}
              />
              <p className="text-xs mt-3">{category.title}</p>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="transition-all !z-20 w-8 h-8 !hover:bg-rose-500 left-0 top-16 !opacity-100 !bg-white dark:!bg-neutral-900" />
      <CarouselNext className="transition-all !z-20 w-8 h-8 !hover:bg-rose-500 right-0 top-16 !opacity-100 !bg-white dark:!bg-neutral-900" />
    </Carousel>
  );
}
