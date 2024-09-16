"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Category, Submenu } from "@/types/types";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Label } from "../ui/label";
import PriceSlider from "./PriceSlider";
import Switch from "../ui/switch";

export default function SubmenuProductsSidebar({
  category,
  submenu,
  maxPrice,
  setPriceRange,
}: {
  category: Category;
  submenu: Submenu;
  maxPrice: number;
  setPriceRange: (range: { min: number; max: number }) => void; // Add setPriceRange prop type
}) {
  const [activeSubmenu, setActiveSubmenu] = useState(submenu.title);

  const handleChange = (newState) => {
    console.log("Switch is now:", newState ? "On" : "Off");
  };

  return (
    <div className="col-span-3 border rounded-lg p-5">
      <h3 className="text-neutral-700 text-xl mb-5 font-irsansb">فیلترها</h3>
      <Accordion type="single" collapsible className="w-full">
        {/* Category AccordionItem */}
        <AccordionItem value="item-1">
          <AccordionTrigger>
            دسته‌بندی
            <ChevronDown className="h-4 w-4 text-neutral-600 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
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
          <AccordionTrigger>
            محدوده قیمت
            <ChevronDown className="h-4 w-4 text-neutral-600 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent>
            <PriceSlider
              min={0}
              max={maxPrice}
              onChange={({ min, max }) => setPriceRange({ min, max })}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <Label htmlFor="exist_store">فقط کالاهای موجود</Label>
            <Switch onChange={handleChange} />
          </AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <Label htmlFor="exist_digikala_store">
              فقط کالاهای موجود در انبار دیجی‌کالا
            </Label>
            <Switch onChange={handleChange} />
          </AccordionTrigger>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
