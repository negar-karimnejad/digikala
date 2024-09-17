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
import { useEffect, useState } from "react";
import { Label } from "../ui/label";
import Switch from "../ui/switch";
import PriceSlider from "./PriceSlider";

export default function SubmenuProductsSidebar({
  category,
  submenu,
  maxPrice,
  setPriceRange,
}: {
  category: Category;
  submenu: Submenu;
  maxPrice: number;
  setPriceRange: (range: { min: number; max: number }) => void;
}) {
  const [activeSubmenu, setActiveSubmenu] = useState(submenu.title);
  const [isPriceChanged, setIsPriceChanged] = useState(false);
  const [isSwitchChanged, setIsSwitchChanged] = useState(false);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(maxPrice);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isDigikalaSwitchOn, setIsDigikalaSwitchOn] = useState(false);

  const handleSwitchChange = (newState: boolean) => {
    setIsSwitchOn(newState);
    setIsSwitchChanged(true);
    console.log("Switch 1 is now:", newState ? "On" : "Off");
  };

  const handleDigikalaSwitchChange = (newState: boolean) => {
    setIsDigikalaSwitchOn(newState);
    setIsSwitchChanged(true);
    console.log("Switch 2 is now:", newState ? "On" : "Off");
  };

  const handleResetFilters = () => {
    setIsPriceChanged(false);
    setMinVal(0);
    setMaxVal(maxPrice);
    setPriceRange({ min: 0, max: maxPrice });
    setIsSwitchOn(false);
    setIsDigikalaSwitchOn(false);
  };

  // Get min and max values when their state changes
  useEffect(() => {
    setPriceRange({ min: minVal, max: maxVal });
    setIsPriceChanged(minVal !== 0 || maxVal !== maxPrice);
  }, [maxPrice, maxVal, minVal, setPriceRange]);

  return (
    <>
      <div className="flex items-center justify-between pb-10">
        <h3 className="text-neutral-700 dark:text-neutral-100 text-xl font-irsansb">
          فیلترها
        </h3>
        {(isPriceChanged || isSwitchChanged) && (
          <button onClick={handleResetFilters} className="text-xs text-sky-500">
            حذف فیلترها
          </button>
        )}
      </div>
      <Accordion type="single" collapsible className="w-full">
        {/* Category AccordionItem */}
        <AccordionItem value="item-1">
          <AccordionTrigger>
            دسته‌بندی
            <ChevronDown className="h-4 w-4 text-neutral-600 dark:text-neutral-200 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          {category.submenus.map((submenu) => (
            <AccordionContent key={submenu._id.toString()}>
              <Link
                href={submenu.href}
                onClick={() => setActiveSubmenu(submenu.title)}
                className={`mr-3 text-sm flex items-center gap-2 ${
                  activeSubmenu === submenu.title
                    ? "text-red-500"
                    : "text-neutral-500 dark:text-neutral-300"
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
            <ChevronDown className="dark:text-neutral-200 h-4 w-4 text-neutral-600 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent>
            <PriceSlider
              min={0}
              max={maxPrice}
              minVal={minVal}
              maxVal={maxVal}
              setMinVal={setMinVal}
              setMaxVal={setMaxVal}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <Label htmlFor="exist_store">فقط کالاهای موجود</Label>
            <Switch checked={isSwitchOn} onChange={handleSwitchChange} />
          </AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <Label htmlFor="exist_digikala_store">
              فقط کالاهای موجود در انبار دیجی‌کالا
            </Label>
            <Switch
              checked={isDigikalaSwitchOn}
              onChange={handleDigikalaSwitchChange}
            />
          </AccordionTrigger>
        </AccordionItem>
      </Accordion>
    </>
  );
}
