import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import { Button } from "@/components/ui/button";
import db from "@/db/db";
import { Plus } from "lucide-react";

export default function AdminCategoriesPage() {
  return <ProductTable />;
}

async function ProductTable() {
  const categories = await db.category.findMany({
    include: { submenus: true },
  });
  const submenus = await db.submenu.findMany({
    include: { items: true },
  });

  return (
    <>
      <PageHeader href="/admin/categories/new" title="دسته‌بندی ها" />
      {categories.length ? (
        <AdminTable categories={categories} />
      ) : (
        <div className="text-neutral-500">آیتمی برای نمایش وجود ندارد.</div>
      )}
    </>
  );
}
