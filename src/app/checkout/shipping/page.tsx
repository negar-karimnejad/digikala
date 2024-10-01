"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cities, province } from "@/data/data";
import { ArrowRight, CirclePlus, X } from "lucide-react";
import { useState } from "react";

export default function Shipping() {
  const [isOpenModal, setIsOpenModal] = useState(true);
  const [addAddress, setAddAddress] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState("-1");

  const closeModalHandler = () => {
    setIsOpenModal(false);
  };

  return (
    <div
      className={`fixed right-0 justify-end min-[600px]:justify-center top-0 z-50 flex h-screen w-full cursor-default flex-col items-center bg-black/40 dark:bg-black/80 transition-all duration-500 ${
        isOpenModal ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={closeModalHandler}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`overflow-hidden dark:bg-neutral-800 min-[600px]:w-[500px] max-sm:fixed bottom-0 right-0 w-full rounded-lg bg-white relative flex flex-col shadow transition-all duration-500 dark:text-white ${
          isOpenModal ? "opacity-100 h-fit" : "opacity-0 "
        }
        ${addAddress ? "h-[90vh] max-lg:h-screen" : ""}`}
      >
        {/* Header Section */}
        <div className="flex px-4 items-center justify-between sticky top-0 py-4 border-b bg-white z-10">
          <p className="font-irsansb">
            {addAddress ? (
              <span className="flex items-center gap-2">
                <ArrowRight size={18} />
                جزییات آدرس
              </span>
            ) : (
              "انتخاب آدرس"
            )}
          </p>
          <X size={18} onClick={closeModalHandler} className="cursor-pointer" />
        </div>

        {/* Middle Scrollable Content */}
        <div
          className={`flex-1 overflow-auto px-5 ${
            addAddress ? "h-screen lg:h-96" : ""
          }`}
        >
          {addAddress ? (
            <form className="text-sm space-y-6 px-3 py-5 bg-white rounded-lg">
              <div className="space-y-2">
                <label htmlFor="address" className="text-gray-700">
                  نشانی پستی
                  <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  id="address"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-100"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="province" className="text-gray-700">
                  استان
                  <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-100"
                  name=""
                  id="province"
                  onChange={(e) => setSelectedProvince(e.target.value)}
                >
                  <option value="-1"></option>
                  {province.map((item) => (
                    <option value={item.id} key={item.id}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="city" className="text-gray-700">
                  شهر
                  <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-100"
                  name=""
                  id="city"
                >
                  {cities
                    .filter((item) => {
                      return item.province_id === Number(selectedProvince);
                    })
                    .map((item) => (
                      <option value={item.id} key={item.id}>
                        {item.title}
                      </option>
                    ))}
                </select>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 space-y-2">
                  <label htmlFor="plate" className="text-gray-700">
                    پلاک
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    id="plate"
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-100"
                  />
                </div>

                <div className="flex-1 space-y-2">
                  <label htmlFor="unit" className="text-gray-700">
                    واحد
                  </label>
                  <Input
                    type="text"
                    id="unit"
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-100"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="postalcode" className="text-gray-700">
                  کدپستی
                  <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  id="postalcode"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-100"
                />
                <span className="text-xs text-neutral-500">
                  کد‌پستی باید ۱۰ رقم و بدون خط تیره باشد.
                </span>
              </div>

              <div className="flex items-center space-x-2 gap-1">
                <Input
                  type="checkbox"
                  id="same-recipient"
                  className="form-checkbox h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md"
                />
                <label htmlFor="same-recipient" className="text-gray-700">
                  گیرنده سفارش خودم هستم.
                </label>
              </div>

              <div className="space-y-2">
                <label htmlFor="firstname" className="text-gray-700">
                  نام گیرنده
                  <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  id="firstname"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-100"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastname" className="text-gray-700">
                  نام خانوادگی گیرنده
                  <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  id="lastname"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-100"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="mobile" className="text-gray-700">
                  شماره موبایل
                  <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  id="mobile"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-100"
                />

                <span className="text-xs text-neutral-500">
                  مثل: ۰۹۱۲۳۴۵۶۷۸۹
                </span>
              </div>
            </form>
          ) : (
            <button
              className="text-sky-400 text-sm flex items-center gap-3 py-5"
              onClick={() => setAddAddress(true)}
            >
              <CirclePlus size={18} />
              افزودن آدرس
            </button>
          )}
        </div>

        {/* Footer Section */}
        {addAddress && (
          <div className="bg-white z-10 p-3 border-t sticky bottom-0">
            <Button className="w-full">ثبت آدرس</Button>
          </div>
        )}
      </div>
    </div>
  );
}