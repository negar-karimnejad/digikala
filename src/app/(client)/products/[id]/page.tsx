import BreadcrumbContainer from "@/components/product/BreadcrumbContainer";
import db from "@/db/db";
import { Megaphone, Store } from "lucide-react";
import Image from "next/image";
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
      category: { include: { submenus: { include: { items: true } } } },
    },
  });

  const category = product.category;
  const submenu = product.category.submenus.find(
    (submenu) => submenu.categoryId === product.category.id
  );

  const item = submenu.items.find((item) => item.submenuId === submenu.id);

  if (!product) return null;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <BreadcrumbContainer
          category={category}
          submenu={submenu}
          item={item}
          product={product}
        />
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

      <div className="grid grid-cols-12">
        <div className="p-4 bg-rose-500 col-span-4 max-lg:col-span-12 justify-center items-center">
          <Image
            alt={product.title}
            width={450}
            height={450}
            src={product.thumbnail}
            className="object-cover"
          />
        </div>
        <div className="bg-green-500 col-span-5 max-lg:col-span-12">2</div>
        <div className="bg-blue-500 col-span-3 max-lg:col-span-12">1</div>
      </div>
    </div>
  );
}
