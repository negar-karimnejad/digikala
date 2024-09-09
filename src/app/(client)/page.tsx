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
import ArticleModel from "models/Article";
import CategoryModel from "models/Category";
import ProductModel from "models/Product";
import StoryModel from "models/Story";
import SubmenuModel from "models/Submenu";
import connectToDB from "../../../lib/mongodb";

export default async function Home() {
  connectToDB();
  const articles = await ArticleModel.find({}).lean();
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

  const sortedArticles = articles.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const serializedArticles = serializeDoc(sortedArticles);

  return (
    <>
      <StorySlider stories={serializedStories} />
      <Hero />
      <Services />
      <Offers products={serializedProducts} />
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
      <div className="bg-[url('/banner/hotdog-banner.webp')] bg-cover bg-left bg-no-repeat h-40 rounded-2xl mx-3 my-5"></div>
      <SelectedProducts products={serializedProducts} />
      <Bestseller
        products={serializedProducts}
        title="داغ ترین چند ساعت گذشته"
      />
      <Articles articles={serializedArticles} />
      <FloatingSupportButton />
      <FloatingSupermarketButton />
    </>
  );
}
