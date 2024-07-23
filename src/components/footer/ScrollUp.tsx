import { ChevronUp } from "lucide-react";

export default function ScrollUp() {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <button
      onClick={scrollUp}
      className="border rounded-md flex items-center px-5 py-3 text-gray-400 text-xs"
    >
      بازگشت به بالا
      <ChevronUp size={18} />
    </button>
  );
}
