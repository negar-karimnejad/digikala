import CategorySubmenuForm from "@/components/admin/CategorySubmenuForm";
import PageHeader from "@/components/admin/PageHeader";
import CategoryModel from "models/Submenu";

export default async function NewSubmenuPage() {
  const categories = await CategoryModel.find({});
  return (
    <>
      <PageHeader title="افزودن زیر مجموعه دسته‌بندی" />
      <CategorySubmenuForm categories={categories} />
    </>
  );
}
