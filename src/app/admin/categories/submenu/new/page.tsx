import CategoryForm from "@/components/admin/CategoryForm";
import CategorySubmenuForm from "@/components/admin/CategorySubmenuForm";
import PageHeader from "@/components/admin/PageHeader";
import db from "@/db/db";

export default async function NewSubmenuPage() {
  const categories = await db.category.findMany({ orderBy: { id: "asc" } });
  return (
    <>
      <PageHeader>افزودن زیر مجموعه دسته‌بندی جدید</PageHeader>
      <CategorySubmenuForm categories={categories} />
    </>
  );
}
