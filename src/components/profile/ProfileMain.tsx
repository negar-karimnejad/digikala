"use client";

import { WarnSection } from "@/app/profile/page";
import ProfileTabs from "@/components/profile/ProfileTabs";
import { Product } from "@/types/types";
import PersonalInfo from "./PersonalInfo";

export default function ProfileMain({
  products,
  id,
}: {
  products: Product[];
  id: string;
}) {
  return (
    <>
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
          src="/profile/order-empty.svg"
          title="بازدیدهای اخیر"
          products={products}
        />
      )}
      {id === "personal-info" && (
        <div className="flex flex-col gap-5">
          <WarnSection />
          <PersonalInfo />
        </div>
      )}
    </>
  );
}
