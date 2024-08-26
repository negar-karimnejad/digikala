import CategorySubmenuItemForm from "@/components/admin/CategorySubmenuItemForm";
import PageHeader from "@/components/admin/PageHeader";
import SubmenuModel from "models/Submenu";

export default async function NewSubmenuPage() {
  const submenus = await SubmenuModel.find({});

  return (
    <>
      <PageHeader title="افزودن آیتم زیرمجموعه دسته‌بندی" />
      <CategorySubmenuItemForm submenus={submenus} />
    </>
  );
}
