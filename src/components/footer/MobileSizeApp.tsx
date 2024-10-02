"use client";

import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MobileSizeApp() {
  const [isShowAppModal, setIsShowAppModal] = useState(false);

  return (
    <>
      <div className="lg:hidden border-b pb-5 mt-5 flex justify-between items-center w-full">
        <div className="flex items-center gap-4">
          <Image alt="footer-logo" width={45} height={45} src="/logo/footerlogo2.webp" />
          <div className="flex flex-col gap-2">
            <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
              تجربه خرید بهتر در
            </span>
            <span className="text-sm text-neutral-950 dark:text-neutral-100">
              اپلیکیشن دیجی‌کالا
            </span>
          </div>
        </div>
        <button
          onClick={() => setIsShowAppModal(true)}
          className="bg-black text-white dark:bg-white dark:text-neutral-900 border rounded-md text-sm py-2 px-3 border-gray-700"
        >
          دانلود
        </button>
      </div>

      <div
        onClick={() => setIsShowAppModal(false)}
        className={`z-50 lg:hidden fixed w-full h-full transition-all duration-700 top-0 right-0 bg-black/50 ${
          isShowAppModal ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute bottom-0 p-4 duration-500 right-0 w-full transition-all bg-white dark:bg-neutral-800 rounded-t-xl ${
            isShowAppModal ? "-translate-y-0" : "translate-y-64"
          }`}
        >
          <div className="flex justify-between border-b dark:border-b-neutral-700 pb-4">
            <p className="text-sm font-irsansb">دانلود اپلیکیشن دیجی‌کالا</p>
            <X
              onClick={() => setIsShowAppModal(false)}
              size={21}
              className="text-gray-600 cursor-pointer dark:text-gray-200"
            />
          </div>
          <div className="flex flex-wrap gap-2 mt-5">
            <Link
              href="https://www.digikala.com/landings/new-app/#download-box"
              className="bg-black rounded-md"
            >
              <Image
                alt="myket"
                width={225}
                height={50}
                src="/nemad/myket-dark.svg"
              />
            </Link>
            <Link
              href="https://cafebazaar.ir/app/com.digikala"
              className="bg-black rounded-md"
            >
              <Image
                alt="coffe-bazzar"
                width={225}
                height={50}
                src="/nemad/mobile-coffe-bazzar.svg"
              />
            </Link>
            <div className="bg-black rounded-md">
              <Image
                alt="directlink"
                width={225}
                height={50}
                src="/nemad/directlink.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
