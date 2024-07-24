import { partners } from "@/data/data";
import { Headset } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import App from "./App";
import Description from "./Description";
import FooterFaq from "./FooterFaq";
import FooterLinks from "./FooterLinks";
import MobileSizeApp from "./MobileSizeApp";
import ScrollUp from "./ScrollUp";

export default function Footer() {
  return (
    <>
      <div className="border-t px-3 pt-10 border-gray-100 dark:border-gray-800">
        <div className="flex justify-between items-center">
          <svg
            width="120"
            height="30"
            viewBox="0 0 136 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-lg:hidden"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M112.005 13C111.423 13 111.005 13.418 111.005 14V21C111.005 22.3628 110.368 23 109.005 23H100.007V15.5C100.007 11.2647 96.7428 8 92.5083 8H86.0096C85.4045 8 84.3749 8.01669 84.01 8.5L82.0104 11.5C81.6256 12.0092 81.8723 13 82.5103 13H92.5083C93.8711 13 95.0079 14.137 95.0079 15.5V23H74.0119C73.4294 23 73.0121 23.4176 73.0121 24V27C73.0121 27.5826 73.4294 28 74.0119 28H78.0111C78.0111 29.363 76.3745 31 75.0117 31H66.0134C64.6509 31 64.0138 30.363 64.0138 29V19C64.0138 18.4182 63.5959 18 63.014 18H60.0146C59.4327 18 59.0148 18.4182 59.0148 19V29C59.0148 33.5 61.5143 36 66.0134 36H75.0117C79.2462 36 83.0102 32.2353 83.0102 28H99.0071C99.588 28 100.007 27.5808 100.007 27V26L101.098 27.3892C101.463 27.8724 101.901 28 102.506 28H109.005C113.24 28 116.004 25.2353 116.004 21V14C116.004 13.418 115.586 13 115.004 13H112.005ZM105.006 31C104.424 31 104.006 31.4176 104.006 32V35C104.006 35.5826 104.424 36 105.006 36H113.004C113.587 36 114.004 35.5826 114.004 35V32C114.004 31.4176 113.587 31 113.004 31H105.006ZM87.0094 31C86.4271 31 86.0096 31.4176 86.0096 32V35C86.0096 35.5826 86.4271 36 87.0094 36H90.5087C91.091 36 91.5085 35.5826 91.5085 35V32C91.5085 31.4176 91.091 31 90.5087 31H87.0094ZM120.003 8C119.421 8 119.003 8.41803 119.003 9V12C119.003 12.5818 119.421 13 120.003 13H129.001C130.364 13 131.001 13.637 131.001 15V21C131.001 22.3628 130.364 23 129.001 23H120.003C119.421 23 119.003 23.4178 119.003 24V27C119.003 27.582 119.421 28 120.003 28H129.001C133.236 28 136 25.2353 136 21V15C136 10.7647 133.236 8 129.001 8H120.003ZM42.5179 8L47.5664 1.49549C48.0588 0.9 47.6354 0 46.8626 0H43.0217C42.41 0 41.83 0.273083 41.44 0.744663L33.0198 11.5C32.4465 12.1935 32.6198 13 33.5197 13H45.0175C47.8788 13 50.0165 15.1381 50.0165 18V23H30.0203C28.7378 23 28.0207 22.3453 28.0207 21V5C28.0207 4.41823 27.6026 4 27.0209 4H24.0215C23.4396 4 23.0217 4.41823 23.0217 5V21C23.0217 25.5 26.521 28 31.0201 28H54.0157C54.5966 28 55.0155 27.5808 55.0155 27V18C55.0155 12.2657 50.7505 8 45.0175 8H42.5179ZM16.023 4C15.4414 4 15.0232 4.41823 15.0232 5V21C15.0232 22.3632 14.3866 23 13.0236 23H2.02571C1.44386 23 1.0259 23.4182 1.0259 24V27C1.0259 27.5822 1.44386 28 2.02571 28H13.0236C17.5227 28 20.0223 25.5 20.0223 21V5C20.0223 4.41823 19.6043 4 19.0224 4H16.023ZM3.84313 18.7288L0.026095 5C-0.130803 4.44289 0.44723 4 1.0259 4H3.68383C4.21517 4 4.7962 4.23056 4.94037 4.74232L9.04094 18.6329C9.19664 19.1859 8.84274 19.6112 8.26844 19.6112H5.00863C4.46615 19.6112 3.99009 19.2507 3.84313 18.7288Z"
              fill="#EF394E"
            />
          </svg>
          <ScrollUp />
        </div>
        <div className="max-lg:hidden flex gap-5 text-xs text-gray-700 dark:text-gray-200 mt-5">
          <span>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</span>
          <span>|</span>
          <span>۰۲۱-۹۱۰۰۰۱۰۰</span>
          <span>|</span>
          <span>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
        </div>
        <div className="lg:hidden border-b pb-5 mt-5 flex justify-between items-center w-full">
          <div className="flex items-center gap-4">
            <Headset size={22} />
            <div className="flex flex-col gap-2">
              <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
                ۷ روز هفته، ۲۴ ساعت
              </span>
              <span className="text-sm text-neutral-950 dark:text-neutral-100">
                تماس با پشتیبانی
              </span>
            </div>
          </div>
          <button className="border rounded-md text-sm py-2 px-3 border-gray-700">
            <a href="tel:123456789">تماس</a>
          </button>
        </div>
        <MobileSizeApp />
        <FooterFaq />
        <FooterLinks />
        <App />
        <div className="max-lg:hidden my-10 w-full border-b bg-gray-400"></div>
        <div className="grid grid-cols-12 w-full gap-7">
          <div className="col-span-9 max-lg:col-span-12">
            <Description />
          </div>
          <div className="col-span-3 flex gap-2 max-lg:hidden">
            <Link
              target="_blank"
              href="https://samandehi.ir/Pages/HomePage.aspx"
              className="bg-white w-28 h-24 border rounded-lg flex items-center justify-center"
            >
              <Image
                alt=""
                className="objet-cover"
                width={70}
                height={70}
                src="/nemad/rezi.webp"
              />
            </Link>
            <Link
              target="xxx"
              href="https://www.ecunion.ir/verify/www.ecunion.ir?token=254785acf0232a3fa7"
              className="bg-white w-28 h-24 border rounded-lg flex items-center justify-center"
            >
              <Image
                alt=""
                className="objet-cover"
                width={50}
                height={50}
                src="/nemad/kasbokar.webp"
              />
            </Link>
            <Link
              target="xxx"
              href="https://www.enamad.ir/"
              className="bg-white w-28 h-24 border rounded-lg flex items-center justify-center"
            >
              <Image
                alt=""
                className="objet-cover"
                width={120}
                height={120}
                src="/nemad/enamad.png"
              />
            </Link>
          </div>
        </div>
        <div className="max-lg:hidden my-10 w-full border-b bg-gray-400"></div>
        <div className="text-xs max-lg:hidden text-gray-500 text-center w-full dark:text-gray-400">
          برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
          کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه
          آنلاین دیجی‌کالا) است.
        </div>
      </div>

      <div className="max-lg:hidden flex h-20 mt-10">
        {partners.slice(0, 8).map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-neutral-900 dark:border-neutral-950 border border-gray-200 flex flex-1 items-center justify-center"
          >
            {item.title}
          </div>
        ))}
      </div>

      <div className="max-lg:hidden flex h-20">
        {partners.slice(8, 15).map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-neutral-900 dark:border-neutral-950 border border-gray-200 flex flex-1 items-center justify-center"
          >
            {item.title}
          </div>
        ))}
      </div>
    </>
  );
}
