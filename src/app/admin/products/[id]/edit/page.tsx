import PageHeader from "@/components/admin/PageHeader";
import ProductForm from "@/components/admin/ProductForm";
import db from "@/db/db";

export default async function EditProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await db.product.findUnique({ where: { id } });

  console.log(product);

  return (
    <>
      <PageHeader>ویرایش محصول</PageHeader>
      <ProductForm product={product} />
    </>
  );
}
