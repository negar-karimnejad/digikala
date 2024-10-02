"use client";

import { Product } from "@/utils/types";
import ProductCard from "./ProductCard";
import SortingMenu from "./SortingMenu";

export default function SubmenuProducts({
  products,
  sortingMenu,
  setSortingMenu,
  searchParams,
}: {
  products: Product[];
  sortingMenu: string;
  setSortingMenu;
  searchParams?;
}) {
  const sortedProducts = () => {
    switch (sortingMenu) {
      case "cheapest":
        return products
          .slice()
          .sort((a, b) => a.discount_price - b.discount_price);
      case "expensive":
        return products
          .slice()
          .sort((a, b) => b.discount_price - a.discount_price);
      case "visited":
        return products.slice().sort((a, b) => b.likes - a.likes);
      case "newest":
        return products.slice().sort((a, b) => {
          const aTimestamp =
            parseInt(a._id.toString().substring(0, 8), 16) * 1000;
          const bTimestamp =
            parseInt(b._id.toString().substring(0, 8), 16) * 1000;
          return bTimestamp - aTimestamp;
        });
      case "bestseller":
        return products.slice().sort((a, b) => b.rating - a.rating);
      default:
        return products;
    }
  };

  return (
    <>
      <div className="col-span-9 max-lg:col-span-12 px-4">
        <div>
          <div>
            <div className="flex items-center border-complete-b-200 gap-4 sticky top-20 bg-neutral-000 lg:static">
              <div className="flex max-lg:flex-col justify-between lg:items-center grow text-sm">
                <SortingMenu
                  sortingMenu={sortingMenu}
                  setSortingMenu={setSortingMenu}
                  searchParams={searchParams}
                />

                <div className="max-lg:w-full text-neutral-500 justify-between dark:text-neutral-300 whitespace-nowrap text-xs ellispis-1 flex items-center gap-2">
                  <p className="lg:hidden">همه کالاها</p>
                  {products.length.toLocaleString()} کالا
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 mt-3">
          {sortedProducts().length > 0 ? (
            sortedProducts().map((product) => (
              <div
                key={product._id.toString()}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div className="col-span-12 text-neutral-500 border-t p-5">
              هیچ محصولی برای نمایش وجود ندارد.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
