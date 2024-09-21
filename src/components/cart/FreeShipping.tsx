"use client";
import { province } from "@/data/data";
import { City } from "@/types/types";
import { ChevronLeft, Truck, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function FreeShipping() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [userCity, setUserCity] = useState<City | null>(null);

  useEffect(() => {
    const savedCity = localStorage.getItem("location");
    if (savedCity) {
      setUserCity(JSON.parse(savedCity));
    }
  }, []);

  const closeModalHandler = () => setIsOpenModal(false);

  return (
    <>
      <div className="p-5 mx-4 rounded-lg bg-neutral-100 dark:bg-neutral-800 border dark:border-neutral-700 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Truck size={25} className="text-neutral-500" />
          <div className="">
            <h6 className="font-irsansb text-xs text-neutral-600 dark:text-neutral-300 mb-2">
              دریافت رایگان مرسوله‌های پیک دیجی‌کالا
            </h6>
            <p className="text-[11px] text-neutral-500">
              برای خریدهای بالای ۱ میلیون تومان در استان{" "}
              {userCity && (
                <span className="text-xs">
                  {
                    province.find((item) => item.id == userCity.province_id)
                      ?.title
                  }
                </span>
              )}
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsOpenModal(true)}
          className="text-sky-500 text-xs flex items-center font-irsansb"
        >
          دیدن شرایط
          <ChevronLeft size={15} />
        </button>
      </div>

      {/* Free Shipping Modal */}
      <div
        className={`fixed right-0 bottom-0 z-50 lg:hidden flex h-screen w-full cursor-default flex-col items-center bg-black/40 dark:bg-black/80 transition-all duration-500  ${
          isOpenModal ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={closeModalHandler}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed bottom-0 right-0 w-full h-fit bg-white dark:bg-neutral-900 px-5 pb-5 pt-0 shadow transition-all duration-500 dark:text-white
               ${isOpenModal ? "translate-y-0" : "translate-y-96"}`}
        >
          <button className="relative w-full">
            <X
              size={20}
              onClick={closeModalHandler}
              className="absolute left-0 top-0"
            />
          </button>
          <div>
            <h5 className="text-neutral-700 mb-5 pb-3 border-b text-sm font-irsansb">
              شرایط ارسال رایگان
            </h5>
            <p className="text-sm leading-6 text-neutral-600">
              هزینه ارسال مرسوله‌های پیک دیجی‌کالا در {userCity?.title} که مجموع
              قیمت آن ۱ میلیون تومان یا بیشتر باشد، رایگان است. لطفاً توجه کنید
              که باربری، ارسال فروشنده و پست فروشنده مشمول این تخفیف نیستند.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
