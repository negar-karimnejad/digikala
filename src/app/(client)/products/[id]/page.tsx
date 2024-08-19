import BreadcrumbContainer from "@/components/product/BreadcrumbContainer";
import ProductMain from "@/components/product/ProductMain";

import db from "@/db/db";
import { Megaphone, Store } from "lucide-react";
import Link from "next/link";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const productId = parseInt(id, 10);

  const product = await db.product.findUnique({
    where: { id: productId },
    include: {
      image: true,
      color: true,
      feature: true,
      category: { include: { submenus: { include: { items: true } } } },
    },
  });

  const category = product.category;
  const submenu = category.submenus.find(
    (submenu) => submenu.id === product.submenuId
  );
  const item = submenu?.items.find((item) => item.id === product.submenuItemId);

  if (!product) return null;
  
  console.log("product🦺", product);

  return (
    <div className="px-4 flex flex-col gap-10 py-4">
      <div className="flex justify-between items-center ">
        <nav className="grow min-w-0">
          <div className="breadcrumb-container flex overflow-x-auto overflow-y-hidden hide-scrollbar">
            <BreadcrumbContainer
              category={category}
              submenu={submenu}
              item={item}
              product={product}
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
      <ProductMain productId={productId} />
    </div>
  );
}
