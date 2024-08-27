import PageHeader from "@/components/admin/PageHeader";
import UserUpdateForm from "@/components/admin/UserUpdateForm";
import connectToDB from "configs/db";
import UserModel from "models/User";

export default async function EditProductPage({
  params: { id },
}: {
  params: { id:string };
}) {
  connectToDB();
  const user = await UserModel.findOne({ _id: id });
  if (!user) return <p>کاربر یافت نشد.</p>;

  return (
    <>
      <PageHeader title="ویرایش اطلاعات کاربر" />
      <UserUpdateForm user={user} />
    </>
  );
}
