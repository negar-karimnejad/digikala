import PageHeader from "@/components/admin/PageHeader";
import UserUpdateForm from "@/components/admin/UserUpdateForm";
import { serializeDoc } from "@/utils/serializeDoc";
import connectToDB from "config/mongodb";
import UserModel from "models/User";

export default async function EditProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  await connectToDB();
  const user = await UserModel.findOne({ _id: id });
  const serializedUser = serializeDoc(user);

  if (!user) return <p>کاربر یافت نشد.</p>;

  return (
    <>
      <PageHeader title="ویرایش اطلاعات کاربر" />
      <UserUpdateForm user={serializedUser} />
    </>
  );
}
