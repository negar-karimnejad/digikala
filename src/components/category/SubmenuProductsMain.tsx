"use client";

import { sortingMenuItems } from "@/data/data";
import { Category, Product, Submenu } from "@/types/types";
import {
  ArrowDownWideNarrow,
  ChevronDown,
  SlidersHorizontal,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import SubmenuProducts from "./SubmenuProducts";
import SubmenuProductsSidebar from "./SubmenuProductsSidebar";

export default function SubmenuProductsMain({
  category,
  submenu,
  products,
}: {
  category: Category;
  submenu: Submenu;
  products: Product[];
}) {
  const [sortingModal, setSortingModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [sortingMenu, setSortingMenu] = useState("relevant");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const closeSortingModalHandler = () => setSortingModal(false);
  const closeFilterModalHandler = () => setFilterModal(false);

  const maxPrice = roundUpToCeil(
    products.reduce((prev, current) => {
      return prev.price > current.price ? prev : current;
    }, products[0])?.price
  );

  const [priceRange, setPriceRange] = useState({ min: 0, max: maxPrice });

  function roundUpToCeil(value: number): number {
    return Math.ceil(value / 1000000) * 1000000;
  }

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );
    setFilteredProducts(filtered);
  }, [priceRange, products]);

  useEffect(() => {
    // Disable body scroll when the modal is open
    if (sortingModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sortingModal]);

  return (
    <>
      <div className="col-span-3 max-lg:hidden border rounded-lg p-5">
        <SubmenuProductsSidebar
          category={category}
          submenu={submenu}
          maxPrice={maxPrice}
          setPriceRange={setPriceRange}
        />
      </div>

      <div className="sticky px-4 col-span-12 w-full top-20 right-0 z-10 border-b bg-white py-4 flex items-center gap-2">
        <button
          onClick={() => setSortingModal(true)}
          className="border rounded-full px-3 w-fit py-1.5 flex gap-2 items-center"
        >
          <ArrowDownWideNarrow size={15} />
          مرتبط‌ترین
        </button>
        <button
          onClick={() => setFilterModal(true)}
          className="border rounded-full px-3 w-fit py-1.5 flex gap-2 items-center"
        >
          <SlidersHorizontal size={15} />
          فیلتر
        </button>
        <button className="border rounded-full px-3 w-fit py-1.5 flex gap-2 items-center">
          محدوده قیمت
          <ChevronDown size={15} />
        </button>
      </div>

      <SubmenuProducts
        sortingMenu={sortingMenu}
        setSortingMenu={setSortingMenu}
        products={filteredProducts}
      />

      {/* Sorting Modal */}
      <div
        className={`fixed right-0 top-0 z-50 lg:hidden flex h-screen w-full cursor-default flex-col items-center bg-black/40 dark:bg-black/80 transition-all duration-500  ${
          sortingModal ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={closeSortingModalHandler}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`overflow-hidden fixed bottom-0 right-0 w-full rounded-lg bg-white px-5 pb-5 pt-0 shadow transition-all duration-500 dark:text-white
           ${sortingModal ? "translate-y-0" : "translate-y-96"}`}
        >
          <button className="relative w-full">
            <X
              onClick={closeSortingModalHandler}
              className="absolute left-0 top-0"
            />
          </button>
          <div className="grow whitespace-nowrap dark:text-neutral-100 text-neutral-800 text-body2-strong">
            <p className="mb-5">مرتب سازی براساس:</p>
          </div>
          <div className="flex flex-col">
            {sortingMenuItems.map((item, index) => (
              <Link
                href={`?sort=${item.label}`}
                shallow
                key={index}
                onClick={() => {
                  closeSortingModalHandler(), setSortingMenu(item.label);
                }}
                className={`border-b py-5 cursor-pointer whitespace-nowrap text-body-2 text-neutral-500 dark:text-neutral-300 ${
                  sortingMenu === item.label
                    ? "text-red-500 dark:text-red-500"
                    : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Modal */}
      <div
        className={`fixed right-0 top-0 z-50 lg:hidden flex h-screen w-full cursor-default flex-col items-center bg-black/40 dark:bg-black/80 transition-all duration-500  ${
          filterModal ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={closeFilterModalHandler}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`overflow-hidden fixed bottom-0 right-0 w-full rounded-lg bg-white px-5 pb-5 pt-0 shadow transition-all duration-500 dark:text-white
           ${filterModal ? "translate-y-0" : "translate-y-96"}`}
        >
          <button className="relative w-full">
            <X
              size={17}
              onClick={closeFilterModalHandler}
              className="absolute -left-2 -top-2"
            />
          </button>
          <SubmenuProductsSidebar
            category={category}
            submenu={submenu}
            maxPrice={maxPrice}
            setPriceRange={setPriceRange}
          />
        </div>
      </div>
    </>
  );
}
