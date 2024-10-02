import BestsellingMain from "@/components/best-selling/BestsellingMain";
import { Category, Product } from "@/utils/types";
import { serializeDoc } from "@/utils/serializeDoc";
import CategoryModel from "models/Category";
import ProductModel from "models/Product";

export default async function BestsellingPage() {
  const products = await ProductModel.find({})
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

  const categories: Category[] = await CategoryModel.find({})
    .populate({
      path: "submenus",
      populate: {
        path: "items",
      },
    })
    .lean();

  const bestSellerProducts: Product[] = products
    .slice()
    .sort((a, b) => b.recommended_percent - a.recommended_percent);

  const serializedProducts = serializeDoc(bestSellerProducts);
  const serializedCategories = serializeDoc(categories);

  return (
    <div className="mb-10">
      <div className="relative h-36 w-full">
        <div className="bg-gradient-to-l h-0.5 absolute -bottom-0 left-0 w-1/2 from-[#e20000] to-[white] dark:to-[black]"></div>
        <div className="bg-gradient-to-r h-0.5 absolute -bottom-0 right-0 w-1/2 from-[#e20000] to-[white] dark:to-[black]"></div>
        <div className="absolute right-0 top-0 w-full bg-[url('/nav-links-svg.svg')] h-36 opacity-30"></div>
        <h1 className="absolute m-auto w-fit h-full pt-10 px-10 right-0 left-0 top-0 bottom-0 text-red-500 bg-white dark:bg-neutral-950 lg:text-4xl text-xl">
          پرفروش‌ترین‌ها
          <span className="absolute w-fit h-fit bottom-0 left-0 right-0 mx-auto text-base text-neutral-900 dark:text-white">
            30 روز گذشته
          </span>
        </h1>
      </div>
      <BestsellingMain
        categories={serializedCategories}
        bestSellerProducts={serializedProducts}
      />
    </div>
  );
}
