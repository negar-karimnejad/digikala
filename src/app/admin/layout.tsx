import Sidebar from "@/components/admin/Sidebar";
import Container from "@/components/ui/container";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  if (!session?.user) redirect("/");

  return (
    <div>
      <Container>
        <div className="grid grid-cols-12 gap-5 pt-5">
          <div className="col-span-3 max-md:col-span-12">
            <Sidebar />
          </div>
          <div className="col-span-9 max-md:col-span-12 px-5">
            {/* <Nav /> */}
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
}
