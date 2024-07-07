import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import db from "@/db/db";
import React from "react";

export default async function AdminUsersPage() {
  const users = await db.user.findMany({ orderBy: { createdAt: "asc" } });
  return (
    <>
      <PageHeader>کاربران</PageHeader>
      <AdminTable users={users} />
    </>
  );
}
