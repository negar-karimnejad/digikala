import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import db from "@/db/db";
import useProducts from "@/hooks/useProducts";

export default function AdminProductsPage() {
  return <ProductTable />;
}

async function ProductTable() {
  // const products = await db.product.findMany({ orderBy: { title: "asc" } });
  const { products } = useProducts();
  return (
    <>
      <PageHeader href="/admin/products/new" title="محصولات" />
      {products.length ? (
        <AdminTable products={products} />
      ) : (
        <div className="text-neutral-500">آیتمی برای نمایش وجود ندارد.</div>
      )}
    </>
  );
}
