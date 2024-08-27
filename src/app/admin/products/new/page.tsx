import PageHeader from "@/components/admin/PageHeader";
import ProductForm from "@/components/admin/ProductForm";
import connectToDB from "configs/db";
import CategoryModel from "models/Category";

export default async function NewProductPage() {
  connectToDB();
  const categories = await CategoryModel.find({}).populate({
    path: "submenus",
    populate: {
      path: "items",
    },
  });

  return (
    <>
      <PageHeader title="افزودن محصول جدید" />
      <ProductForm categories={categories} />
    </>
  );
}
