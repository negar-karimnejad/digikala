import BreadcrumbContainer from "@/components/product/BreadcrumbContainer";
import ProductMain from "@/components/product/ProductMain";
import ProductPageMobileStickyHeader from "@/components/ui/ProductPageMobileStickyHeader";
import { serializeDoc } from "@/utils/serializeDoc";
import { Product, Submenu, SubmenuItem } from "@/utils/types";
import connectToDB from "config/mongodb";
import { Megaphone, Store } from "lucide-react";
import ProductModel from "models/Product";
import mongoose from "mongoose";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  await connectToDB();
  const product: Product = await ProductModel.findOne({ _id: id });

  return {
    title: { absolute: `قیمت و خرید ${product.title}` },
  };
}

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  await connectToDB();

  // Validate if the provided id is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return notFound(); // Trigger a 404 if the id is not valid
  }

  const product: Product = await ProductModel.findOne({ _id: id })
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

  if (!product) {
    return notFound();
  }
  const serializedProduct = serializeDoc(product);
  const category = serializedProduct.category;
  const submenu = category.submenus?.find(
    (submenu: Submenu) => submenu._id.toString() === product.submenuId
  );

  const item = submenu?.items.find(
    (item: SubmenuItem) => item._id.toString() === product.submenuItemId
  );

  return (
    <div className="px-4 flex flex-col gap-10 py-4">
      <ProductPageMobileStickyHeader productId={id} />
      <div className="flex justify-between items-center mb-4">
        <nav className="grow min-w-0">
          <div className="breadcrumb-container flex overflow-x-auto overflow-y-hidden hide-scrollbar">
            <BreadcrumbContainer
              title={serializedProduct.title}
              category={category}
              submenu={submenu}
              item={item}
            />
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
      <ProductMain product={serializedProduct} />
    </div>
  );
}
