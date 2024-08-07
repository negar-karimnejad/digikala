import PageHeader from "@/components/admin/PageHeader";
import UserUpdateForm from "@/components/admin/UserUpdateForm";
import db from "@/db/db";

export default async function EditProductPage({
  params: { id },
}: {
  params: { id: number };
}) {
  const user = await db.user.findUnique({ where: { id: Number(id) } });
  if (!user) return <p>کاربر یافت نشد.</p>;

  return (
    <>
      <PageHeader title="ویرایش اطلاعات کاربر" />
      <UserUpdateForm user={user} />
    </>
  );
}
