import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productsDescription } from "../../../utils/products";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const { Title, Text } = Typography;

const StyledSlick = styled.div`
  margin: 1rem;

  @media screen and (max-width: 501px) {
    display: none;
  }
`;

const SlickSlider: React.FC = () => {
  const settings: import("react-slick").Settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 1000,
  };

  return (
    <StyledSlick>
      <Title level={3} style={{ textAlign: "center" }}>
        Featured Products
      </Title>
      <Slider {...settings}>
        {/* Map out all the products from Product Description file */}
        {productsDescription.map(({ category, id, images, name, price }) => {
          return (
            // Target only "smartphones" category for the slider
            category === "smartphones" && (
              <Link
                to={`products/${id}`}
                onClick={() => {
                  // When navigated to product page it should scroll to top
                  window.scrollTo(0, 0);
                }}
              >
                <img src={images[0]} alt="" />
                <Title level={5}>{name}</Title>
                <Text>PKR {price}</Text>
              </Link>
            )
          );
        })}
      </Slider>
    </StyledSlick>
  );
};

export default SlickSlider;
