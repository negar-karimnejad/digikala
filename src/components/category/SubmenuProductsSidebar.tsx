"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Category, Submenu } from "@/types/types";
import Link from "next/link";
import { useState } from "react";
import PriceSlider from "./PriceSlider";

export default function SubmenuProductsSidebar({
  category,
  submenu,
}: {
  category: Category;
  submenu: Submenu;
}) {
  const [activeSubmenu, setActiveSubmenu] = useState(submenu.title);

  return (
    <div className="col-span-3 border rounded-lg p-5">
      <h3 className="text-neutral-700 text-xl mb-5 font-irsansb">فیلترها</h3>
      <Accordion type="single" collapsible className="w-full">
        {/* Category AccordionItem */}
        <AccordionItem value="item-1">
          <AccordionTrigger>دسته‌بندی</AccordionTrigger>
          {category.submenus.map((submenu) => (
            <AccordionContent key={submenu._id.toString()}>
              <Link
                href={submenu.href}
                onClick={() => setActiveSubmenu(submenu.title)}
                className={`mr-3 text-sm flex items-center gap-2 ${
                  activeSubmenu === submenu.title
                    ? "text-red-500"
                    : "text-neutral-500"
                }`}
              >
                <span
                  className={`w-1 h-1  rounded-full ${
                    activeSubmenu === submenu.title
                      ? "bg-red-500"
                      : "bg-neutral-500"
                  }`}
                ></span>
                {submenu.title}
              </Link>
            </AccordionContent>
          ))}
        </AccordionItem>

        {/* Price Range AccordionItem */}
        <AccordionItem value="item-2">
          <AccordionTrigger>محدوده قیمت</AccordionTrigger>
          <AccordionContent>
            <PriceSlider />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>فقط کالاهای موجود</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            فقط کالاهای موجود در انبار دیجی‌کالا
          </AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
