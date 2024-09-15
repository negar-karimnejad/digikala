import { ArrowDownWideNarrow } from "lucide-react";
import Link from "next/link";

interface SortingMenuProps {
  sortingMenu: string;
  setSortingMenu: (selectedMenu: string) => void;
}

const sortingMenuItems = [
  { title: "مرتبط‌ترین", label: "relevant" },
  { title: "پربازدیدترین", label: "visited" },
  { title: "جدیدترین", label: "newest" },
  { title: "پرفروش‌ترین‌", label: "bestseller" },
  { title: "ارزان‌ترین", label: "cheapest" },
  { title: "گران‌ترین", label: "expensive" },
];

export default function SortingMenu({
  sortingMenu,
  setSortingMenu,
}: SortingMenuProps) {
  return (
    <div className="flex items-center gap-x-4">
      <div className="py-3">
        <div className="flex items-center grow">
          <div className="flex shrink-0 ml-2">
            <ArrowDownWideNarrow size={20} />
          </div>
          <p className="grow cursor-pointer whitespace-nowrap text-neutral-800  text-body2-strong">
            <span className="relative">مرتب سازی:</span>
          </p>
        </div>
      </div>
      <div className="flex gap-5">
        {sortingMenuItems.map((item, index) => (
          <Link
            href={`?sort=${item.label}`}
            shallow
            key={index}
            onClick={() => setSortingMenu(item.label)}
            className={`cursor-pointer whitespace-nowrap text-body-2 text-neutral-500 ${
              sortingMenu === item.label ? "text-red-500" : ""
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
