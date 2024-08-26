import CategoryForm from "@/components/admin/CategoryForm";
import PageHeader from "@/components/admin/PageHeader";
import CategoryModel from "models/Category";

export default async function EditProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const category = await CategoryModel.findOne({ _id: id });

  return (
    <>
      <PageHeader title="ویرایش دسته‌بندی" />
      <CategoryForm category={category} />
    </>
  );
}
