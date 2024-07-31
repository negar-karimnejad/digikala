import CategorySubmenuForm from "@/components/admin/CategorySubmenuForm";
import CategorySubmenuItemForm from "@/components/admin/CategorySubmenuItemForm";
import PageHeader from "@/components/admin/PageHeader";
import db from "@/db/db";

export default async function NewSubmenuPage() {
  const submenus = await db.submenu.findMany({
    orderBy: { id: "asc" },
  });

  return (
    <>
      <PageHeader>افزودن آیتم زیرمجموعه دسته‌بندی</PageHeader>
      <CategorySubmenuItemForm submenus={submenus} />
    </>
  );
}
