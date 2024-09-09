import connectToDB from "lib/mongodb";
import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import { serializeDoc } from "@/utils/serializeDoc";
import UserModel from "models/User";

export default async function AdminUsersPage() {
  connectToDB();
  const users = await UserModel.find({}).lean();
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
