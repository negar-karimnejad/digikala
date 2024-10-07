import PageHeader from "@/components/admin/PageHeader";
import ProductForm from "@/components/admin/ProductForm";
import { serializeDoc } from "@/utils/serializeDoc";
import connectToDB from "config/mongodb";
import CategoryModel from "models/Category";

export default async function NewProductPage() {
  await connectToDB();
  const categories = await CategoryModel.find({})
    .populate({
      path: "submenus",
      populate: {
        path: "items",
      },
    })
    .lean();
  const serializedCategories = serializeDoc(categories);

  return (
    <>
      <PageHeader title="افزودن محصول جدید" />
      <ProductForm categories={serializedCategories} />
    </>
  );
}
