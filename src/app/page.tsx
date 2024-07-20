"use client";
import Header from "@/components/header/Header";
import Hero from "@/components/home/Hero";
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
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Header />
        <StorySlider />
        <Hero />
        <Services />
        <Offers />
      </QueryClientProvider>
    </>
  );
}

export default Home;
