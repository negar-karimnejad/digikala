"use client";

import { SearchIcon } from "lucide-react";
import { useState } from "react";

export default function OrdersSearchbar() {
  const [search, setSearch] = useState("");

  return (
    <label
      htmlFor="search"
      className="relative w-full h-12 flex items-center bg-gray-100 dark:bg-neutral-700 border-0 rounded-lg"
    >
      <SearchIcon size={20} className="z-10 text-gray-400 mr-5" />
      <input
        type="text"
        id="search"
        autoComplete="false"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="جستجو در سفارش‌ها"
        className="placeholder:text-sm z-10 border-0 h-full bg-transparent px-3 w-full outline-none"
      />
    </label>
  );
}
