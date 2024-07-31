import CategorySubmenuItemForm from "@/components/admin/CategorySubmenuItemForm";
import PageHeader from "@/components/admin/PageHeader";
import db from "@/db/db";

export default async function NewSubmenuPage() {
  const submenus = await db.submenu.findMany({
    orderBy: { id: "asc" },
  });

  return (
    <>
      <PageHeader title="افزودن آیتم زیرمجموعه دسته‌بندی" />
      <CategorySubmenuItemForm submenus={submenus} />
    </>
  );
}
