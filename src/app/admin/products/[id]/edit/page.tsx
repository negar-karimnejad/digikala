import PageHeader from "@/components/admin/PageHeader";
import ProductForm from "@/components/admin/ProductForm";
import { serializeDoc } from "@/utils/serializeDoc";
import ProductModel from "models/Product";
import CategoryModel from "models/Category";
import connectToDB from "config/mongodb";

export default async function EditProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  await connectToDB();
  const product = await ProductModel.findOne({ _id: id })
    .populate("images")
    .populate("colors")
    .populate("features")
    .populate({
      path: "category",
      populate: {
        path: "submenus",
        populate: {
          path: "items",
        },
      },
    })
    .lean();

  const categories = await CategoryModel.find({})
    .populate({
      path: "submenus",
      populate: {
        path: "items",
      },
    })
    .lean();

  const serializedProduct = serializeDoc(product);
  const serializedCategories = serializeDoc(categories);

  return (
    <>
      <PageHeader title="ویرایش محصول" />
      <ProductForm
        product={serializedProduct}
        categories={serializedCategories}
      />
    </>
  );
}
