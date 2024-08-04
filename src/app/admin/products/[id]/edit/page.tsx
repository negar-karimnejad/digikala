import PageHeader from "@/components/admin/PageHeader";
import ProductForm from "@/components/admin/ProductForm";
import db from "@/db/db";

export default async function EditProductPage({
  params: { id },
}: {
  params: { id: number };
}) {
  const product = await db.product.findUnique({
    where: { id: Number(id) },
    include: { image: true },
  });

  return (
    <>
      <PageHeader title="ویرایش محصول" />
      <ProductForm product={product} />
    </>
  );
}
