import CategoryHero from "@/components/category/CategoryHero";
import Offers from "@/components/home/Offers";
import { Category, Product } from "@/types/types";
import { serializeDoc } from "@/utils/serializeDoc";
import CategoryModel from "models/Category";
import ProductModel from "models/Product";
import Image from "next/image";
import Link from "next/link";

export default async function CategoryPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const category: Category = await CategoryModel.findOne({
    href: `/category/${id}`,
  })
    .populate({
      path: "submenus",
      populate: {
        path: "items",
      },
    })
    .lean();

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

  // Category Products
  const categoryProducts = products.filter(
    (product) => product.category.href === `/category/${id}`
  );

  // Discount Products
  const discountProducts = categoryProducts.filter(
    (product) => product.discount > 0
  );
  const offerProducts = discountProducts
    ?.slice()
    .sort((a, b) => b.discount - a.discount)
    .slice(0, 12);

  const serializedCategory = serializeDoc(category);

  // Mapping submenus to their first product's thumbnail
  const submenuProductImages = category?.submenus.map((submenu) => {
    // Find the first product associated with the current submenu
    const firstProduct = categoryProducts.find(
      (product) => product.submenuId === submenu._id.toString()
    );
    return firstProduct?.thumbnail || "";
  });

  if (!category) return null;
  return (
    <div className="space-y-10">
      <CategoryHero category={serializedCategory} />
      <Offers products={offerProducts} />

      {category.submenus.length > 0 && (
        <div>
          <h3 className="font-irsansb text-lg text-center">
            خرید بر اساس دسته‌بندی
          </h3>
          <div className="mt-10 flex gap-10 items-center justify-center flex-wrap">
            {category.submenus?.map((submenu, index) =>
              submenuProductImages[index] ? (
                <div key={submenu._id.toString()}>
                  <Link
                    href={submenu.href}
                    className="relative mb-5 flex flex-col items-center gap-4"
                  >
                    <Image
                      alt={submenu.title}
                      width={140}
                      height={140}
                      src={submenuProductImages[index]}
                    />
                    <p className="text-sm">{submenu.title}</p>
                  </Link>
                </div>
              ) : null
            )}
          </div>
        </div>
      )}
    </div>
  );
}
