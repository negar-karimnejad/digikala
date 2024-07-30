"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import {
  FirstBanner,
  LastBanner,
  MiddleBanner,
} from "@/components/home/Banner";
import Bestseller from "@/components/home/Bestseller";
import Brands from "@/components/home/Brands";
import Categories from "@/components/home/Categories";
import Digiclub from "@/components/home/Digiclub";
import Hero from "@/components/home/Hero";
import Mag from "@/components/home/Mag";
import MarketOffers from "@/components/home/MarketOffers";
import Offers from "@/components/home/Offers";
import ProductsCard from "@/components/home/ProductsCard";
import SelectedProducts from "@/components/home/SelectedProducts";
import Services from "@/components/home/Services";
import StorySlider from "@/components/home/StorySlider";
import FloatingSupermarketButton from "@/components/ui/FloatingSupermarketButton";
import FloatingSupportButton from "@/components/ui/FloatingSupportButton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Homepage() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 60 * 1000,
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <StorySlider />
      <Hero />
      <Services />
      <Offers />
      <MarketOffers />
      <FirstBanner />
      <Categories />
      <MiddleBanner />
      <Brands />
      <LastBanner />
      <ProductsCard />
      <Digiclub />
      <Bestseller title="پرفروش‌ترین کالاها" />
      <ProductsCard />
      <div className="bg-[url('/banner.webp')] bg-cover bg-left bg-no-repeat h-40 rounded-2xl mx-3 my-5"></div>
      <SelectedProducts />
      <Bestseller title="داغ ترین چند ساعت گذشته" />
      <Mag />
      <FloatingSupportButton />
      <FloatingSupermarketButton />
    </QueryClientProvider>
  );
}
