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
      <PageHeader
        title="زیرمجموعه دسته‌بندی ها"
        href="/admin/categories/submenu/new"
      />
      {submenus.length ? (
        <AdminTable submenus={submenus} />
      ) : (
        <div className="text-neutral-500">آیتمی برای نمایش وجود ندارد.</div>
      )}
    </>
  );
}
