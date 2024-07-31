// deleteSubmenu

import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import db from "@/db/db";

export default function SubmenuItemPage() {
  return <SubmenuItemTable />;
}

async function SubmenuItemTable() {
  const submenuItems = await db.submenuItem.findMany({
    orderBy: { title: "asc" },
  });

  return (
    <>
      <PageHeader
        title="آیتم های زیرمجموعه دسته‌بندی ها"
        href="/admin/categories/submenu-Item/new"
      />

      <AdminTable submenuItems={submenuItems} />
    </>
  );
}
