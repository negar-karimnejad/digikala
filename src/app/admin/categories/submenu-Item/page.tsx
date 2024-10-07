import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import { serializeDoc } from "@/utils/serializeDoc";
import connectToDB from "config/mongodb";
import SubmenuItemModel from "models/SubmenuItem";

export default function SubmenuItemPage() {
  return <SubmenuItemTable />;
}

async function SubmenuItemTable() {
  await connectToDB();
  const submenuItems = await SubmenuItemModel.find({}).lean();
  const serializedSubmenuItems = serializeDoc(submenuItems);

  return (
    <>
      <PageHeader
        title="آیتم های زیرمجموعه دسته‌بندی ها"
        href="/admin/categories/submenu-Item/new"
      />
      {submenuItems.length ? (
        <AdminTable submenuItems={serializedSubmenuItems} />
      ) : (
        <div className="text-neutral-500">آیتمی برای نمایش وجود ندارد.</div>
      )}
    </>
  );
}
