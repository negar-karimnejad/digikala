import { faqCategories } from "@/data/data";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

export default function FaqCategories() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex w-14 h-14 items-center bg-sky-50 dark:bg-sky-950 justify-center rounded-full">
          <LayoutDashboard size={22} className="text-sky-500" />
        </div>
        <h3 className="mt-5 mb-10 font-irsansb text-lg">دسته‌بندی پرسش‌ها</h3>
      </div>
      <div className="grid grid-cols-12 relative">
        <span className="absolute w-full h-0.5 bg-white dark:bg-neutral-950 top-0 left-0"></span>
        <span className="absolute w-full h-0.5 bg-white dark:bg-neutral-950 bottom-0 left-0"></span>
        <span className="absolute w-0.5 h-full bg-white dark:bg-neutral-950 top-0 left-0"></span>
        <span className="absolute w-0.5 h-full bg-white dark:bg-neutral-950 top-0 right-0"></span>
        {faqCategories.map((category, index) => (
          <Link
            key={index}
            href={category.href}
            className="col-span-4 border border-neutral-200 dark:border-neutral-900 lg:col-span-2 flex gap-5 flex-col items-center justify-center sm:p-5 p-2"
          >
            <span className="text-neutral-400 dark:text-neutral-600">
              {category.icon}
            </span>
            <span className="text-neutral-700 dark:text-neutral-100 text-xs text-center">
              {category.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
