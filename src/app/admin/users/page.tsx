import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import { serializeDoc } from "@/utils/serializeDoc";
import connectToDB from "configs/db";
import UserModel from "models/User";

import React from "react";

export default async function AdminUsersPage() {
  connectToDB();
  const users = await UserModel.find({});
  const serializedUsers = serializeDoc(users);

  return (
    <>
      <PageHeader title="کاربران" />
      {users.length ? (
        <AdminTable users={serializedUsers} />
      ) : (
        <div className="text-neutral-500">آیتمی برای نمایش وجود ندارد.</div>
      )}
    </>
  );
}
