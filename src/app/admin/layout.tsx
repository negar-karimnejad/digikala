import Sidebar from "@/components/admin/Sidebar";
import Container from "@/components/ui/container";
import { authUser } from "@/utils/auth";
import { User } from "@/utils/types";
import connectToDB from "config/mongodb";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  await connectToDB();
  const user: User = await authUser();

  if (!user) {
    redirect("/login?redirected");
  }

  return (
    <div>
      <Container>
        <div className="grid grid-cols-12 gap-5 pt-5">
          <div className="px-5 col-span-4 max-lg:col-span-12 xl:col-span-3">
            <Sidebar />
          </div>
          <div className="col-span-8 max-lg:col-span-12 px-5 xl:col-span-9">
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
}
