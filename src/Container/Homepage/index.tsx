import React from "react";
import CarouselComponent from "./components/CarouselComponent";
import SlickSlider from "./components/Slick";
import HeroSection from "./components/HeroSection/HeroSection";
import Collection from "./components/Collection/Collection";

const Homepage: React.FC = () => {
  return (
    <React.Fragment>
      <CarouselComponent />
      <Collection />
      <SlickSlider />
      <HeroSection />
    </React.Fragment>
  );
};

export default Homepage;
