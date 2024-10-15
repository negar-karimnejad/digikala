"use client";

import { ChevronLeft, Clock, ShoppingBasket, Truck, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function FloatingSupermarketButton() {
  const [isShowSupermarketModal, setIsShowSupermarketModal] = useState(false);

  const closeModal = () => setIsShowSupermarketModal(false);
  return (
    <>
      <div onClick={() => setIsShowSupermarketModal(true)}>
        <div className="text-sm max-lg:hidden font-irsansb cursor-pointer gap-2 bg-green-600 px-3 text-white h-12 flex items-center justify-center z-30 rounded-full fixed bottom-8 lg:left-4">
          سوپرمارکت
          <span className="opacity-30">|</span>
          تنوع بالا و پرتخفیف
          <ShoppingBasket size={30} />
        </div>
        <div className="text-sm lg:hidden font-irsansb cursor-pointer gap-2 max-lg:w-fit max-lg:right-0 max-lg:left-0 max-lg:mx-auto bg-green-600 px-3 text-white h-10 flex items-center justify-center z-30 rounded-full fixed bottom-16">
          <ShoppingBasket size={28} />
          <span className="opacity-30">|</span>
          سوپرمارکت، تنوع بالا، پرتخفیف
        </div>
      </div>

      <div
        className={`fixed transition-all duration-700 flex sm:items-center sm:justify-center items-end w-full h-full bg-black/50 top-0 right-0 z-30 ${
          isShowSupermarketModal ? "visible opacity-100" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`transition-all duration-500 sm:w-[28rem] max-sm:h-96 w-full bg-white dark:bg-neutral-700 rounded-xl max-sm:rounded-t-xl p-4 ${
            isShowSupermarketModal ? "translate-y-0" : "translate-y-96"
          }`}
        >
          <div className="flex justify-between items-center">
            <p className="font-irsansb flex flex-col gap-3">
              <span className="text-[15px] dark:text-neutral-50 text-neutral-700">
                یکی از سوپرمارکت‌های زیر را انتخاب کنید
              </span>
              <span className="text-xs text-neutral-400 dark:text-neutral-400">
                فقط در شهرهای تهران و کرج
              </span>
            </p>
            <X
              onClick={closeModal}
              className="cursor-pointer text-neutral-600 dark:text-neutral-300"
            />
          </div>
          <div className="flex gap-2 mt-4">
            <Link href="/fresh" className="py-4 bg-green-100 flex-1 rounded-xl">
              <p className="text-neutral-800 px-4 text-[15px] flex items-center font-irsansb gap-2 mb-3">
                پرتخفیف و متنوع
                <ChevronLeft size={16} />
              </p>
              <div className="mx-4 text-xs rounded-l-2xl rounded-tr-sm rounded-br-2xl flex justify-center items-center gap-2 w-fit px-3 bg-green-500 bg p-1 text-white">
                <Truck size={15} />
                ارسال امروز
              </div>
              <div className="mt-10 flex items-center justify-end">
                <Image
                  alt="fresh-shop-basket"
                  width={130}
                  height={130}
                  src="/fresh-shop-basket.webp"
                />
              </div>
            </Link>
            <Link
              href="/fresh"
              className="py-4 bg-orange-100 flex-1 rounded-xl"
            >
              <p className="text-neutral-800 px-4 text-[15px] flex items-center font-irsansb gap-2 mb-3">
                ارسال سریع
                <ChevronLeft size={16} />
              </p>
              <div className="mx-4 text-xs rounded-l-2xl rounded-tr-sm rounded-br-2xl flex justify-center items-center gap-2 w-fit px-3 bg-orange-400 bg p-1 text-white">
                <Clock size={15} />
                ۴۵ دقیقه‌ای
              </div>
              <div className="mt-10 flex items-center justify-end">
                <Image
                  alt="jet-shop-basket"
                  width={130}
                  height={130}
                  src="/jet-shop-basket.webp"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
