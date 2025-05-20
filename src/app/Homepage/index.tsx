import React from "react";
import CarouselComponent from "./components/Carousel";
import Collection from "./components/Collection";
import HeroSection from "./components/HeroSection";
import SlickSlider from "./components/Slick";

const Homepage: React.FC = () => {
  return (
    <div>
      <CarouselComponent />
      <Collection />
      <SlickSlider />
      <HeroSection />
    </div>
  );
};

export default Homepage;
