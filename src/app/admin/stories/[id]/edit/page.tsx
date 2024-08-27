import PageHeader from "@/components/admin/PageHeader";
import ProductForm from "@/components/admin/ProductForm";
import connectToDB from "configs/db";
import ProductModel from "models/Product";

export default async function EditProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  connectToDB();
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
