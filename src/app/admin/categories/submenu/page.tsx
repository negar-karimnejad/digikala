// deleteSubmenu

import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import SubmenuModel from "models/Submenu";

export default function SubmenuPage() {
  return <SubmenuTable />;
}

async function SubmenuTable() {
  const submenus = await SubmenuModel.find({});

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
