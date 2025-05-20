import React from "react";
import styled from "styled-components";
import Input from "antd/es/input/Input";
import { Button, Col, Image, Row, Space } from "antd";
import Compact from "antd/es/space/Compact";
import {
  InfoCircleOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  .ant-input-outlined:hover,
  ant-input-outlined:focus {
    border-color: orange !important;
  }
  .ant-btn:hover {
    color: orange !important;
    border-color: orange !important;
  }
  div > img {
    padding: 0 0.25rem;
    cursor: pointer;
    &:hover {
      transition: all ease-in-out 0.2s;
      transform: scale(1.2);
    }
  }
`;

const StyledHelpCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b7b7b7;
  color: white;
  font-size: 0.875rem;
  border-right: 1px solid white;
  span {
    padding: 1rem 0.25rem;
  }
`;

const StyledPolicies = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  cursor: pointer;

  div:nth-child(1) {
    background-color: #ff6d00;
    width: 100%;
  }
  div:nth-child(2) {
    background-color: #ff9505;
    width: 100%;
  }
  div:nth-child(3) {
    width: 100%;
    background-color: #eeb902;
  }
  div > a > img {
    width: 45%;
    padding: 0.5rem 0;
  }
  div:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
    border-radius: 0.5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const StyledContact = styled.div`
  display: flex;
  padding: 1rem 0;
  span {
    width: 100%;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  span > div > img {
    padding: 0.25rem;
    cursor: pointer;
    filter: grayscale(100%);
  }
  span > div > img:hover {
    filter: grayscale(0%);
  }

  span > div > p {
    margin: 0;
    /* padding: 0 0.25rem; */
  }
  span > div > h3 {
    margin: 0;
    margin: 0.5rem 0;
  }
`;
const StyledList = styled.div`
  display: flex;
  color: white;
  font-size: 0.95rem;
  div {
    width: 100%;
    text-align: center;
    background-color: #b7b7b7;
    padding: 1rem;
    border-right: 1px solid white;
    span {
      padding: 0 0.25rem;
    }
  }
`;

const StyledDetails = styled.div`
  display: flex;
  background-color: #212121;
  color: #b0b0b0;
  font-size: 0.75rem;
  padding: 4rem 1rem;
  div {
    width: 100%;
    padding-top: 2rem;
  }
  div > ul {
    padding: 0;
  }
  div > ul > li {
    list-style: none;
    padding-top: 0.5rem;
    a {
      text-decoration: none;
      color: #b0b0b0;
    }
  }
  div > ul > li > a:hover {
    color: white;
  }
  div > span {
    display: flex;
    align-items: center;
    justify-content: start;

    img {
      width: 22%;
      background-color: white;
      margin-right: 0.5rem;
      border-radius: 0.5rem;
    }
  }
`;
const FooterComponent = () => {
  return (
    <>
      <Row>
        <Col span={8}>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: " #ff6d00",
              height: "100%",
            }}
            href=""
          >
            <Image
              preview={false}
              src="/Hero-Section/policies (3).avif"
              width="50%"
              alt=""
            />
          </a>
        </Col>
        <Col span={8}>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: " #ff9505",
              height: "100%",
            }}
            href=""
          >
            <Image
              preview={false}
              src="/Hero-Section/policies (2).avif"
              width="50%"
              alt=""
            />
          </a>
        </Col>
        <Col span={8}>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: " #eeb902",
              height: "100%",
            }}
            href=""
          >
            <Image
              preview={false}
              src="/Hero-Section/policies (1).avif"
              width="50%"
              alt=""
            />
          </a>
        </Col>
      </Row>

      <Row>
        <StyledCol span={12}>
          <div>
            <h3>Let's stay in touch</h3>
            <p>Get updates on sales specials and more</p>
          </div>
          <Space.Compact style={{ width: "40%" }}>
            <Input placeholder="Enter Your Email Address" />
            <Button>&gt;</Button>
          </Space.Compact>
        </StyledCol>

        <StyledCol span={12}>
          <div>
            <h3>Follow Mi</h3>
            <p>We want to hear from you!</p>
          </div>
          <div>
            <img src="/Socials/facebook.png" alt="" />
            <img src="/Socials/youtube.png" alt="" />
            <img src="/Socials/instagram.png" alt="" />
            <img src="/Socials/twitter.png" alt="" />
            <img src="/Socials/tiktok.png" alt="" />
          </div>
        </StyledCol>
      </Row>

      <Row>
        <StyledHelpCol span={8}>
          <InfoCircleOutlined />
          <span>About Smartlink</span>
        </StyledHelpCol>
        <StyledHelpCol span={8}>
          <QuestionCircleOutlined />
          <span>FAQ's</span>
        </StyledHelpCol>
        <StyledHelpCol span={8}>
          <MessageOutlined />
          <span>Need Help?</span>
        </StyledHelpCol>
      </Row>

      <StyledDetails>
        <div>
          <h4>PRODUCTS</h4>
          <ul>
            <li>
              <a href="">All Products</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Redmi buds 6 play</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Redmi Buds 5</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Xiaomi Smart band 9 active</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Redmi buds 5 pros</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Xiaomi Power Bank 10000mAh</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>GET TO KNOW US</h4>
          <ul>
            <li>
              <a href="">Our Team</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Packing Process</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Customer Reviews</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>AFTER SALE SERVICES</h4>
          <ul>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Refund & Return Policy</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Warranty & Repair Policy</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Shipping & Cancellation Policy</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Estimated Delivery Time</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Secure Payment</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">User Guide</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>LET US HELP YOU</h4>
          <ul>
            <li>
              <a href="">How to Place Order</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">E-Gift Card</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Claim Process</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Product Authentication</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Track Your Order</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">FAQs</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Blogs</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Xiaomi Community</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Customer Care</h4>
          <ul>
            <li>
              <a href="">Support</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Helpline Number : 03-111-111-050</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">info@mistore.pk</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Service Timings 10am-6pm</a>
            </li>
          </ul>
          <div>
            <h4>PAYMENT METHODS</h4>
            <span>
              <img src="./payment/web_icons-03.avif" alt="" />
              <img src="./payment/web_icons-02.webp" alt="" />
              <img src="./payment/web_icons-04.avif" alt="" />
              <img src="./payment/bank-transfer-icon.svg" alt="" />
            </span>
            <p>Copyright © 2025 Xiaomi. All Rights Reserved</p>
          </div>
        </div>
      </StyledDetails>
    </>
  );
};

export default FooterComponent;
