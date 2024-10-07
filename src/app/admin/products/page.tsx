import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import { serializeDoc } from "@/utils/serializeDoc";
import connectToDB from "config/mongodb";
import ProductModel from "models/Product";

export default function AdminProductsPage() {
  return <ProductTable />;
}

async function ProductTable() {
  await connectToDB();
  const products = await ProductModel.find({}).lean();
  const serializedProducts = serializeDoc(products);

  return (
    <>
      <PageHeader href="/admin/products/new" title="محصولات" />
      {products.length ? (
        <AdminTable products={serializedProducts} />
      ) : (
        <div className="text-neutral-500">آیتمی برای نمایش وجود ندارد.</div>
      )}
    </>
  );
}
