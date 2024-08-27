import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import connectToDB from "configs/db";
import ProductModel from "models/Product";

export default function AdminProductsPage() {
  return <ProductTable />;
}

async function ProductTable() {
  // connectToDB();
  // const products = await ProductModel.find({});

  return (
    <>
      <PageHeader href="/admin/products/new" title="محصولات" />
      {/* {products.length ? (
        <AdminTable products={products} />
      ) : (
        <div className="text-neutral-500">آیتمی برای نمایش وجود ندارد.</div>
      )} */}
    </>
  );
}
