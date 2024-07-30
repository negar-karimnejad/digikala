// deleteSubmenu

import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import db from "@/db/db";

export default function AdminCategoriesPage() {
  return <ProductTable />;
}

async function ProductTable() {
  const submenus = await db.submenu.findMany({ orderBy: { title: "asc" } });

  return (
    <>
      <PageHeader>دسته‌بندی ها</PageHeader>
      <AdminTable submenus={submenus} />
    </>
  );
}
