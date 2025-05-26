import { StarFilled } from "@ant-design/icons";
import { Button, Flex, Image, Space } from "antd";
import { Col, Row, Typography } from "antd";
import Title from "antd/es/typography/Title";
import {
  StyledButtons,
  StyledContent,
  StyledMedals,
  StyledRow,
  StyledSpace,
  StyledStarFilled,
} from "./components/styles";
import React from "react";
const { Text } = Typography;

const HeroSection = () => {
  return (
    <React.Fragment>
      <StyledRow wrap gutter={[15, 15]}>
        <Col span={12}>
          <Image src="./Hero-Section/Hero-Section (5).webp" alt="hero-img" />
        </Col>
        <Col span={12}>
          <Image src="./Hero-Section/Hero-Section (4).webp" alt="hero-img" />
        </Col>
      </StyledRow>
      <Row style={{ paddingTop: "1.5rem" }} gutter={[15, 15]}>
        <Col span={12}>
          <Image src="./Hero-Section/Hero-Section (3).webp" alt="" />
        </Col>
        <Col span={6}>
          <Image
            height="100%"
            src="./Hero-Section/Hero-Section (2).webp"
            alt=""
          />
        </Col>
        <Col span={6}>
          <Image
            height="100%"
            src="./Hero-Section/Hero-Section (1).webp"
            alt=""
          />
        </Col>
      </Row>
      <StyledSpace align="start">
        <Space>
          <Image
            src="./Hero-Section/Hero-Section (7).webp"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <Title level={5}>
            Redmi A3 VS Redmi A5 Detailed Comparison for Smartphone Buyers
          </Title>
          <Text style={{ width: "80%", alignSelf: "center" }}>
            Compare Redmi A3 vs Redmi A5 in detail. Explore specs, features, and
            performance to help you choose the best smartphone for your needs.
          </Text>
        </Space>
        <Space>
          <Image
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src="./Hero-Section/Hero-Section (6).webp"
            alt=""
          />
          <Image
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src="./Hero-Section/Hero-Section (8).webp"
            alt=""
          />
        </Space>
      </StyledSpace>

      <StyledButtons>
        <Button>View All</Button>
        <Button>View All</Button>
      </StyledButtons>

      <StyledMedals>
        <Space>
          <StyledStarFilled />
          <StyledStarFilled />
          <StyledStarFilled />
          <StyledStarFilled />
          <StyledStarFilled />
        </Space>

        <Title level={5}>3519 Reviews</Title>

        <Flex justify="space-between">
          <Image width={100} src="./Hero-Section/Hero-Medals (1).svg" alt="" />
          <Image width={100} src="./Hero-Section/Hero-Medals (2).svg" alt="" />
          <Image width={100} src="./Hero-Section/Hero-Medals (3).svg" alt="" />
        </Flex>
      </StyledMedals>
      <StyledContent>
        <Title level={4}>Mi Store</Title>
        <Title level={5} style={{ fontWeight: "500" }}>
          Official Xiaomi Store in Pakistan – Your Retail Therapy!
        </Title>
        <Text style={{ color: "black", fontWeight: "400" }}>
          With the surge of online mobile shopping in Pakistan, Mistore.pk has
          become your one-stop shop for all Xiaomi Products. As an official
          Xiaomi store, we provide all mi Smartphone and eco-products, including
          those made by its subsidiaries Redmi and POCO. Being the business
          partners of Xiaomi Pakistan, we have the most diverse range of
          authentic Xiaomi smart devices within the categories of Audio, Home
          Xiaomi Security Cameras, Mobile phones, Smart Devices, Xiaomi/Redmi
          Power Bank, Charger & Cables, etc. In addition, we offer economical
          and cheerful Xiaomi, POCO & Redmi mobiles with ultra-modern
          functionality.
        </Text>
        <Title level={5}>
          Enjoy the Xiaomi Sale's & Deals at Xiaomi Official Store - MiStore
        </Title>
        <Text style={{ color: "black", fontWeight: "400" }}>
          Here at Mistore.pk, you can avail exclusive discounts offered by
          Xiaomi and discover unmatched prices. We assure you that all the
          products on our website are 100% authentic and come with genuine
          packaging along with their warranties.You can upgrade your lifestyle
          with smart, trendy and affordable tech products without stepping out
          of your comfort zone! There is an extensive range of innovative
          gadgets under each category. Whether you are starting your fitness
          journey, updating the surveillance system of your home or need some
          travel essentials, Mistore.pk has got you covered!
        </Text>
      </StyledContent>
    </React.Fragment>
  );
};

export default HeroSection;
