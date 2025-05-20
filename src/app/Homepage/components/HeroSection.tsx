import React from "react";
import styled from "styled-components";
import { StarFilled } from "@ant-design/icons";
import { Button, Image, Space } from "antd";
import { Col, Row, Typography, Card } from "antd";
import Title from "antd/es/typography/Title";

const { Text } = Typography;

const StyledSpace = styled(Space)`
  display: flex;
  padding-top: 1rem;
  div {
    display: flex;
    flex-direction: column;

    justify-content: start;
    flex: 1;
    text-align: center;
  }
`;

const StyledButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 1.5rem;
`;

const StyledHero = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 10px;
  padding: 0 5%;
  margin-top: 3rem;
  div {
    display: flex;
    a {
      width: 100%;
      margin: 0 0.5rem;
      img {
        width: 100%;
      }
    }
  }
  span {
    display: flex;
    div {
      a {
        width: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  margin: 2rem 5%;
  div {
    a {
      text-decoration: none;
      color: black;
      text-align: center;
      img {
        height: auto;
        width: 100%;
        object-fit: cover;
      }
      h4 {
        margin: 0;
        margin: 1rem 0 0.35rem 0;
      }
      p {
        margin: 0;
      }
    }
  }
`;

const StyledButton = styled(Space)`
  /* padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: center; */
  a {
    margin: 0 auto;
    p {
      font-size: 18px;
      text-transform: capitalize;
      font-weight: 600;
      font-family: "CamphorPro-Regular";
      text-decoration: none;
      /* background: #ff6900; */
      color: #ff6700;
      border: 1px solid #f5f5f5;
      background-color: #e1e1e1;
      padding: 12px 20px;
      text-decoration: none;
      text-align: center;
    }
    p:hover {
      background-color: #fff;
      color: #000;
    }
  }
`;

const StyledMedals = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  padding: 2rem 5%;
  span {
  }
  div {
    width: 2px;
    height: 100%;
    background-color: yellow;
    border-right: 2 dotted black;
  }
  span > img {
    padding: 0.5rem;
    width: 100px;
    height: 100%;
  }
`;
const StyledContent = styled.div`
  padding: 0 5%;
`;

const HeroSection = () => {
  return (
    <>
      <Row wrap gutter={[15, 15]}>
        <Col span={12}>
          <Image
            src="./Hero-Section/Hero-Section (5).webp"
            alt="hero-img"
            width="100%"
          />
        </Col>
        <Col span={12}>
          <Image
            src="./Hero-Section/Hero-Section (4).webp"
            alt="hero-img"
            width="100%"
          />
        </Col>
      </Row>
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
        <div>
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
        </div>
        <div>
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
        </div>
      </StyledSpace>

      <StyledButtons>
        <Button
          style={{
            border: "1px solid black",
            borderRadius: 0,
            padding: "1.25rem 1.5rem",
            fontWeight: "700",
          }}
        >
          View All
        </Button>
        <Button
          style={{
            border: "1px solid black",
            borderRadius: 0,
            padding: "1.25rem 1.5rem",
            fontWeight: "700",
          }}
        >
          View All
        </Button>
      </StyledButtons>

      <StyledMedals>
        <span>
          <span>
            <StarFilled style={{ color: "green" }} />
          </span>
          <span>
            <StarFilled style={{ color: "green" }} />
          </span>
          <span>
            <StarFilled style={{ color: "green" }} />
          </span>
          <span>
            <StarFilled style={{ color: "green" }} />
          </span>
          <span>
            <StarFilled style={{ color: "green", paddingRight: "0.5rem" }} />
          </span>
        </span>
        <span>3519 Reviews</span>
        <div> </div>
        <span>
          <img src="./Hero-Section/Hero-Medals (1).svg" alt="" />
          <img src="./Hero-Section/Hero-Medals (2).svg" alt="" />
          <img src="./Hero-Section/Hero-Medals (3).svg" alt="" />
        </span>
      </StyledMedals>
      <StyledContent>
        <h1>Mi Store</h1>
        <h2>Official Xiaomi Store in Pakistan – Your Retail Therapy!</h2>
        <p>
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
        </p>
        <h2>
          Enjoy the Xiaomi Sale's & Deals at Xiaomi Official Store - MiStore
        </h2>
        <p>
          Here at Mistore.pk, you can avail exclusive discounts offered by
          Xiaomi and discover unmatched prices. We assure you that all the
          products on our website are 100% authentic and come with genuine
          packaging along with their warranties.You can upgrade your lifestyle
          with smart, trendy and affordable tech products without stepping out
          of your comfort zone! There is an extensive range of innovative
          gadgets under each category. Whether you are starting your fitness
          journey, updating the surveillance system of your home or need some
          travel essentials, Mistore.pk has got you covered!
        </p>
      </StyledContent>
    </>
  );
};

export default HeroSection;
