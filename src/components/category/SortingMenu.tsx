import { sortingMenuItems } from "@/data/data";
import { ArrowDownWideNarrow } from "lucide-react";
import Link from "next/link";

interface SortingMenuProps {
  sortingMenu: string;
  setSortingMenu: (selectedMenu: string) => void;
  searchParams?;
}

export default function SortingMenu({
  sortingMenu,
  setSortingMenu,
  searchParams,
}: SortingMenuProps) {
  return (
    <div className="flex items-center gap-x-4 max-lg:hidden">
      <div className="py-3">
        <div className="flex items-center grow">
          <div className="flex shrink-0 ml-2">
            <ArrowDownWideNarrow size={20} />
          </div>
          <p className="grow cursor-pointer whitespace-nowrap dark:text-neutral-100 text-neutral-800  text-body2-strong">
            <span className="relative">مرتب سازی:</span>
          </p>
        </div>
      </div>
      <div className="flex gap-5">
        {sortingMenuItems.map((item, index) => (
          <Link
            href={`${
              searchParams
                ? `/search?q=${searchParams.q}&sort=${item.label}`
                : `?sort=${item.label}`
            }`}
            shallow
            key={index}
            onClick={() => setSortingMenu(item.label)}
            className={`cursor-pointer whitespace-nowrap text-body-2 text-neutral-500 dark:text-neutral-300 ${
              sortingMenu === item.label ? "text-red-500 dark:text-red-500" : ""
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
