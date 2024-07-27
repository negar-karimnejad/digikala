import PageHeader from "@/components/admin/PageHeader";
import ProductForm from "@/components/admin/ProductForm";
import db from "@/db/db";

export default async function EditProductPage({
  params: { id },
}: {
  params: { id: number };
}) {
  const product = await db.product.findUnique({ where: { id } });

  return (
    <>
      <PageHeader>ویرایش محصول</PageHeader>
      <ProductForm product={product} />
    </>
  );
}
