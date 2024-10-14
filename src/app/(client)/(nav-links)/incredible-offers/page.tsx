import MarketOffers from "@/components/home/MarketOffers";
import Offers from "@/components/home/Offers";
import SelectedProducts from "@/components/home/SelectedProducts";
import IncredibleOffersCategoriesSlider from "@/components/incredible-offers/IncredibleOffersCategoriesSlider";
import IncredibleOffersProductsSlider from "@/components/incredible-offers/IncredibleOffersProductsSlider";
import { serializeDoc } from "@/utils/serializeDoc";
import { Product } from "@/utils/types";
import { Sparkles } from "lucide-react";
import CategoryModel from "models/Category";
import ProductModel from "models/Product";
import Image from "next/image";
import Link from "next/link";

export default async function IncredibleOffers() {
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

  // Discount Products
  const categories = await CategoryModel.find({}).lean();
  const discountProducts = products.filter(
    (product: Product) => product.discount > 0
  );

  const SortedOfferProductsByRating = discountProducts
    ?.slice()
    .sort((a, b) => b.rating - a.rating);

  const SortedOfferProductsByLowerDiscount = discountProducts
    ?.slice()
    .sort((a, b) => a.discount - b.discount);

  const serializedAllProducts = serializeDoc(products);
  const serializedCategories = serializeDoc(categories);
  const serializedOfferProducts = serializeDoc(SortedOfferProductsByRating);

  return (
    <div className="flex flex-col gap-10">
      {/* hero */}
      <div className="w-full">
        <div className="w-full h-16 bg-rose-500 flex items-center justify-center">
          <Image
            alt="incredible-offers"
            src="/incredible-offers/incredible-offers.svg"
            width={600}
            height={600}
          />
        </div>
        <Link href="/products/66f16cdef1ce8839b36b8553">
          <Image
            alt="incredible-offers-banner"
            src="/incredible-offers/incredible-offers-banner.webp"
            width={1500}
            height={1500}
            className="w-full lg:h-80 h-64 object-cover"
            title="incredible-offers-banner"
          />
        </Link>
      </div>

      {/* products slider */}
      <div className="relative lg:px-5 overflow-hidden bg-rose-600 lg:rounded-2xl py-4 lg:mx-3">
        <div className="absolute brightness-200 right-0 top-0 w-full bg-[url('/nav-links-svg.svg')] h-36 opacity-80"></div>
        <div className="flex items-center gap-2 mb-5 max-lg:mx-5">
          <Sparkles size={20} className="text-white" />
          <p className="font-irsansb text-white">
            <span className="relative">شگفت‌انگیز روز</span>
          </p>
        </div>
        <IncredibleOffersProductsSlider
          products={SortedOfferProductsByLowerDiscount}
        />
      </div>

      {/* categories slider */}
      <IncredibleOffersCategoriesSlider categories={serializedCategories} />
      {/* offers */}
      <Offers products={serializedOfferProducts} />
      <div className="-mt-5">
        <MarketOffers />
      </div>
      <div className="-mt-10">
        <SelectedProducts products={serializedAllProducts} />
      </div>
    </div>
  );
}
