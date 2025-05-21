import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productsDescription } from "../../../utils/products";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.slick-prev::before, .slick-next::before {
    color: orange !important;
}
h5.ant-typography{
  font-size: 1rem;
}
span.ant-typography{
  font-weight: 500;
  color: orange;
  font-size: 0.8rem;
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
    <div style={{ margin: "1rem" }}>
      <GlobalStyle />
      <Typography.Title level={3} style={{ textAlign: "center" }}>
        Featured Products
      </Typography.Title>
      <Slider {...settings}>
        {/* Map out all the products from Product Description file */}
        {productsDescription.map((product) => {
          return (
            // Target only "smartphones" category for the slider
            product.category === "smartphones" && (
              <Link
                to={`products/${product.id}`}
                onClick={() => {
                  // When navigated to product page it should scroll to top
                  window.scrollTo(0, 0);
                }}
              >
                <img src={product.images[0]} alt="" />
                <Typography.Title level={5}>{product.name}</Typography.Title>
                <Typography.Text>{product.price}</Typography.Text>
              </Link>
            )
          );
        })}
      </Slider>
    </div>
  );
};

export default SlickSlider;
