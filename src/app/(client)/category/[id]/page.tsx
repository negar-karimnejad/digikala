import CategoryBanner from "@/components/category/CategoryBanner";
import Offers from "@/components/home/Offers";
import { Product } from "@/types/types";
import CategoryModel from "models/Category";
import ProductModel from "models/Product";

export default async function CategoryPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const category = await CategoryModel.findOne({ href: `/category/${id}` });
  const products: Product[] = await ProductModel.find({})
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

  // Discount Products
  const categoryProducts = products.filter(
    (product) => product.category.href === `/category/${id}`
  );

  const discountProducts = categoryProducts.filter(
    (product) => product.discount > 0
  );
  const offerProducts = discountProducts
    ?.slice()
    .sort((a, b) => b.discount - a.discount)
    .slice(0, 12);

  if (!category) return null;
  return (
    <div className="space-y-10">
      <CategoryBanner category={category} />
      {offerProducts.length > 0 && <Offers products={offerProducts} />}
    </div>
  );
}
