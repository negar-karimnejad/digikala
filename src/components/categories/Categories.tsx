"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Category, Product, Submenu, SubmenuItem } from "@/utils/types";
import { ChevronDown, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Categories({
  categories,
  products,
}: {
  categories: Category[];
  products: Product[];
}) {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    categories?.find((category) => category.title === "موبایل") || null
  );

  const clickHandler = (categoryId: string) => {
    const category = categories.find(
      (category) => category._id.toString() === categoryId
    );
    if (category) {
      setSelectedCategory(category);
    }
  };

  // Mapping submenus to their first product's thumbnail
  const submenuProductImages = (item: SubmenuItem) => {
    const firstProduct = products.find(
      (product) => product.submenuItemId === item._id.toString()
    );
    return firstProduct.thumbnail || "";
  };

  // Redirect to home page if screen width exceeds lg size
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleResize = (e: MediaQueryListEvent) => {
      if (e.matches) {
        router.push("/");
      }
    };

    if (mediaQuery.matches) {
      router.push("/");
    }

    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [router]);

  return (
    <div className="pb-12 grid grid-cols-12 bg-white dark:bg-neutral-950 shadow-sm">
      <div className="sm:max-h-[30rem] max-h-[600px] overflow-y-auto categories_sidebar bg-neutral-100 border border-neutral-50 dark:border-neutral-600 dark:bg-neutral-800 sm:col-span-2 col-span-3">
        {categories.map((category) => (
          <div
            onClick={() => clickHandler(category._id.toString())}
            key={category._id.toString()}
          >
            <div
              className={`cursor-pointer transition-all py-3 px-1 border border-b border-b-neutral-200 dark:border-b-neutral-700 text-neutral-600 dark:text-neutral-100 flex flex-col text-center items-center gap-2 text-xs ${
                selectedCategory?._id === category._id
                  ? "text-red-500 bg-white dark:bg-neutral-900"
                  : ""
              }`}
            >
              <Image
                alt={category.title}
                width={18}
                height={18}
                src={category.icon}
                className="dark:invert"
              />
              {category.title}
            </div>
          </div>
        ))}
      </div>
      <div className="sm:col-span-10 col-span-9 p-4">
        <h2 className="text-sky-500 text-sm flex items-center gap-1">
          <Link
            href={selectedCategory?.href || "/"}
            className="flex items-center"
          >
            همه محصولات {selectedCategory?.title}
            <ChevronLeft size={15} />
          </Link>
        </h2>
        <div className="mt-5 flex flex-col">
          <Accordion
            type="single"
            collapsible
            className="w-full lg:hidden mb-5"
          >
            {selectedCategory?.submenus ? (
              selectedCategory?.submenus.map((menu: Submenu, index: number) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="hover:no-underline col-span-12 text-neutral-800 dark:text-neutral-100 text-xs font-irsansb">
                    {menu.title}
                    <ChevronDown className="h-4 w-4 text-neutral-600 dark:text-neutral-200 shrink-0 transition-transform duration-200" />
                  </AccordionTrigger>
                  <div className="grid grid-cols-3">
                    {menu.items?.map((item: SubmenuItem, index) => (
                      <AccordionContent
                        key={item.title}
                        className={`text-xs flex gap-2 items-center justify-center flex-col text-neutral-700 dark:text-neutral-300 ${
                          item.href === ""
                            ? "border border-neutral-100 dark:border-neutral-500 border-r-0 border-t-0 h-20 w-full flex items-center justify-center"
                            : ""
                        } ${(index + 1) % 3 === 0 ? "border-l-0 " : ""}
                            `}
                      >
                        <Link
                          href={item.href}
                          className="text-center flex flex-col items-center justify-center"
                        >
                          <div className="rounded-full w-16 flex items-center justify-center h-16 border dark:bg-white border-neutral-900">
                            <Image
                              alt={item.title}
                              width={60}
                              height={60}
                              src={submenuProductImages(item)}
                              className="object-cover rounded-full"
                            />
                          </div>
                          {item.title}
                        </Link>
                      </AccordionContent>
                    ))}
                  </div>
                </AccordionItem>
              ))
            ) : (
              <div className="col-span-12">
                <p className="text-neutral-500 text-sm mr-5 my-5">
                  محصولی برای{" "}
                  <span className="text-red-500 font-irsansb">
                    {selectedCategory?.title}
                  </span>{" "}
                  وجود ندارد.
                </p>
              </div>
            )}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
