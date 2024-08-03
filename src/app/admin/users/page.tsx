import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import db from "@/db/db";
import React from "react";

export default async function AdminUsersPage() {
  const users = await db.user.findMany({ orderBy: { createdAt: "asc" } });

  return (
    <>
      <PageHeader title="کاربران" />
      {users.length ? (
        <AdminTable users={users} />
      ) : (
        <div className="text-neutral-500">آیتمی برای نمایش وجود ندارد.</div>
      )}
    </>
  );
}
