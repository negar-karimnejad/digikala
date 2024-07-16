"use client";

import { categories } from "@/data/data";
import {
  BadgePercent,
  ChevronLeft,
  CreditCard,
  Flame,
  MapPin,
  Menu,
  ShoppingBasket,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Category {
  id: number;
  title: string;
  icon: JSX.Element;
  href: string;
  submenu: {
    title: string;
    href: string;
    list: {
      title: string;
      href: string;
    }[];
  }[];
}

const links = [
  {
    label: "شگفت انگیزها",
    href: "/",
    icon: <BadgePercent size={18} />,
  },
  { label: "سوپرمارکت ", href: "/", icon: <ShoppingBasket size={18} /> },
  { label: "کارت هدیه ", href: "/", icon: <CreditCard size={18} /> },
  { label: "پرفروش ترین ها ", href: "/", icon: <Flame size={18} /> },
];

export default function Navbar() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    categories.find((category) => category.id === 1) || null
  );

  const hoverHandler = (categoryId: number) => {
    const category = categories.find(
      (category: Category) => category.id === categoryId
    );
    if (category) {
      setSelectedCategory(category);
    }
  };

  return (
    <nav className="border-b shadow-sm max-lg:hidden duration-700 px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div
            onMouseEnter={() => setIsShowMenu(true)}
            onMouseLeave={() => setIsShowMenu(false)}
            className="relative group flex items-center gap-2 py-3 cursor-pointer"
          >
            <Menu size={17} />
            <span className="font-medium ">دسته بندی کالاها</span>
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-900 ease-linear ${
                isShowMenu ? "w-full" : "w-0"
              }`}
            ></span>
            <div
              onMouseMove={() => setIsShowMenu(false)}
              className={`fixed w-full h-full mt-12 bg-black/50 right-0 top-20 transition-all ${
                isShowMenu ? "block" : ""
              }`}
            >
              <div
                onMouseMove={(e) => e.stopPropagation()}
                className="mr-4 grid grid-cols-12 top-12 border bg-white dark:bg-neutral-700 right-0 max-w-6xl shadow-sm"
              >
                <div className="bg-neutral-100 dark:bg-neutral-800 max-h-[25.5rem] overflow-y-auto col-span-2">
                  {categories.map((category) => (
                    <div
                      onMouseEnter={() => hoverHandler(category.id)}
                      key={category.id}
                    >
                      <Link
                        href={category.href}
                        className={`transition-all px-3 py-5 border dark:border-neutral-900 border-gray-100 hover:border-gray-200 hover:font-bold hover:text-red-500 hover:bg-white text-gray-600 dark:text-gray-100 flex items-center gap-2 text-[11px] lg:text-[12px] font-bold ${
                          selectedCategory?.id === category.id
                            ? "border-gray-200 font-bold text-red-500 dark:text-red-500 bg-white dark:bg-neutral-900"
                            : ""
                        }`}
                      >
                        {category.icon}
                        {category.title}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="col-span-10 p-4 max-h-[25.5rem] overflow-y-auto">
                  <h2 className="text-sky-500 text-sm flex items-center gap-1">
                    <Link
                      href={selectedCategory?.href || "/"}
                      className="flex items-center"
                    >
                      همه محصولات {selectedCategory?.title}
                      <ChevronLeft size={15} />
                    </Link>
                  </h2>
                  <div className="mt-5 grid grid-cols-12 gap-y-7">
                    {selectedCategory?.submenu.map((menu) => (
                      <div key={menu.title} className="col-span-3">
                        <h3 className="text-sm text-gray-700 dark:hover:text-red-500 dark:text-neutral-100 font-bold flex items-center hover:text-red-500 transition-all">
                          <span className="text-red-500 font-bold ml-2">|</span>
                          <Link href={menu.href} className="flex items-center">
                            {menu.title}
                            <ChevronLeft size={15} />
                          </Link>
                        </h3>
                        <div className="space-y-4 mt-5">
                          {menu.list.map((item) => (
                            <div
                              className="text-gray-500 dark:text-gray-400 text-sm hover:text-red-500 dark:hover:text-red-500 transition-all"
                              key={item.title}
                            >
                              <Link href={item.href}>{item.title}</Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[0.5px] h-4 bg-gray-200 mr-4"></div>
          <NavLinks />
          <div className="w-[0.5px] h-4 bg-gray-200"></div>
          <button className="relative flex mx-3 py-3 items-center gap-1 text-gray-500 text-[13px] group">
            <Link href="" className="font-medium transition-colors">
              سوالی دارید؟
            </Link>
            <span className="absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-900 ease-linear group-hover:w-full w-0"></span>
          </button>
          <button className="relative flex mx-3 py-3 items-center gap-1 text-gray-500 text-[13px] group">
            <Link href="" className="font-medium transition-colors">
              در دیجی کالا بفروشید!
            </Link>
            <span className="absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-900 ease-linear group-hover:w-full w-0"></span>
          </button>
        </div>
        <div
          title="لطفا شهر خود را انتخاب کنید"
          className="flex items-center gap-2 text-gray-500 cursor-pointer"
        >
          <MapPin size={18} />
          <span className="text-[12px]">لطفا شهر خود را انتخاب کنید</span>
        </div>
      </div>
    </nav>
  );
}

const NavLinks = () => {
  return (
    <>
      {links.map((link) => (
        <button
          key={link.label}
          className="relative flex mx-2.5 py-3 items-center gap-1 text-gray-500 text-[13px] group"
        >
          <span>{link.icon}</span>
          <Link href={link.href} className="font-medium transition-colors">
            {link.label}
          </Link>
          <span className="absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-900 ease-linear group-hover:w-full w-0"></span>
        </button>
      ))}
    </>
  );
};
