import ProductMain from "@/components/product/ProductMain";
import ProductModel from "models/Product";
import { Category, Product, Submenu } from "@/types/types";
import { serializeDoc } from "@/utils/serializeDoc";
import { Megaphone, Store } from "lucide-react";
import Link from "next/link";
import connectToDB from "configs/db";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  
  connectToDB();
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

    
    const serializedProduct = serializeDoc(product);
    const category: Category = serializedProduct.category;
  // const submenus = category?.submenus?.find((submenu: Submenu) =>
  //   console.log("submenu====>🎃", submenu)
  // );

  // const item = submenu?.items.find(
  //   (item: SubmenuItem) => item._id === product.submenuItemId
  // );

  if (!product) return null;

  console.log("product====>🎃", serializedProduct);
  return (
    <div className="px-4 flex flex-col gap-10 py-4">
      <div className="flex justify-between items-center ">
        <nav className="grow min-w-0">
          <div className="breadcrumb-container flex overflow-x-auto overflow-y-hidden hide-scrollbar">
            {/* <BreadcrumbContainer
              category={category}
              submenu={submenu}
              item={item}
              product={product}
            /> */}
          </div>
        </nav>
        <div className="flex gap-5 items-center max-lg:hidden">
          <Link
            href="https://pindo.ir"
            target="_blank"
            className="gap-2 items-center flex text-xs text-neutral-400"
          >
            <span>ثبت آگهی در پیندو</span>
            <Megaphone size={17} />
          </Link>
          <Link
            href="/landings/seller-introduction"
            target="_blank"
            className="gap-2 items-center flex text-xs text-neutral-400"
          >
            <span>فروش در دیجی‌کالا</span>
            <Store size={17} />
          </Link>
        </div>
      </div>
      <ProductMain product={product} />
    </div>
  );
}
