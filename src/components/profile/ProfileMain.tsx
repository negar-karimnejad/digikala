"use client";

import ProfileTabs from "@/components/profile/ProfileTabs";
import { Product, User } from "@/utils/types";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import PersonalInfo from "./PersonalInfo";
import WarnSection from "./WarnSection";

export default function ProfileMain({
  products,
  user,
  id,
}: {
  products: Product[];
  user: User;
  id: string;
}) {
  const router = useRouter();

  return (
    <div>
      {id === "orders" && (
        <ProfileTabs
          tabsArray={["جاری", "تحویل شده", "مرجوع شده", "لغو شده"]}
          src="/profile/order-empty.svg"
          title="تاریخچه سفارشات"
          searchbar={true}
        />
      )}
      {id === "lists" && (
        <ProfileTabs
          tabsArray={["لیست علاقه‌مندی", "لیست‌های دیگر", "اطلاع‌رسانی‌ها"]}
          src="/profile/favorites-list-empty.svg"
          title="لیست‌ها"
          products={products}
        />
      )}
      {id === "comments" && (
        <ProfileTabs
          tabsArray={["در انتظار دیدگاه", "دیدگاه‌های من", "پرسش‌های من"]}
          src="/profile/order-empty.svg"
          title="دیدگاه"
        />
      )}
      {id === "addresses" && (
        <ProfileTabs
          tabsArray={["آدرس‌ها"]}
          src="/profile/address.svg"
          title="آدرس‌"
          user={user}
        />
      )}
      {id === "gift-cards" && (
        <ProfileTabs
          tabsArray={["هدیه گرفتم", "هدیه دادم"]}
          src="/profile/empty-gift-card.webp"
          title="کارت هدیه "
        />
      )}
      {id === "notification" && (
        <ProfileTabs
          tabsArray={["پیغام‌ها"]}
          src="/profile/order-empty.svg"
          title="پیغام‌"
        />
      )}
      {id === "user-history" && (
        <ProfileTabs
          tabsArray={["بازدیدهای اخیر"]}
          src="/profile/order-empty.svg"
          title="بازدیدهای اخیر"
          products={products}
        />
      )}
      {id === "personal-info" && (
        <div className="flex flex-col gap-5">
          <h5 className="gap-2 pt-4 px-4 text-neutral-800 dark:text-white font-irsansb flex items-center">
            <span
              className="lg:hidden cursor-pointer"
              onClick={() => router.push("/profile")}
            >
              <ArrowRight size={20} />
            </span>
            اطلاعات حساب کاربری
          </h5>
          <div className="w-full h-2 bg-neutral-100 dark:bg-neutral-700 lg:hidden my-3"></div>

          <WarnSection />
          <PersonalInfo user={user} />
        </div>
      )}
    </div>
  );
}
