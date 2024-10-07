import Articles from "@/components/home/Articles";
import {
  FirstBanner,
  LastBanner,
  MiddleBanner,
} from "@/components/home/Banner";
import Bestseller from "@/components/home/Bestseller";
import Brands from "@/components/home/Brands";
import CategoriesPage from "@/components/home/CategoriesPage";
import Digiclub from "@/components/home/Digiclub";
import Hero from "@/components/home/Hero";
import MarketOffers from "@/components/home/MarketOffers";
import Offers from "@/components/home/Offers";
import ProductsCard from "@/components/home/ProductsCard";
import SelectedProducts from "@/components/home/SelectedProducts";
import Services from "@/components/home/Services";
import StorySlider from "@/components/home/StorySlider";
import FloatingSupermarketButton from "@/components/ui/FloatingSupermarketButton";
import FloatingSupportButton from "@/components/ui/FloatingSupportButton";
import { serializeDoc } from "@/utils/serializeDoc";
import { Article } from "@/utils/types";
import connectToDB from "config/mongodb";
import ArticleModel from "models/Article";
import CategoryModel from "models/Category";
import ProductModel from "models/Product";
import StoryModel from "models/Story";
import SubmenuModel from "models/Submenu";
import Link from "next/link";

export default async function Home() {
  await connectToDB();
  const articles: Article[] = await ArticleModel.find({}).lean();
  const stories = await StoryModel.find({}).lean();
  const categories = await CategoryModel.find({}).lean();
  const submenus = await SubmenuModel.find({}).lean();
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

  // Serialize data before passing to client
  const serializedStories = serializeDoc(stories);
  const serializedCategories = serializeDoc(categories);
  const serializedProducts = serializeDoc(products);
  const serializedSubmenus = serializeDoc(submenus);

  // Discount Products
  const discountProducts = products.filter((product) => product.discount > 0);
  const offerProducts = discountProducts
    ?.slice()
    .sort((a, b) => b.discount - a.discount)
    .slice(0, 12);

  // Sort Articles by published date
  const sortedArticles = articles
    .slice()
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  const serializedArticles = serializeDoc(sortedArticles);
  const serializedOfferProducts = serializeDoc(offerProducts);

  return (
    <>
      <StorySlider stories={serializedStories} />
      <Hero />
      <Services />
      <Offers products={serializedOfferProducts} />
      <MarketOffers />
      <FirstBanner />
      <CategoriesPage categories={serializedCategories} />
      <MiddleBanner />
      <Brands />
      <LastBanner />
      <ProductsCard
        cardNum={"first"}
        products={serializedProducts}
        categories={serializedCategories}
        submenus={serializedSubmenus}
      />
      <Digiclub />
      <Bestseller products={serializedProducts} title="پرفروش‌ترین کالاها" />
      <ProductsCard
        cardNum={"last"}
        products={serializedProducts}
        categories={serializedCategories}
        submenus={serializedSubmenus}
      />
      <Link href="/products/66e595067d54b0fb3e317fcd">
        <div className="bg-[url('/banner/hotdog-banner.webp')] bg-cover bg-left bg-no-repeat h-40 rounded-2xl mx-3 my-5"></div>
      </Link>
      <SelectedProducts products={serializedProducts} />
      <Bestseller
        products={serializedProducts}
        title="داغ ترین چند ساعت گذشته"
      />
      <Articles articles={serializedArticles} title="خواندنی‌ها" />
      <FloatingSupportButton />
      <FloatingSupermarketButton />
    </>
  );
}
