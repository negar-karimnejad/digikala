import ProfileHeader from "@/components/profile/ProfileHeader";
import UserInfo from "@/components/profile/UserInfo";
import UserList from "@/components/profile/UserList";
import UserOrders from "@/components/profile/UserOrders";
import { ChevronLeft, Info } from "lucide-react";
import { ReactNode } from "react";

export default function ProfilePage({
  children,
  params: { id },
}: {
  children: ReactNode;
  params: { id: string };
}) {
  // connectToDB();
  // const user = await UserModel.findOne({});

  return (
    <div>
      <div className="flex flex-col gap-10 lg:hidden">
        <ProfileHeader />
        <UserInfo />
        <WarnSection />
        <UserOrders />
        <hr className="border-4 border-neutral-200 dark:border-neutral-700" />
        <div className="-mt-10">
          <UserList id={id} />
        </div>
      </div>

      {/* Desktop Size */}
      <div className="grid grid-cols-12 gap-5 lg:px-20 pb-20 lg:pt-10">
        <div className="col-span-4 border rounded-md py-5 max-lg:hidden">
          <UserInfo />
          <UserList id={id} />
        </div>
        <div className="col-span-8 max-lg:col-span-12 gap-5">
          {id ? (
            <>{children}</>
          ) : (
            <div className="flex flex-col gap-5 max-lg:hidden">
              <WarnSection />
              <UserOrders />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const WarnSection = () => {
  return (
    <div className="border rounded-md text-xs leading-7 max-lg:mx-4 text-orange-500 px-5 py-3 lg:flex">
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
