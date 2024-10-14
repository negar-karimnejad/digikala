import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileScreenSize from "@/components/profile/ProfileScreenSize";
import UserInfo from "@/components/profile/UserInfo";
import UserList from "@/components/profile/UserList";
import UserOrders from "@/components/profile/UserOrders";
import WarnSection from "@/components/profile/WarnSection";

export default function ProfilePage({
  params: { id },
}: {
  params: { id: string };
}) {
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
      <ProfileScreenSize id={id} />
    </div>
  );
}
