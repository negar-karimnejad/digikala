import CategorySubmenuForm from "@/components/admin/CategorySubmenuForm";
import PageHeader from "@/components/admin/PageHeader";

export default function NewSubmenuPage() {
  return (
    <>
      <PageHeader title="افزودن زیر مجموعه دسته‌بندی" />
      <CategorySubmenuForm />
    </>
  );
}
