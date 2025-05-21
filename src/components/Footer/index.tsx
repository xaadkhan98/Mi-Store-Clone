import styled from "styled-components";
import Input from "antd/es/input/Input";
import {
  Button,
  Col,
  Flex,
  Image,
  Row,
  Space,
  Card,
  List,
  Typography,
} from "antd";
import {
  InfoCircleOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { StyledCol, StyledDetails, StyledHelpCol } from "./components/styles";

const { Title, Text } = Typography;

const FooterComponent = () => {
  return (
    <>
      <Row>
        <StyledCol style={{ backgroundColor: " #ff6d00" }} span={8}>
          <Image
            preview={false}
            src="/Hero-Section/policies (3).avif"
            width="50%"
            alt=""
          />
        </StyledCol>
        <StyledCol style={{ backgroundColor: " #ff9505" }} span={8}>
          <Image
            preview={false}
            src="/Hero-Section/policies (2).avif"
            width="50%"
            alt=""
          />
        </StyledCol>
        <StyledCol style={{ backgroundColor: " #eeb902" }} span={8}>
          <Image
            preview={false}
            src="/Hero-Section/policies (1).avif"
            width="50%"
            alt=""
          />
        </StyledCol>
      </Row>

      <Row>
        <StyledCol span={12}>
          <Flex vertical>
            <Title level={5} style={{ marginTop: 0 }}>
              Let's stay in touch
            </Title>
            <Text>Get updates on sales specials and more</Text>
          </Flex>
          <Space.Compact style={{ width: "40%" }}>
            <Input placeholder="Enter Your Email Address" />
            <Button>&gt;</Button>
          </Space.Compact>
        </StyledCol>

        <StyledCol span={12}>
          <Flex vertical>
            <Title level={5} style={{ marginTop: 0 }}>
              Follow Mi
            </Title>
            <Text>We want to hear from you!</Text>
          </Flex>
          <Space>
            <Image preview={false} src="/Socials/facebook.png" alt="" />
            <Image preview={false} src="/Socials/youtube.png" alt="" />
            <Image preview={false} src="/Socials/instagram.png" alt="" />
            <Image preview={false} src="/Socials/twitter.png" alt="" />
            <Image preview={false} src="/Socials/tiktok.png" alt="" />
          </Space>
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
