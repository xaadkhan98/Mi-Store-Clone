import Input from "antd/es/input/Input";
import { Button, Col, Flex, Image, Row, Space, Typography } from "antd";
import {
  InfoCircleOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import {
  StyledCol,
  StyledDetailsRow,
  StyledFlex,
  StyledHelpCol,
  StyledImage,
  StyledLink,
  StyledTitle,
} from "./components/styles";
import React from "react";

const { Title, Text } = Typography;

const FooterComponent = () => {
  return (
    <React.Fragment>
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
          <StyledFlex vertical>
            <Title level={5}>Let's stay in touch</Title>
            <Text>Get updates on sales specials and more</Text>
          </StyledFlex>
          <Space.Compact>
            <Input placeholder="Enter Your Email Address" />
            <Button>&gt;</Button>
          </Space.Compact>
        </StyledCol>

        <StyledCol span={12}>
          <StyledFlex vertical>
            <Title level={5}>Follow Mi</Title>
            <Text>We want to hear from you!</Text>
          </StyledFlex>
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
      <StyledDetailsRow>
        <Col span={6}>
          <StyledTitle>GET TO KNOW US</StyledTitle>
          <Flex vertical>
            <StyledLink to="/">Our Team</StyledLink>
            <StyledLink to="/">About Us</StyledLink>
            <StyledLink to="/">Terms & Conditions</StyledLink>
            <StyledLink to="/">Packing Process</StyledLink>
            <StyledLink to="/">Customer Reviews</StyledLink>
          </Flex>
        </Col>
        <Col span={6}>
          <StyledTitle>AFTER SALE SERVICES</StyledTitle>
          <Flex vertical>
            <StyledLink to="/">Privacy Policy</StyledLink>
            <StyledLink to="/">Refund & Return Policy</StyledLink>
            <StyledLink to="/">Warranty & Repair Policy</StyledLink>
            <StyledLink to="/">Shipping & Cancellation Policy</StyledLink>
            <StyledLink to="/">Estimated Delivery Time</StyledLink>
            <StyledLink to="/">Secure Payment</StyledLink>
            <StyledLink to="/">User Guide</StyledLink>
          </Flex>
        </Col>
        <Col span={6}>
          <StyledTitle>LET US HELP YOU</StyledTitle>
          <Flex vertical>
            <StyledLink to="/">How to Place Order</StyledLink>
            <StyledLink to="/">E-Gift Card</StyledLink>
            <StyledLink to="/">Claim Process</StyledLink>
            <StyledLink to="/">Product Authentication</StyledLink>
            <StyledLink to="/">Track Your Order</StyledLink>
            <StyledLink to="/">FAQs</StyledLink>
            <StyledLink to="/">Blogs</StyledLink>
            <StyledLink to="/">Xiaomi Community</StyledLink>
          </Flex>
        </Col>
        <Col span={6}>
          <StyledTitle>CUSTOMER CARE</StyledTitle>
          <Flex vertical>
            <StyledLink to="/">Support</StyledLink>
            <StyledLink to="/">Helpline Number : 03-111-111-050</StyledLink>
            <StyledLink to="/">info@mistore.pk</StyledLink>
            <StyledLink to="/">Service Timings 10am-6pm</StyledLink>
            <Space>
              <StyledImage
                preview={false}
                src="https://cdn.shopify.com/s/files/1/0231/3627/2464/files/web_icons-03.png?v=1691410248"
              />
              <StyledImage
                preview={false}
                src="https://cdn.shopify.com/s/files/1/0231/3627/2464/files/web_icons-02.png?v=1691410247"
              />
              <StyledImage
                preview={false}
                src="https://cdn.shopify.com/s/files/1/0231/3627/2464/files/bank-transfer-icon.svg?v=1719473184"
              />
              <StyledImage
                preview={false}
                src="https://cdn.shopify.com/s/files/1/0231/3627/2464/files/web_icons-04.png?v=1691410248"
              />
            </Space>
          </Flex>
        </Col>
      </StyledDetailsRow>
    </React.Fragment>
  );
};

export default FooterComponent;
