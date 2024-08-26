import PageHeader from "@/components/admin/PageHeader";
import ProductForm from "@/components/admin/ProductForm";
import ProductModel from "models/Product";

export default async function EditProductPage({
  params: { id },
}: {
  params: { id };
}) {
  const product = await ProductModel.findOne({ _id: id })
    .populate("image")
    .populate("feature")
    .populate("color");

  return (
    <>
      <PageHeader title="ویرایش محصول" />
      <ProductForm product={product} />
    </>
  );
}
