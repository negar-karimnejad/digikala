import { ChevronLeft, Info } from "lucide-react";

export default function WarnSection() {
  return (
    <div className="border rounded-md text-xs leading-7 max-lg:mx-4 text-orange-500 px-5 py-3 lg:flex">
      <div className="flex gap-2 w-full">
        <Info size={18} className="text-orange-500 mt-1 pl-1" />
        با تایید هویت می‌توانید‌ امنیت حساب کاربری‌تان را افزایش دهید و از امکان
        «خرید اعتباری» نیز استفاده کنید
      </div>
      <button className="max-lg:w-full whitespace-nowrap justify-end font-irsansb text-sky-500 flex items-center gap-1">
        تایید هویت
        <ChevronLeft size={18} />
      </button>
    </div>
  );
}
