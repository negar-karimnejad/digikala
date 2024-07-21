"use client";
import Header from "@/components/header/Header";
import { FirstBanner, LastBanner, MiddleBanner } from "@/components/home/Banner";
import Hero from "@/components/home/Hero";
import MarketOffers from "@/components/home/MarketOffers";
import Offers from "@/components/home/Offers";
import Services from "@/components/home/Services";
import StorySlider from "@/components/home/StorySlider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Home() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 60 * 1000,
        staleTime: 0,
      },
    },
  });
  return (
    //mb-96 حذف کن بعدن
    <div className="mb-96">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Header />
        <StorySlider />
        <Hero />
        <Services />
        <Offers />
        <MarketOffers />
        <FirstBanner />

        <MiddleBanner />
        
        <LastBanner />
      </QueryClientProvider>
    </div>
  );
}

export default Home;
