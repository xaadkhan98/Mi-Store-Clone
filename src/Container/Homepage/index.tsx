import React from "react";
import CarouselComponent from "./components/CarouselComponent";

import SlickSlider from "./components/Slick";
import HeroSection from "./components/HeroSection/HeroSection";
import Collection from "./components/Collection/Collection";

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
