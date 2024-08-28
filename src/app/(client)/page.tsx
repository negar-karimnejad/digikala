import {
  FirstBanner,
  LastBanner,
  MiddleBanner,
} from "@/components/home/Banner";
import Brands from "@/components/home/Brands";
import CategoriesPage from "@/components/home/CategoriesPage";
import Digiclub from "@/components/home/Digiclub";
import Hero from "@/components/home/Hero";
import Mag from "@/components/home/Mag";
import MarketOffers from "@/components/home/MarketOffers";
import Offers from "@/components/home/Offers";
import ProductsCard from "@/components/home/ProductsCard";
import SelectedProducts from "@/components/home/SelectedProducts";
import Services from "@/components/home/Services";
import FloatingSupermarketButton from "@/components/ui/FloatingSupermarketButton";
import FloatingSupportButton from "@/components/ui/FloatingSupportButton";
import connectToDB from "configs/db";
import ProductModel from "models/Product";
import StoryModel from "models/Story";

export default async function Home() {
  connectToDB();
  // const stories = await StoryModel.find({});
  // const products = await ProductModel.find({});

  return (
    <>
      {/* <StorySlider stories={stories} /> */}
      <Hero />
      <Services />
      <Offers />
      <MarketOffers />
      <FirstBanner />
      <CategoriesPage />
      <MiddleBanner />
      <Brands />
      <LastBanner />
      <ProductsCard />
      <Digiclub />
      {/* <Bestseller products={products} title="پرفروش‌ترین کالاها" /> */}
      <ProductsCard />
      <div className="bg-[url('/banner/hotdog-banner.webp')] bg-cover bg-left bg-no-repeat h-40 rounded-2xl mx-3 my-5"></div>
      <SelectedProducts />
      {/* <Bestseller products={products} title="داغ ترین چند ساعت گذشته" /> */}
      <Mag />
      <FloatingSupportButton />
      <FloatingSupermarketButton />
    </>
  );
}
