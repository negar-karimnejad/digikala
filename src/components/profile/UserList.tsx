import { profileList } from "@/data/data";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function UserList() {
  return (
    <ul className="divide-y-2 divide-neutral-100 dark:divide-neutral-900">
      {profileList.map((item, index) => (
        <li key={index}>
          {item.href ? (
            <Link
              href={item.href}
              className="hover:bg-neutral-100 dark:hover:bg-neutral-900 py-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-5">
                <span>{item.icon}</span>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  {item.title}
                </p>
              </div>
              <ChevronLeft size={20} className="lg:hidden text-neutral-500" />
            </Link>
          ) : (
            <div className="hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer py-4 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <span>{item.icon}</span>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  {item.title}
                </p>
              </div>
              <ChevronLeft size={20} className="lg:hidden text-neutral-500" />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
