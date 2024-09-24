"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/types/types";
import {
  ChevronLeft,
  Flame,
  MoveUpRight,
  Search,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../ui/card";
import SearchSkeleton from "./SearchSkeleton";
import { useRouter } from "next/navigation";

const popularSearches = [
  "گوشی سامسونگ s22",
  "سرم پوست ویتامین c",
  "اسباب بازی لوازم آرایشی",
  "گوشی iphone 13 pro max",
  "چاقو زنجان",
];

export default function SearchbarForm({
  placeholder,
  products,
}: {
  placeholder?: string;
  products: Product[];
}) {
  const [isShowSearchMenu, setIsShowSearchMenu] = useState(false);
  const searchRef = useRef<HTMLLabelElement>(null);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  useEffect(() => {
    if (!isShowSearchMenu) setSearch("");
    if (!search) setSearchResult([]);
  }, [isShowSearchMenu, search]);

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

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    setIsLoading(true);

    if (searchValue.length > 1) {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchResult(filteredProducts);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setSearchResult([]);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/search?q=${search}`);
        setIsShowSearchMenu(false);
      }}
      className="relative w-full h-12 bg-neutral-100 dark:bg-neutral-700 border-0 rounded-lg"
    >
      <label
        ref={searchRef}
        htmlFor="search"
        className="flex items-center h-full"
        onClick={() => setIsShowSearchMenu(true)}
      >
        <SearchIcon size={20} className="z-10 text-neutral-400 mr-5" />
        <input
          type="text"
          id="search"
          autoComplete="off"
          value={search}
          onChange={changeHandler}
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
          {searchResult.map((product) => (
            <div
              className="my-8 text-neutral-700 flex justify-between items-center"
              key={product.id}
              onClick={() => setIsShowSearchMenu(false)}
            >
              <Link href={`/products/${product._id}`} className="flex gap-5">
                <Search size={20} className="text-neutral-400" />
                {product.title.slice(0, 50)}...
              </Link>
              <MoveUpRight size={20} className="text-neutral-400" />
            </div>
          ))}

          {isLoading && (
            <>
              <SearchSkeleton />
              <SearchSkeleton />
              <SearchSkeleton />
            </>
          )}

          {searchResult.length > 0 && (
            <div className="my-5 w-full shadow bg-neutral-100 h-[1px]"></div>
          )}
          <h2 className="flex items-center gap-4 my-4">
            <Flame className="text-neutral-400" />
            <span className="text-[15px] font-irsansb text-neutral-600">
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
                  className="cursor-pointer basis-auto p-0"
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
                          <span className="flex text-sm font-irsansb text-neutral-600 items-center gap-2 whitespace-nowrap">
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
    </form>
  );
}
