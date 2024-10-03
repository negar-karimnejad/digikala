"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/utils/types";
import {
  ArrowRight,
  ChevronLeft,
  Flame,
  MoveUpRight,
  Search,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../ui/card";
import SearchSkeleton from "./SearchSkeleton";

export default function SearchbarForm({
  placeholder,
  products,
}: {
  placeholder?: string;
  products: Product[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Modal Open & Close Functions
  const closeModalHandler = () => setIsOpen(false);
  const openModalHandler = () => setIsOpen(true);

  return (
    <>
      <SearchForm
        openModalHandler={openModalHandler}
        placeholder={placeholder}
        products={products}
        isOpen={isOpen}
        closeModalHandler={closeModalHandler}
      />

      <div
        className={`fixed right-0 top-0 z-50 lg:hidden flex h-screen w-full cursor-default flex-col items-center bg-black/40 dark:bg-black/80 transition-all duration-500  ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={closeModalHandler}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed bottom-0 right-0 z-50 w-full h-full bg-white dark:bg-neutral-900 p-5 shadow transition-all duration-500 dark:text-white
           ${isOpen ? "translate-y-0" : "translate-y-96"}`}
        >
          <SearchForm
            openModalHandler={openModalHandler}
            placeholder={placeholder}
            products={products}
            isOpen={isOpen}
            closeModalHandler={closeModalHandler}
          />
        </div>
      </div>
    </>
  );
}

function SearchForm({
  placeholder,
  products,
  openModalHandler,
  closeModalHandler,
  isOpen,
}: {
  placeholder?: string;
  products: Product[];
  isOpen: boolean;
  openModalHandler: () => void;
  closeModalHandler: () => void;
}) {
  const [isShowSearchMenu, setIsShowSearchMenu] = useState(false);
  const searchRef = useRef<HTMLLabelElement>(null);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  useEffect(() => {
    // if (!isShowSearchMenu) setSearch("");
    if (!isOpen) setSearch("");
    if (!search) setSearchResult([]);
  }, [isOpen, isShowSearchMenu, search]);

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
        closeModalHandler();
      }}
      onClick={() => {
        openModalHandler();
        setIsShowSearchMenu(true);
      }}
      className="relative w-full h-12 border-0 max-lg:overflow-hidden"
    >
      <label
        ref={searchRef}
        htmlFor="search"
        className="lg:flex items-center w-full"
      >
        <div className="flex items-center w-full h-full bg-neutral-100 rounded-lg dark:bg-neutral-700">
          {isOpen ? (
            <ArrowRight
              onClick={(e) => {
                e.stopPropagation();
                closeModalHandler();
              }}
              size={20}
              className="z-10 text-neutral-500 mr-5  cursor-pointer"
            />
          ) : (
            <SearchIcon size={20} className="z-10 text-neutral-400 mr-5" />
          )}
          <input
            type="text"
            id="search"
            autoComplete="off"
            value={search}
            onChange={changeHandler}
            placeholder={placeholder ? placeholder : "جستجو "}
            className="placeholder:text-sm text-neutral-500 z-10 bg-transparent rounded-lg dark:bg-neutral-700 h-full p-3 w-2/3 outline-none"
          />
        </div>
        {/* Search Menu */}
        <div
          className={`overflow-y-auto overflow-x-hidden max-h-screen lg:absolute transition-all duration-700 ease-in-out lg:shadow top-0 lg:border right-0 w-full bg-white rounded-lg p-4 max-lg:pb-20
            ${isShowSearchMenu ? "opacity-100 visible" : "opacity-0 invisible"}
          `}
        >
          <div className="max-lg:hidden w-full bg-sky-500 h-[1px] mt-8"></div>
          {searchResult.map((product) => (
            <div
              className="my-5 text-neutral-700 flex justify-between items-center"
              key={product._id.toString()}
              onClick={(e) => {
                e.stopPropagation();
                closeModalHandler();
                setIsShowSearchMenu(false);
              }}
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
              {products.slice(0, 5).map((product) => (
                <CarouselItem
                  key={product._id.toString()}
                  className="cursor-pointer basis-auto p-0"
                >
                  <div className="p-1">
                    <Card className="!rounded-full">
                      <CardContent className="rounded-full flex items-center justify-center p-2">
                        <Link
                          href={`/products/${product._id}`}
                          className="p-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsShowSearchMenu(false);
                            closeModalHandler();
                          }}
                        >
                          <span className="flex text-sm font-irsansb text-neutral-600 items-center gap-2 whitespace-nowrap">
                            {product.title.slice(0, 11)} ...
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
