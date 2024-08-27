import CategorySubmenuItemForm from "@/components/admin/CategorySubmenuItemForm";
import PageHeader from "@/components/admin/PageHeader";

export default async function NewSubmenuPage() {
  return (
    <>
      <PageHeader title="افزودن آیتم زیرمجموعه دسته‌بندی" />
      <CategorySubmenuItemForm />
    </>
  );
}
