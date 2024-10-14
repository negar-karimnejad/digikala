import ProfileHeader from "@/components/profile/ProfileHeader";
import UserInfo from "@/components/profile/UserInfo";
import UserList from "@/components/profile/UserList";
import UserOrders from "@/components/profile/UserOrders";
import WarnSection from "@/components/profile/WarnSection";
import React from "react";

interface ProfilePageProps {
  children: React.ReactNode;
  params: { id: string };
}

export default async function ProfilePage({
  children,
  params: { id },
}: ProfilePageProps) {
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
