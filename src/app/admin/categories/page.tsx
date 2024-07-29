import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import db from "@/db/db";

export default function AdminCategoriesPage() {
  return <ProductTable />;
}

async function ProductTable() {
  const categories = await db.category.findMany({ orderBy: { title: "asc" } });

  return (
    <>
      <PageHeader>دسته بندی ها</PageHeader>
      <AdminTable categories={categories} />
    </>
  );
}
