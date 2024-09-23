import { Edit2 } from "lucide-react";

export default function PersonalInfo() {
  return (
    <div className="flex border rounded-md px-5 flex-col lg:flex-row mx-4 lg:mx-0">
      <div className="flex-1 divide-y-2 divide-neutral-100 dark:divide-neutral-900">
        <div className="p-5 h-20 flex justify-between items-center">
          <div className="flex flex-col gap-3">
            <span className="text-neutral-400 text-sm">نام و نام خانوادگی</span>
            <span className="text-neutral-700 dark:text-white">
              نگار کریم نژاد
            </span>
          </div>
          <Edit2 size={20} className="text-neutral-500" />
          {/* <Plus size={20} className="text-neutral-500" /> */}
        </div>
        <div className="p-5 h-20 flex justify-between items-center">
          <div className="flex flex-col gap-3">
            <span className="text-neutral-400 text-sm">شماره موبایل</span>
            <span className="text-neutral-700 dark:text-white">
              09123456789
            </span>
          </div>
          <Edit2 size={20} className="text-neutral-500" />
        </div>
        <div className="p-5 h-20 flex justify-between items-center">
          <div className="flex flex-col gap-3">
            <span className="text-neutral-400 text-sm">رمز عبور</span>
            <span className="text-neutral-700 dark:text-white">•••••••</span>
          </div>
          <Edit2 size={20} className="text-neutral-500" />
        </div>
        <div className="p-5 h-20 flex justify-between items-center">
          <div className="flex flex-col gap-3">
            <span className="text-neutral-400 text-sm">تاریخ تولد</span>
            <span className="text-neutral-700 dark:text-white"></span>
          </div>
          <Edit2 size={20} className="text-neutral-500" />
        </div>
        <div className="p-5 h-20 flex justify-between items-center">
          <div className="flex flex-col gap-3">
            <span className="text-neutral-400 text-sm">کد اقتصادی</span>
            <span className="text-neutral-700 dark:text-white"></span>
          </div>
          <Edit2 size={20} className="text-neutral-500" />
        </div>
      </div>
      <div className="lg:w-0.5 w-full max-lg:h-0.5 bg-neutral-100 dark:bg-neutral-900"></div>
      <div className="flex-1 divide-y-2 divide-neutral-100 dark:divide-neutral-900">
        <div className="p-5 h-20 flex justify-between items-center">
          <div className="flex flex-col gap-3">
            <span className="text-neutral-400 text-sm">کد ملی</span>
            <span className="text-neutral-700 dark:text-white">1680006142</span>
          </div>
          <Edit2 size={20} className="text-neutral-500" />
        </div>
        <div className="p-5 h-20 flex justify-between items-center">
          <div className="flex flex-col gap-3">
            <span className="text-neutral-400 text-sm">ایمیل</span>
            <span className="text-neutral-700 dark:text-white"></span>
          </div>
          <Edit2 size={20} className="text-neutral-500" />
        </div>
        <div className="p-5 h-20 flex justify-between items-center">
          <div className="flex flex-col gap-3">
            <span className="text-neutral-400 text-sm">
              روش بازگرداندن پول من
            </span>
            <span className="text-neutral-700 dark:text-white"></span>
          </div>
          <Edit2 size={20} className="text-neutral-500" />
        </div>
        <div className="p-5 h-20 flex justify-between items-center">
          <div className="flex flex-col gap-3">
            <span className="text-neutral-400 text-sm">شغل</span>
            <span className="text-neutral-700 dark:text-white"></span>
          </div>
          <Edit2 size={20} className="text-neutral-500" />
        </div>
      </div>
    </div>
  );
}
