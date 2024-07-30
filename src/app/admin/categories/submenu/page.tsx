// deleteSubmenu

import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import db from "@/db/db";

export default function SubmenuPage() {
  return <SubmenuTable />;
}

async function SubmenuTable() {
  const submenus = await db.submenu.findMany({ orderBy: { title: "asc" } });

  return (
    <>
      <PageHeader>زیرمجموعه دسته‌بندی ها</PageHeader>
      <AdminTable submenus={submenus} />
    </>
  );
}
