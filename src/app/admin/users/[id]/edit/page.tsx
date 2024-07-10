import PageHeader from "@/components/admin/PageHeader";
import UserUpdateForm from "@/components/admin/UserUpdateForm";
import db from "@/db/db";

export default async function EditProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const user = await db.user.findUnique({ where: { id } });
  if (!user) return <p>کاربر یافت نشد.</p>;

  return (
    <>
      <PageHeader>به روزرسانی کاربر</PageHeader>
      <UserUpdateForm user={user} />
    </>
  );
}
