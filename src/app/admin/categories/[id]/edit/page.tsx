import CategoryForm from "@/components/admin/CategoryForm";
import PageHeader from "@/components/admin/PageHeader";
import db from "@/db/db";

export default async function EditProductPage({
  params: { id },
}: {
  params: { id: number };
}) {
  const category = await db.category.findUnique({ where: { id: Number(id) } });

  return (
    <>
      <PageHeader>ویرایش دسته بندی</PageHeader>
      <CategoryForm category={category} />
    </>
  );
}
