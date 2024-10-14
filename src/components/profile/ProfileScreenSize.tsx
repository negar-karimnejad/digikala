import { ReactNode } from "react";
import UserInfo from "./UserInfo";
import UserList from "./UserList";
import UserOrders from "./UserOrders";
import WarnSection from "./WarnSection";

export default function ProfileScreenSize({
  id,
  children,
}: {
  children?: ReactNode;
  id: string;
}) {
  return (
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
  );
}
