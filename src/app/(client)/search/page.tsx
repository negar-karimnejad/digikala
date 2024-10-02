import SubmenuProductsMain from "@/components/category/SubmenuProductsMain";
import { Category, Product } from "@/utils/types";
import { serializeDoc } from "@/utils/serializeDoc";
import { Info } from "lucide-react";
import CategoryModel from "models/Category";
import ProductModel from "models/Product";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({ searchParams }): Promise<Metadata> {
  return {
    title: searchParams.q,
  };
}

export default async function SearchCategoryPage({
  searchParams,
}: {
  searchParams?: {
    q?: string;
  };
}) {
  const products: Product[] = await ProductModel.find({})
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

  const searchParamsResult = products.filter(
    (product) =>
      product.title.includes(searchParams.q || "") ||
      product.en_title.includes(searchParams.q || "")
  );
  // Fetch the category and submenu based on the query
  const category: Category | null = await CategoryModel.findOne({
    _id: searchParamsResult[0]?.category._id,
  })
    .populate({
      path: "submenus",
      populate: {
        path: "items",
      },
    })
    .lean();

  // Fallback to a default category if none found
  const submenu = category?.submenus?.[0] || null;

  const serializedCategory = serializeDoc(category);
  const serializedSubmenu = serializeDoc(submenu);
  const serializedSearchParamsResult = serializeDoc(searchParamsResult);

  return (
    <div>
      {searchParamsResult.length > 0 ? (
        <div className="grid grid-cols-12 gap-5 lg:mt-10">
          <SubmenuProductsMain
            category={serializedCategory}
            submenu={serializedSubmenu}
            products={serializedSearchParamsResult}
            searchParams={searchParams}
          />
        </div>
      ) : (
        <div className="col-span-12 p-5 flex flex-col justify-center items-center">
          <Image
            src="/not-found-product.svg"
            alt="not-found-product"
            width={200}
            height={200}
          />
          <div className="border rounded-md py-5 pr-5 mt-5 w-96">
            <p className="text-neutral-800 mb-2 flex items-center gap-2">
              <Info size={18} className="text-yellow-600" />
              کالایی با این مشخصات پیدا نکردیم
            </p>
            <p className="text-sm text-neutral-500 mr-7">
              پیشنهاد می‌کنیم فیلترها را تغییر دهید
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
