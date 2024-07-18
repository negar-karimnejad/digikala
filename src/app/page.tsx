import Header from "@/components/header/Header";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import StorySlider from "@/components/home/StorySlider";

function Home() {
  return (
    <>
      <Header />
      <StorySlider />
      <Hero />
      <Services />
    </>
  );
}

export default Home;
