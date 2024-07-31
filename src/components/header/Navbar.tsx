"use client";

import { cities, province } from "@/data/data";
import useScroll from "@/hooks/useScroll";
import { CategoryProps, City, Location } from "@/types/types";
import {
  ArrowRight,
  BadgePercent,
  ChevronLeft,
  CreditCard,
  Flame,
  LocateFixed,
  MapPin,
  Menu,
  ShoppingBasket,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "../ui/Modal";
import { Button } from "../ui/button";
import Image from "next/image";
import useCategories from "@/hooks/useCategories";

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
  const { categories } = useCategories();

  const [provincecities, setProvinceCities] = useState<City[]>([]);
  // const [userProvince, setUserProvince] = useState("");
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [locating, setLocating] = useState(false);
  const [isShowCityModal, setIsShowCityModal] = useState(false);
  const [location, setLocation] = useState<Location | null>(null);
  const [userCity, setUserCity] = useState<City | null>(() => {
    const savedCity = localStorage.getItem("location");
    return savedCity ? JSON.parse(savedCity) : null;
  });
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryProps | null>(
      categories?.find((category) => category.title === "موبایل") || null
    );

  const { isVisible } = useScroll();

  const hoverHandler = (categoryId: number) => {
    const category = categories.find(
      (category: CategoryProps) => category.id === categoryId
    );
    if (category) {
      setSelectedCategory(category);
    }
  };
  const handleLocationClick = async () => {
    setLocating(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setLocating(false);
        },
        (error) => {
          console.error("Error getting location", error);
          setLocating(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setLocating(false);
    }
  };

  const handlecitiesClick = (provinceId: number) => {
    const filteredCities = cities.filter(
      (city) => city.province_id === provinceId
    );
    if (filteredCities.length > 0) {
      setProvinceCities(filteredCities);
    }
  };

  const closeModalHandler = () => setIsShowCityModal(false);

  useEffect(() => {
    if (userCity) {
      localStorage.setItem("location", JSON.stringify(userCity));
    }
  }, [userCity]);

  return (
    <>
      <nav
        className={`sticky top-20 z-30 bg-white dark:bg-neutral-950 border-b shadow-sm max-lg:hidden transition-all duration-700 px-4 ${
          isVisible ? "translate-y-0" : "-translate-y-32"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div
              onMouseEnter={() => setIsShowMenu(true)}
              onMouseLeave={() => setIsShowMenu(false)}
              className="relative group flex items- gap-2 py-3 cursor-pointer"
            >
              <Menu size={17} />
              <span className="font-irsansb text-sm dark:text-white text-neutral-600">
                دسته‌بندی کالاها
              </span>
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-900 ease-linear ${
                  isShowMenu ? "w-full" : "w-0"
                }`}
              ></span>
              <div
                onMouseMove={() => setIsShowMenu(false)}
                className={`fixed w-full z-10 h-screen bg-black/50 right-0 top-[2.8rem] transition-all ${
                  isShowMenu ? "block" : "hidden"
                }`}
              >
                <div
                  onMouseMove={(e) => e.stopPropagation()}
                  className="mr-4 grid grid-cols-12 top-0 border bg-white dark:bg-neutral-700 right-0 max-w-6xl shadow-sm"
                >
                  <div className="bg-neutral-100 dark:bg-neutral-800 max-h-[25.5rem] overflow-y-auto col-span-2">
                    {categories.map((category) => (
                      <div
                        onMouseEnter={() => hoverHandler(category.id)}
                        key={category.id}
                      >
                        <Link
                          href={category.href}
                          className={`transition-all px-2 py-5 border dark:border-neutral-900 border-gray-100 hover:border-gray-200 hover:font-irsansb hover:text-red-500 hover:bg-white text-gray-600 dark:text-gray-100 flex items-center gap-2 text-xs font-irsansb ${
                            selectedCategory?.id === category.id
                              ? "border-gray-200 font-irsansb text-red-500 dark:text-red-500 bg-white dark:bg-neutral-900"
                              : ""
                          }`}
                        >
                          <Image
                            alt={category.title}
                            width={18}
                            height={18}
                            src={category.icon}
                          />
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
                      {selectedCategory?.submenus ? (
                        selectedCategory?.submenus.map((menu) => (
                          <div key={menu.title} className="col-span-3">
                            <h3 className="text-sm text-gray-700 font-irsansb dark:hover:text-red-500 dark:text-white flex items-center hover:text-red-500 transition-all">
                              <span className="text-red-500 ml-2">|</span>
                              <Link
                                href={menu.href}
                                className="flex items-center"
                              >
                                {menu.title}
                                <ChevronLeft size={15} />
                              </Link>
                            </h3>
                            <div className="space-y-4 mt-5">
                              {menu.items?.map((item) => (
                                <div
                                  className="text-gray-500 dark:text-gray-300 text-sm hover:text-red-500 dark:hover:text-red-500 transition-all"
                                  key={item.title}
                                >
                                  <Link href={item.href}>{item.title}</Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="col-span-12">
                          <p className="text-gray-500 text-sm mr-5 my-5">
                            محصولی برای{" "}
                            <span className="text-red-500 font-irsansb">
                              {selectedCategory?.title}
                            </span>{" "}
                            وجود ندارد.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[0.5px] h-4 bg-gray-200 dark:bg-gray-500 mr-2"></div>
            <NavLinks />
            <div className="w-[0.5px] h-4 bg-gray-200 dark:bg-gray-500"></div>
            <button className="relative flex mx-3 py-3 items-center gap-1 text-gray-500 dark:text-gray-300 text-[13px] group">
              <Link href="" className="font-medium transition-colors">
                سوالی دارید؟
              </Link>
              <span className="absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-900 ease-linear group-hover:w-full w-0"></span>
            </button>
            <button className="relative flex mx-3 py-3 items-center gap-1 text-gray-500 dark:text-gray-300 text-[13px] group">
              <Link href="" className="font-medium transition-colors">
                در دیجی کالا بفروشید!
              </Link>
              <span className="absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-900 ease-linear group-hover:w-full w-0"></span>
            </button>
          </div>
          <div
            title="لطفا شهر خود را انتخاب کنید"
            onClick={() => setIsShowCityModal(true)}
            className="flex items-center gap-2 text-gray-500 dark:text-gray-100 cursor-pointer"
          >
            <MapPin size={18} />
            {userCity ? (
              <span className="text-xs">
                ارسال به{" "}
                {
                  province.find((item) => item.id == userCity.province_id)
                    ?.title
                }
                ، {userCity.title}
              </span>
            ) : (
              <span className="text-xs">لطفا شهر خود را انتخاب کنید</span>
            )}
          </div>
        </div>
      </nav>
      <Modal isOpen={isShowCityModal} closeModalHandler={closeModalHandler}>
        <div className="border-b py-3 text-gray-800 dark:text-white flex justify-between items-center">
          <h2 className="text-lg font-irsansb">انتخاب شهر</h2>
          <Button variant="ghost" className="" onClick={closeModalHandler}>
            <X />
          </Button>
        </div>
        <div className="max-h-[30rem] overflow-y-auto pb-[5.3rem]">
          {provincecities.length > 0 ? (
            <>
              <div
                onClick={() => setProvinceCities([])}
                className="my-5 cursor-pointer flex items-center gap-3"
              >
                <ArrowRight />
                بازگشت به لیست استان ها
              </div>
              {provincecities.map((city) => (
                <div
                  key={city.id}
                  onClick={() => {
                    setUserCity(city);
                    setIsShowCityModal(false);
                    setProvinceCities([]);
                  }}
                  className="cursor-pointer text-gray-700 dark:text-gray-100 flex itece justify-between border-b py-3"
                >
                  {city.title}
                  <ChevronLeft />
                </div>
              ))}
            </>
          ) : (
            <>
              <div
                onClick={handleLocationClick}
                className="my-5 cursor-pointer text-sky-500 flex items-center gap-3"
              >
                {locating ? (
                  <div className="loader mx-3"></div>
                ) : (
                  <LocateFixed />
                )}
                مکان‌یابی خودکار
              </div>
              {province.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handlecitiesClick(item.id)}
                  className="cursor-pointer dark:text-gray-100 text-gray-700 flex itece justify-between border-b py-3"
                >
                  {item.title}
                  <ChevronLeft />
                </div>
              ))}
            </>
          )}
        </div>
      </Modal>
    </>
  );
}

const NavLinks = () => {
  return (
    <>
      {links.map((link) => (
        <button
          key={link.label}
          className="relative flex mx-2.5 py-3 items-center gap-1 text-gray-500 dark:text-gray-300 text-[13px] group"
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
