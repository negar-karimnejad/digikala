import Categories from "@/components/categories/Categories";
import { Product } from "@/utils/types";
import { serializeDoc } from "@/utils/serializeDoc";
import connectToDB from "config/mongodb";
import CategoryModel from "models/Category";
import ProductModel from "models/Product";

export default async function CategoriesPage() {
  await connectToDB();
  const categories = await CategoryModel.find({})
    .populate({
      path: "submenus",
      populate: {
        path: "items",
      },
    })
    .lean();

  const product: Product[] = await ProductModel.find({})
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

  const serializedCategories = serializeDoc(categories);
  const serializedProduct = serializeDoc(product);

  return (
    <>
      <Categories
        categories={serializedCategories}
        products={serializedProduct}
      />
    </>
  );
}
