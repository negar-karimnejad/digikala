import ProfileHeader from "@/components/profile/ProfileHeader";
import UserInfo from "@/components/profile/UserInfo";
import UserList from "@/components/profile/UserList";
import UserOrders from "@/components/profile/UserOrders";
import connectToDB from "config/mongodb";
import UserModel from "models/User";
import { ChevronLeft, House, Info } from "lucide-react";

export default async function page() {
  // connectToDB();
  // const user = await UserModel.findOne({});

  
  return (
    <div className="lg:px-20 px-4 pb-20 lg:pt-10">
      <div className="flex flex-col gap-10 lg:hidden">
        <ProfileHeader />
        <UserInfo />
        <WarnSection />
        <UserOrders />
        <hr className="border-4 border-neutral-200 dark:border-neutral-700" />
        <UserList />
      </div>

      {/* Desktop Size */}
      <div className="grid grid-cols-12 max-lg:hidden gap-5">
        <div className="col-span-4 border rounded-md p-5">
          <UserInfo />
          <div>
            <p className="text-neutral-700 dark:text-neutral-200 border-y py-4 mt-5 border-y-neutral-100 dark:border-neutral-900 flex items-center gap-5 font-irsansb">
              <House size={20} className="text-black dark:text-white" />
              خلاصه فعالیت ها
            </p>
          </div>
          <UserList />
        </div>
        <div className="col-span-8 flex flex-col gap-5">
          <WarnSection />
          <UserOrders />
        </div>
      </div>
    </div>
  );
}

const WarnSection = () => {
  return (
    <div className="border rounded-md text-xs leading-7 text-orange-500 px-5 py-3 lg:flex">
      <div className="flex gap-2 w-full">
        <Info size={18} className="text-orange-500 mt-1" />
        با تایید هویت می‌توانید‌ امنیت حساب کاربری‌تان را افزایش دهید و از امکان
        «خرید اعتباری» نیز استفاده کنید
      </div>
      <button className="max-lg:w-full whitespace-nowrap justify-end font-irsansb text-sky-500 flex items-center gap-1">
        تایید هویت
        <ChevronLeft size={18} />
      </button>
    </div>
  );
};
