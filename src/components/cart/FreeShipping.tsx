"use client";
import { province } from "@/data/data";
import { City } from "@/utils/types";
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
      <div className="py-5 sm:px-5 px-2 max-lg:mx-4 rounded-lg bg-neutral-100 dark:bg-neutral-800 border dark:border-neutral-700 flex max-sm:flex-col sm:items-center justify-between">
        <div className="flex items-center gap-2">
          <Truck size={25} className="text-neutral-500" />
          <div>
            <h6 className="font-irsansb text-xs text-neutral-600 dark:text-neutral-300 mb-2">
              دریافت رایگان مرسوله‌های پیک دیجی‌کالا
            </h6>
            <p className="text-[11px] text-neutral-500">
              برای خریدهای بالای ۱ میلیون تومان در استان{" "}
              {userCity && (
                <span className="text-xs text-red-500">
                  {
                    province.find((item) => item.id == userCity.province_id)
                      ?.title
                  }
                </span>
              )}
            </p>
          </div>
        </div>
        <div className="justify-end max-sm:flex max-sm:mt-5">
          <button
            onClick={() => setIsOpenModal(true)}
            className="text-sky-500 text-xs flex items-center font-irsansb"
          >
            دیدن شرایط
            <ChevronLeft size={15} />
          </button>
        </div>
      </div>

      {/* Free Shipping Modal */}
      <div
        className={`fixed right-0 bottom-0 z-50 flex h-screen w-full cursor-default flex-col items-center bg-black/40 dark:bg-black/80 transition-all duration-500  ${
          isOpenModal ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={closeModalHandler}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed right-0 left-0 lg:top-0 bottom-0 lg:m-auto max-lg:w-full max-w-xl h-fit bg-white dark:bg-neutral-700 px-5 pb-5 pt-0 shadow transition-all duration-500 dark:text-white
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
            <h5 className="text-neutral-700 dark:text-neutral-100 mb-5 pb-3 border-b text-sm font-irsansb">
              شرایط ارسال رایگان
            </h5>
            <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-300">
              هزینه ارسال مرسوله‌های پیک دیجی‌کالا در{" "}
              <span className="font-irsansb text-base">
                &quot; {userCity?.title} &quot;
              </span>{" "}
              که مجموع قیمت آن ۱ میلیون تومان یا بیشتر باشد، رایگان است. لطفاً
              توجه کنید که باربری، ارسال فروشنده و پست فروشنده مشمول این تخفیف
              نیستند.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
