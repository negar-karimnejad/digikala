import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/header/Header";
import Container from "@/components/ui/container";
import { authUser } from "@/utils/auth";
import connectToDB from "configs/db";
import { notFound, redirect } from "next/navigation";
import React from "react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  connectToDB();
  const user = await authUser();
  return (
    <div>
      <Header />
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
