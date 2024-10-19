import NotFound from "@/app/not-found";
import CategoryHero from "@/components/category/CategoryHero";
import Articles from "@/components/home/Articles";
import Bestseller from "@/components/home/Bestseller";
import Brands from "@/components/home/Brands";
import Offers from "@/components/home/Offers";
import SelectedProducts from "@/components/home/SelectedProducts";
import { serializeDoc } from "@/utils/serializeDoc";
import { Category, Product } from "@/utils/types";
import ArticleModel from "models/Article";
import CategoryModel from "models/Category";
import ProductModel from "models/Product";
import Image from "next/image";
import Link from "next/link";

export default async function CategoryProducts({ id }: { id: string }) {
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

  if (!category) {
    return NotFound();
  }

  const articles = await ArticleModel.find({
    categoryId: category?._id,
  }).lean();

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

  // Mapping submenus to their first product's thumbnail
  const submenuProductImages = category?.submenus.map((submenu) => {
    // Find the first product associated with the current submenu
    const firstProduct = categoryProducts.find(
      (product) => product.submenuId === submenu._id.toString()
    );
    return firstProduct?.thumbnail || "";
  });

  const serializedCategory = serializeDoc(category);
  const serializedcategoryProducts = serializeDoc(categoryProducts);
  const serializedArticles = serializeDoc(articles);
  const serializedOfferProducts = serializeDoc(offerProducts);

  return (
    <div className="space-y-10">
      <CategoryHero category={serializedCategory} />
      <Offers products={serializedOfferProducts} />

      {/* Shopping by category */}
      {category.submenus.length > 0 && (
        <div>
          <h3 className="font-irsansb text-lg text-center">
            خرید بر اساس دسته‌بندی
          </h3>
          <div className="mt-10 px-4 flex gap-10 items-center lg:justify-center flex-wrap">
            {category.submenus?.map((submenu, index) =>
              submenuProductImages[index] ? (
                <div key={submenu._id.toString()}>
                  <Link
                    href={submenu.href}
                    className="relative mb-5 flex flex-col items-center gap-2"
                  >
                    <Image
                      alt={submenu.title}
                      width={120}
                      height={120}
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

      <Brands />

      {/* Banners */}
      <div className="grid grid-cols-12 gap-4 mx-3">
        {category.banner?.map((item, index) => (
          <div className="col-span-6 max-lg:col-span-12" key={index}>
            <Link href="">
              <Image
                width={1700}
                height={1700}
                className="rounded-xl object-cover w-full"
                src={item}
                alt={`Banner ${index + 1}`}
              />
            </Link>
          </div>
        ))}
      </div>

      <Bestseller
        products={serializedcategoryProducts}
        title="پرفروش‌ترین کالاها"
      />
      <div>
        <Image
          alt="زنگ تفریح دیجی‌کالا"
          title="زنگ تفریح دیجی‌کالا"
          width={2000}
          height={500}
          src="/069665291f9d877a19922f0c741e7620ad85cf6b_1725653469.gif"
        />
      </div>

      <SelectedProducts products={serializedcategoryProducts} />

      {articles.length > 0 && (
        <Articles articles={serializedArticles} title="مطالب مرتبط" />
      )}
    </div>
  );
}
