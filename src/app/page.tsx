import Header from "@/components/header/Header";
import Hero from "@/components/home/Hero";
import Offers from "@/components/home/Offers";
import Services from "@/components/home/Services";
import StorySlider from "@/components/home/StorySlider";

function Home() {
  return (
    <>
      <Header />
      <StorySlider />
      <Hero />
      <Services />
      <Offers />
    </>
  );
}

export default Home;
