"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, Flame, SearchIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../ui/card";

const popularSearches = [
  "گوشی سامسونگ s22",
  "سرم پوست ویتامین c",
  "اسباب بازی لوازم آرایشی",
  "گوشی iphone 13 pro max",
  "چاقو زنجان",
];

export default function Searchbar({ placeholder }: { placeholder?: string }) {
  const [isShowSearchMenu, setIsShowSearchMenu] = useState(false);
  const searchRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef?.current?.contains(event.target as Node)
      ) {
        setIsShowSearchMenu(false);
      }
    };
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return (
    <label
      ref={searchRef}
      htmlFor="search"
      className="relative w-full h-12 flex items-center bg-gray-100 dark:bg-neutral-700 border-0 rounded-lg"
      onClick={() => setIsShowSearchMenu(true)}
    >
      <SearchIcon size={20} className="z-10 text-gray-400 mr-5" />
      <input
        type="text"
        id="search"
        autoComplete="false"
        placeholder={placeholder ? placeholder : "جستجو "}
        className="placeholder:text-sm z-10 border-0 h-full bg-transparent px-3 w-full outline-none"
      />

      {/* Search Menu */}
      <div
        className={`transition-all duration-700 ease-in-out absolute shadow top-0 border right-0 w-full bg-white rounded-lg p-4 ${
          isShowSearchMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="w-full bg-sky-500 h-[1px] mt-8"></div>
        <h2 className="flex items-center gap-4 my-4">
          <Flame className="text-gray-400" />
          <span className="text-[15px] font-irsansb text-gray-600">
            جستجوهای پرطرفدار
          </span>
        </h2>
        <Carousel
          opts={{
            align: "start",
            direction: "rtl",
          }}
          className="w-full"
        >
          <CarouselContent>
            {popularSearches.map((search) => (
              <CarouselItem
                key={search}
                className="cursor-pointer basis-1/3 p-0"
              >
                <div className="p-1">
                  <Card className="!rounded-full">
                    <CardContent className="rounded-full flex items-center justify-center p-2">
                      <Link
                        href={`/search/?q=${search.replaceAll(" ", "+")}`}
                        className="p-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsShowSearchMenu(false);
                        }}
                      >
                        <span className="flex text-sm font-irsansb text-gray-600 items-center gap-2 whitespace-nowrap">
                          {search}
                          <ChevronLeft size={15} />
                        </span>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="right-[30rem] -top-7 !opacity-100 !bg-white" />
          <CarouselPrevious className="-left-1 -top-7 !opacity-100 !bg-white" />
        </Carousel>
      </div>
    </label>
  );
}
