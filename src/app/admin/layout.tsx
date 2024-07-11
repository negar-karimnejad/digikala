import Sidebar from "@/components/admin/Sidebar";
import Container from "@/components/ui/container";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  console.log("😉",session);
  if (session?.user?.email !== "negar.karimnejad@gmail.com")
    redirect("/login?redirectTo=/admin");

  return (
    <div>
      <Container>
        <div className="grid grid-cols-12 gap-5 pt-5">
          <div className="px-5 col-span-4 max-lg:col-span-12 xl:col-span-3">
            <Sidebar />
          </div>
          <div className="col-span-8 max-lg:col-span-12 px-5 xl:col-span-9">
            {/* <Nav /> */}
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
}
