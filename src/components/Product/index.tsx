import { Carousel, Image, Row, Typography } from "antd";
import { ProductType } from "../../utils/products";

import type { DescriptionsProps } from "antd";

import { useDispatch } from "react-redux";
import cartSlice from "../../redux/cartSlice";
import {
  CarouselContainer,
  ContentContainer,
  GlobalStyles,
  StyledButton,
  StyledDescriptions,
  StyledDivider,
  StyledImage,
  StyledShoppinCartIcon,
  StyledSpace,
} from "./components/styles";
import { WARRANTY_IMAGE } from "./components/helper";

import React from "react";

const { Title } = Typography;

const Product: React.FC<ProductType> = (product) => {
  const dispatch = useDispatch();

  // Fetching keyfeatures from product
  const { keyFeatures } = product || {};

  // Fetching all properties from key features
  const {
    display,
    resolution,
    processorModel,
    processorProcess,
    processorCores,
    cpuSpeed,
    refreshRate,
    fingerprintUnlock,
    faceUnlock,
    rearCamera,
    frontCamera,
    battery,
    charging,
    otherFeatures,
    generalFeatures,
  }: any = keyFeatures || {};

  // Items Array from Ant Design
  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Display",
      children: display,
    },
    {
      key: "2",
      label: "Resolution",
      children: resolution,
    },
    {
      key: "3",
      label: "Processor Model",
      children: processorModel,
    },
    {
      key: "4",
      label: "Processor Process",
      children: processorProcess,
    },
    {
      key: "5",
      label: "Processor Cores",
      children: processorCores,
    },
    {
      key: "6",
      label: "Cpu Speed",
      children: cpuSpeed,
    },
    {
      key: "7",
      label: "Refresh Cores",
      children: refreshRate,
    },
    {
      key: "8",
      label: "Finger Print Unlock",
      children: fingerprintUnlock,
    },
    {
      key: "9",
      label: "Face Unlock",
      children: faceUnlock,
    },
    {
      key: "10",
      label: "Rear Camera",
      children: rearCamera,
    },
    {
      key: "11",
      label: "Front Camera",
      children: frontCamera,
    },
    {
      key: "12",
      label: "Face Unlock",
      children: faceUnlock,
    },
    {
      key: "13",
      label: "Battery",
      children: battery,
    },
    {
      key: "14",
      label: "Charging",
      children: charging,
    },
    {
      key: "15",
      label: "Other Key Features",
      children: otherFeatures,
    },
    {
      key: "16",
      label: "General Features",
      children: generalFeatures,
    },
  ];

  // Function to execute when add to cart button is pressed
  const handleCartButton = (product: any) => {
    dispatch(cartSlice.actions.addToCart(product));
  };

  //Format Currency
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PKR",
  }).format(product.price);

  return (
    <React.Fragment>
      <GlobalStyles />
      <Row>
        {/* Image carousel */}
        <CarouselContainer>
          <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={1000}>
            {/* Map out all the links to Image tag */}
            {product.displayImages?.map((displayImg, index) => (
              <StyledImage key={index} src={displayImg} />
            ))}
          </Carousel>
        </CarouselContainer>

        {/* Keyfeatures Content */}
        <ContentContainer>
          <StyledSpace>
            <Title level={2}>{product.name}</Title>
            {/* In order to keep the amount look like currency */}
            <Title level={5}>{formattedAmount}</Title>
            <StyledDivider />
            {/* Render description component if key features are there */}
            {keyFeatures && (
              <StyledDescriptions title="Key Features" items={items} />
            )}
            <StyledDivider />
            <Image preview={false} src={WARRANTY_IMAGE} />
            {/* Add to Cart Button */}
            <StyledButton onClick={() => handleCartButton(product)}>
              <StyledShoppinCartIcon />
              Add to Cart
            </StyledButton>
          </StyledSpace>
        </ContentContainer>
      </Row>
    </React.Fragment>
  );
};

export default Product;
