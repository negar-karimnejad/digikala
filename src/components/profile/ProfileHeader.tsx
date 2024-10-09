"use client";

import {
  Bell,
  Bug,
  ChevronLeft,
  FileQuestion,
  Headset,
  Lock,
  LogOut,
  Paperclip,
  Phone,
  Settings,
  X,
} from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { SignoutFunction } from "../ui/SignoutFunction";
import { useRouter } from "next/navigation";

const settingList = [
  {
    title: "پرسش‌های متداول ",
    icon: (
      <FileQuestion
        className="text-neutral-500 dark:text-neutral-400"
        size={22}
      />
    ),
    href: "/faq",
  },
  {
    title: "حریم خصوصی ",
    icon: <Lock className="text-neutral-500 dark:text-neutral-400" size={22} />,
    href: "/privacy",
  },
  {
    title: "شرایط استفاده ",
    icon: (
      <Paperclip className="text-neutral-500 dark:text-neutral-400" size={22} />
    ),
    href: "/terms",
  },
  {
    title: "تماس با ما ",
    icon: (
      <Phone className="text-neutral-500 dark:text-neutral-400" size={22} />
    ),
    href: "/faq/contact-us",
  },
  {
    title: "گزارش خطا ",
    icon: <Bug className="text-neutral-500 dark:text-neutral-400" size={22} />,
    href: "/bug-report",
  },
  {
    title: "خروج از حساب کاربری ",
    icon: <LogOut className="text-red-500 dark:text-red-500" size={22} />,
    href: "",
  },
];

export default function ProfileHeader() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const closeModalHandler = () => setIsOpen(false);
  // const user = false;

  // if (!user) {
  //   router.push("/");
  // }
  return (
    <>
      <div className="flex justify-between sticky top-0 max-lg:mx-4 py-5 z-10 bg-white dark:bg-neutral-950">
        <Settings onClick={() => setIsOpen(true)} className="cursor-pointer" />
        <div className="flex gap-4">
          <Headset />
          <div className="relative">
            <Bell />
            <span className="w-5 h-3 text-xs flex items-center justify-center bg-red-500 absolute bottom-0 text-white -right-2 rounded-sm">
              5
            </span>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} closeModalHandler={closeModalHandler}>
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="dark:text-neutral-100 text-neutral-800">
              <p className="mb-5">تنظیمات</p>
            </div>
            <div className="flex flex-col divide-y-2 divide-neutral-100 dark:divide-neutral-800">
              {settingList.map((item, index) => (
                <div key={index}>
                  {item.href ? (
                    <Link
                      shallow
                      href={item.href}
                      onClick={closeModalHandler}
                      className="py-4 flex justify-between cursor-pointer whitespace-nowrap text-sm"
                    >
                      <div className="flex gap-5">
                        {item.icon}
                        <span className="text-neutral-950 dark:text-neutral-100">
                          {item.title}
                        </span>
                      </div>
                      <ChevronLeft size={20} className="text-neutral-500" />
                    </Link>
                  ) : (
                    <SignoutFunction>
                      <div className="flex gap-5">
                        {item.icon}
                        <span className="font-irsansb text-red-500 dark:text-red-500">
                          {item.title}
                        </span>
                      </div>
                    </SignoutFunction>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full mb-5 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="36"
              viewBox="0 0 136 36"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M112.005 13C111.423 13 111.005 13.418 111.005 14V21C111.005 22.3628 110.368 23 109.005 23H100.007V15.5C100.007 11.2647 96.7428 8 92.5083 8H86.0096C85.4045 8 84.3749 8.01669 84.01 8.5L82.0104 11.5C81.6256 12.0092 81.8723 13 82.5103 13H92.5083C93.8711 13 95.0079 14.137 95.0079 15.5V23H74.0119C73.4294 23 73.0121 23.4176 73.0121 24V27C73.0121 27.5826 73.4294 28 74.0119 28H78.0111C78.0111 29.363 76.3745 31 75.0117 31H66.0134C64.6509 31 64.0138 30.363 64.0138 29V19C64.0138 18.4182 63.5959 18 63.014 18H60.0146C59.4327 18 59.0148 18.4182 59.0148 19V29C59.0148 33.5 61.5143 36 66.0134 36H75.0117C79.2462 36 83.0102 32.2353 83.0102 28H99.0071C99.588 28 100.007 27.5808 100.007 27V26L101.098 27.3892C101.463 27.8724 101.901 28 102.506 28H109.005C113.24 28 116.004 25.2353 116.004 21V14C116.004 13.418 115.586 13 115.004 13H112.005ZM105.006 31C104.424 31 104.006 31.4176 104.006 32V35C104.006 35.5826 104.424 36 105.006 36H113.004C113.587 36 114.004 35.5826 114.004 35V32C114.004 31.4176 113.587 31 113.004 31H105.006ZM87.0094 31C86.4271 31 86.0096 31.4176 86.0096 32V35C86.0096 35.5826 86.4271 36 87.0094 36H90.5087C91.091 36 91.5085 35.5826 91.5085 35V32C91.5085 31.4176 91.091 31 90.5087 31H87.0094ZM120.003 8C119.421 8 119.003 8.41803 119.003 9V12C119.003 12.5818 119.421 13 120.003 13H129.001C130.364 13 131.001 13.637 131.001 15V21C131.001 22.3628 130.364 23 129.001 23H120.003C119.421 23 119.003 23.4178 119.003 24V27C119.003 27.582 119.421 28 120.003 28H129.001C133.236 28 136 25.2353 136 21V15C136 10.7647 133.236 8 129.001 8H120.003ZM42.5179 8L47.5664 1.49549C48.0588 0.9 47.6354 0 46.8626 0H43.0217C42.41 0 41.83 0.273083 41.44 0.744663L33.0198 11.5C32.4465 12.1935 32.6198 13 33.5197 13H45.0175C47.8788 13 50.0165 15.1381 50.0165 18V23H30.0203C28.7378 23 28.0207 22.3453 28.0207 21V5C28.0207 4.41823 27.6026 4 27.0209 4H24.0215C23.4396 4 23.0217 4.41823 23.0217 5V21C23.0217 25.5 26.521 28 31.0201 28H54.0157C54.5966 28 55.0155 27.5808 55.0155 27V18C55.0155 12.2657 50.7505 8 45.0175 8H42.5179ZM16.023 4C15.4414 4 15.0232 4.41823 15.0232 5V21C15.0232 22.3632 14.3866 23 13.0236 23H2.02571C1.44386 23 1.0259 23.4182 1.0259 24V27C1.0259 27.5822 1.44386 28 2.02571 28H13.0236C17.5227 28 20.0223 25.5 20.0223 21V5C20.0223 4.41823 19.6043 4 19.0224 4H16.023ZM3.84313 18.7288L0.026095 5C-0.130803 4.44289 0.44723 4 1.0259 4H3.68383C4.21517 4 4.7962 4.23056 4.94037 4.74232L9.04094 18.6329C9.19664 19.1859 8.84274 19.6112 8.26844 19.6112H5.00863C4.46615 19.6112 3.99009 19.2507 3.84313 18.7288Z"
                fill="#EF394E"
              />
            </svg>
          </div>
        </div>
      </Modal>
    </>
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
        className={`fixed top-0 right-0 w-full h-screen bg-white dark:bg-neutral-900 px-5 pb-5 pt-0 shadow transition-all duration-500 dark:text-white
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
