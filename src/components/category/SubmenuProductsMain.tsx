"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sortingMenuItems } from "@/data/data";
import { Category, Product, Submenu } from "@/utils/types";
import {
  ArrowDownWideNarrow,
  ChevronDown,
  SlidersHorizontal,
  X,
} from "lucide-react";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { Label } from "../ui/label";
import Switch from "../ui/switch";
import PriceSlider from "./PriceSlider";
import SubmenuProducts from "./SubmenuProducts";

export default function SubmenuProductsMain({
  category,
  submenu,
  products,
  searchParams,
}: {
  category: Category;
  submenu: Submenu;
  products: Product[];
  searchParams?;
}) {
  // Get Products Max Price
  function roundUpToCeil(value: number): number {
    return Math.ceil(value / 1000000) * 1000000;
  }
  const maxPrice = roundUpToCeil(
    products.reduce((prev, current) => {
      return prev.price > current.price ? prev : current;
    }, products[0])?.price
  );

  const [activeSubmenu, setActiveSubmenu] = useState(submenu.title);
  const [isPriceChanged, setIsPriceChanged] = useState(false);
  const [isSwitchChanged, setIsSwitchChanged] = useState(false);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(maxPrice);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isDigikalaSwitchOn, setIsDigikalaSwitchOn] = useState(false);
  const [sortingModal, setSortingModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [priceModal, setPriceModal] = useState(false);
  const [sortingMenu, setSortingMenu] = useState("relevant");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [priceRange, setPriceRange] = useState({ min: 0, max: maxPrice });

  const handleSwitchChange = (newState: boolean) => {
    setIsSwitchOn(newState);
    setIsSwitchChanged(true);
  };

  const handleDigikalaSwitchChange = (newState: boolean) => {
    setIsDigikalaSwitchOn(newState);
    setIsSwitchChanged(true);
  };

  // Reset All Filters
  const handleResetFilters = () => {
    setIsPriceChanged(false);
    setMinVal(0);
    setMaxVal(maxPrice);
    setPriceRange({ min: 0, max: maxPrice });
    setIsSwitchOn(false);
    setIsDigikalaSwitchOn(false);
    setIsSwitchChanged(false);
  };

  // Get min and max values when their state changes
  useEffect(() => {
    setPriceRange({ min: minVal, max: maxVal });
    setIsPriceChanged(minVal != 0 || maxVal != maxPrice);
  }, [maxPrice, maxVal, minVal, setPriceRange]);

  // Filter Products by Price
  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );
    setFilteredProducts(filtered);
  }, [priceRange, products]);

  // Disable body scroll when the modal is open
  useEffect(() => {
    if (sortingModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sortingModal]);

  const closeSortingModalHandler = () => setSortingModal(false);
  const closeFilterModalHandler = () => setFilterModal(false);
  const closePriceModalHandler = () => setPriceModal(false);

  return (
    <>
      <div className="col-span-3 max-lg:hidden border rounded-lg p-5">
        <div className="flex items-center justify-between pb-5">
          <h3 className="text-neutral-700 dark:text-neutral-100 text-xl font-irsansb">
            فیلترها
          </h3>
          {(isPriceChanged || isSwitchChanged) && (
            <button
              onClick={handleResetFilters}
              className="text-xs text-sky-500"
            >
              حذف فیلترها
            </button>
          )}
        </div>

        <FilterAccordion
          category={category}
          setActiveSubmenu={setActiveSubmenu}
          activeSubmenu={activeSubmenu}
          maxPrice={maxPrice}
          minVal={minVal}
          maxVal={maxVal}
          setMinVal={setMinVal}
          setMaxVal={setMaxVal}
          isSwitchOn={isSwitchOn}
          handleSwitchChange={handleSwitchChange}
          isDigikalaSwitchOn={isDigikalaSwitchOn}
          handleDigikalaSwitchChange={handleDigikalaSwitchChange}
        />
      </div>

      {/* Mobile Size Sorting Buttons */}
      <div className="lg:hidden sticky px-4 col-span-12 w-full top-20 right-0 z-10 border-b bg-white dark:bg-neutral-950 py-4 flex items-center gap-2">
        <MobileSortingButton onClick={() => setSortingModal(true)}>
          <ArrowDownWideNarrow size={15} />
          مرتبط‌ترین
        </MobileSortingButton>
        <MobileSortingButton onClick={() => setFilterModal(true)}>
          <SlidersHorizontal size={15} />
          فیلتر
        </MobileSortingButton>
        <MobileSortingButton onClick={() => setPriceModal(true)}>
          محدوده قیمت
          <ChevronDown size={15} />
        </MobileSortingButton>
      </div>

      <SubmenuProducts
        sortingMenu={sortingMenu}
        setSortingMenu={setSortingMenu}
        products={filteredProducts}
        searchParams={searchParams}
      />

      {/* Sorting Modal */}
      <Modal isOpen={sortingModal} closeModalHandler={closeSortingModalHandler}>
        <div className="grow whitespace-nowrap dark:text-neutral-100 text-neutral-800 text-body2-strong">
          <p className="mb-5">مرتب سازی براساس:</p>
        </div>
        <div className="flex flex-col">
          {sortingMenuItems.map((item, index) => (
            <Link
              href={`${
                searchParams
                  ? `/search?q=${searchParams.q}&sort=${item.label}`
                  : `?sort=${item.label}`
              }`}
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
      </Modal>

      {/* Filter Modal */}
      <Modal isOpen={filterModal} closeModalHandler={closeFilterModalHandler}>
        <div className="flex items-center justify-between pb-5">
          <h3 className="text-neutral-700 dark:text-neutral-100 text-xl font-irsansb">
            فیلترها
          </h3>
        </div>

        <FilterAccordion
          category={category}
          setActiveSubmenu={setActiveSubmenu}
          activeSubmenu={activeSubmenu}
          maxPrice={maxPrice}
          minVal={minVal}
          maxVal={maxVal}
          setMinVal={setMinVal}
          setMaxVal={setMaxVal}
          isSwitchOn={isSwitchOn}
          handleSwitchChange={handleSwitchChange}
          isDigikalaSwitchOn={isDigikalaSwitchOn}
          handleDigikalaSwitchChange={handleDigikalaSwitchChange}
        />

        <ModalsButtons
          closeModal={closeFilterModalHandler}
          products={filteredProducts}
          resetFilters={handleResetFilters}
        />
      </Modal>

      {/* Price Range Modal */}
      <Modal isOpen={priceModal} closeModalHandler={closePriceModalHandler}>
        <div className="grow whitespace-nowrap dark:text-neutral-100 text-neutral-800 text-body2-strong">
          <p className="mb-5">محدوده قیمت</p>
        </div>
        <PriceSlider
          min={0}
          max={maxPrice}
          minVal={minVal}
          maxVal={maxVal}
          setMinVal={setMinVal}
          setMaxVal={setMaxVal}
        />
        <ModalsButtons
          closeModal={closePriceModalHandler}
          products={filteredProducts}
          resetFilters={handleResetFilters}
        />
      </Modal>
    </>
  );
}

function MobileSortingButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="text-sm sm:text-base border rounded-full px-3 w-fit py-1.5 flex gap-2 items-center"
    >
      {children}
    </button>
  );
}

function FilterAccordion({
  category,
  setActiveSubmenu,
  activeSubmenu,
  maxPrice,
  minVal,
  maxVal,
  setMinVal,
  setMaxVal,
  isSwitchOn,
  handleSwitchChange,
  isDigikalaSwitchOn,
  handleDigikalaSwitchChange,
}) {
  return (
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
  );
}

function ModalsButtons({ closeModal, products, resetFilters }) {
  return (
    <div className="flex gap-5 mt-5 text-sm pt-3">
      <button
        onClick={closeModal}
        className="w-full p-2 bg-rose-500 rounded-md text-white"
      >
        مشاهده {products.length} محصول
      </button>
      <button
        onClick={resetFilters}
        className="w-full border p-2 border-rose-500 rounded-md text-red-500"
      >
        حذف فیلتر
      </button>
    </div>
  );
}

function Modal({
  children,
  isOpen,
  closeModalHandler,
}: {
  children: ReactNode;
  isOpen: boolean;
  closeModalHandler: () => void;
}) {
  return (
    <div
      className={`fixed right-0 top-0 z-50 lg:hidden flex h-screen w-full cursor-default flex-col items-center bg-black/40 dark:bg-black/80 transition-all duration-500  ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={closeModalHandler}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed bottom-0 right-0 w-full max-h-[90vh] overflow-auto rounded-lg bg-white dark:bg-neutral-900 px-5 pb-5 pt-0 shadow transition-all duration-500 dark:text-white
           ${isOpen ? "translate-y-0" : "translate-y-96"}`}
      >
        <button className="relative w-full">
          <X
            size={20}
            onClick={closeModalHandler}
            className="absolute left-0 top-0"
          />
        </button>

        {children}
      </div>
    </div>
  );
}
