import PageHeader from "@/components/admin/PageHeader";
import ProductDetails from "@/components/admin/ProductDetails";
import db from "@/db/db";

export default async function AdminProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await db.product.findUnique({ where: { id } });
  return (
    <>
      <PageHeader>جزئیات محصول</PageHeader>
      <ProductDetails product={product} />
    </>
  );
}
