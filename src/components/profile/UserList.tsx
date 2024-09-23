"use client";

import { profileList } from "@/data/data";
import { ChevronLeft, House } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SignoutFunction } from "../ui/SignoutFunction";

export default function UserList({ id }: { id?: string }) {
  const [activeItem, setActiveItem] = useState(id);

  useEffect(() => {
    setActiveItem(id);
  }, [id]);

  return (
    <ul className="divide-y-2 divide-neutral-100 dark:divide-neutral-900">
      <Link
        href="/profile"
        className="w-full max-lg:hidden flex items-center justify-between"
      >
        <div
          className={`px-5 hover:bg-neutral-100 dark:hover:bg-neutral-900 w-full flex items-center gap-5 text-neutral-700 dark:text-neutral-200 border-t py-4 mt-5 border-y-neutral-100 dark:border-neutral-900 ${
            id === undefined
              ? "font-irsansb after:absolute transition-all relative after:h-full after:w-1 after:top-0 after:right-0 after:border-r-4 after:border-r-red-500"
              : ""
          }`}
        >
          <House size={20} className="text-black dark:text-white" />
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            خلاصه فعالیت ها
          </p>
        </div>
      </Link>
      {profileList.map((item, index) => (
        <li key={index}>
          {item.en_title ? (
            <Link
              href={item.href}
              className="w-full flex items-center justify-between hover:bg-neutral-100 dark:hover:bg-neutral-900 max-lg:pl-5"
            >
              <div
                onClick={() => setActiveItem(item.en_title)}
                className={`px-5 w-full flex items-center gap-5 text-neutral-700 dark:text-neutral-200 py-4 ${
                  activeItem === item.en_title
                    ? "font-irsansb after:absolute transition-all relative after:h-full after:w-1 after:top-0 after:right-0 after:border-r-4 after:border-r-red-500"
                    : ""
                }`}
              >
                <span>{item.icon}</span>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  {item.title}
                </p>
              </div>
              <ChevronLeft size={20} className="lg:hidden text-neutral-500" />
            </Link>
          ) : (
            <SignoutFunction>
              <div className="px-5 flex items-center gap-5">
                <span>{item.icon}</span>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  {item.title}
                </p>
              </div>
              <ChevronLeft size={20} className="lg:hidden text-neutral-500" />
            </SignoutFunction>
          )}
        </li>
      ))}
    </ul>
  );
}
