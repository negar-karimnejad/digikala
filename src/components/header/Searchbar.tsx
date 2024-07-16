import { SearchIcon } from "lucide-react";

export default function Searchbar({ placeholder }: { placeholder?: string }) {
  return (
    <label
      htmlFor="search"
      className="w-full h-12 flex items-center bg-gray-100 dark:bg-neutral-700 border-0 rounded-lg"
    >
      <SearchIcon size={20} className="text-gray-400 mr-5" />
      <input
        type="text"
        id="search"
        placeholder={placeholder ? placeholder : "جستجو "}
        className="border-0 h-full bg-transparent px-3 w-full outline-none"
      />
    </label>
  );
}
