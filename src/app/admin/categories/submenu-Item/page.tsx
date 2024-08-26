// deleteSubmenu

import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import SubmenuItemModel from "models/SubmenuItem";

export default function SubmenuItemPage() {
  return <SubmenuItemTable />;
}

async function SubmenuItemTable() {
  const submenuItems = await SubmenuItemModel.find({});

  return (
    <>
      <PageHeader
        title="آیتم های زیرمجموعه دسته‌بندی ها"
        href="/admin/categories/submenu-Item/new"
      />
      {submenuItems.length ? (
        <AdminTable submenuItems={submenuItems} />
      ) : (
        <div className="text-neutral-500">آیتمی برای نمایش وجود ندارد.</div>
      )}
    </>
  );
}
