import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import db from "@/db/db";

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
  console.log(submenus);

  return (
    <>
      <PageHeader>دسته‌بندی ها</PageHeader>
      <AdminTable categories={categories} />
    </>
  );
}
