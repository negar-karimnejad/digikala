import { ChevronUp } from "lucide-react";

export default function ScrollUp() {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <button
      onClick={scrollUp}
      className="max-lg:text-sky-500 gap-3 max-lg:mx-auto lg:border rounded-md flex items-center px-5 py-3 text-gray-400 dark:text-gray-200 text-xs"
    >
      بازگشت به بالا
      <ChevronUp size={18} />
    </button>
  );
}
