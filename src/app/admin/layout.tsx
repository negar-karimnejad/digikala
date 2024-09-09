import Sidebar from "@/components/admin/Sidebar";
import Container from "@/components/ui/container";
import { authUser } from "@/utils/auth";
import connectToDB from "lib/mongodb";
import { ReactNode } from "react";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  connectToDB();
  const user = await authUser();
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
