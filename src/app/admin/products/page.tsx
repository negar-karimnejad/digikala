import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import db from "@/db/db";

export default function AdminProductsPage() {
  return <ProductTable />;
}

async function ProductTable() {
  const products = await db.product.findMany({ orderBy: { title: "asc" } });
console.log(products,"🥵⭐⭐");

  return (
    <>
      <PageHeader>محصولات</PageHeader>
      <AdminTable products={products} />
    </>
  );
}
