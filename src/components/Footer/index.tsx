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
import {
  AFTER_SALE_SERVICES,
  GET_TO_KNOW_LINKS,
  PAYMENT_IMAGES,
} from "./components/helper";

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
        {/* Footer Get to know us Section */}
        <Col span={6}>
          <StyledTitle>GET TO KNOW US</StyledTitle>
          <Flex vertical>
            {GET_TO_KNOW_LINKS.map((completeLink) => {
              return (
                <StyledLink to={completeLink.link}>
                  {completeLink.linkedText}
                </StyledLink>
              );
            })}
          </Flex>
        </Col>
        {/* After sale services Section in Footer */}
        <Col span={6}>
          <StyledTitle>AFTER SALE SERVICES</StyledTitle>
          <Flex vertical>
            {AFTER_SALE_SERVICES.map((completeLink) => {
              return (
                <StyledLink to={completeLink.link}>
                  {completeLink.linkedText}
                </StyledLink>
              );
            })}
          </Flex>
        </Col>
        <Col span={6}>
          <StyledTitle>LET US HELP YOU</StyledTitle>
          <Flex vertical>
            {AFTER_SALE_SERVICES.map((completeLink) => {
              return (
                <StyledLink to={completeLink.link}>
                  {completeLink.linkedText}
                </StyledLink>
              );
            })}
          </Flex>
        </Col>
        <Col span={6}>
          <StyledTitle>CUSTOMER CARE</StyledTitle>
          <Flex vertical>
            <StyledLink to="/">Support</StyledLink>
            <StyledLink to="/">Helpline Number : 03-111-111-050</StyledLink>
            <StyledLink to="/">info@mistore.pk</StyledLink>
            <StyledLink to="/">Service Timings 10am-6pm</StyledLink>

            {/* Rather than giving each Image separate source it's better to map through it */}
            <Space>
              {PAYMENT_IMAGES.map((imageSource) => (
                <StyledImage preview={false} src={imageSource} />
              ))}
            </Space>
          </Flex>
        </Col>
      </StyledDetailsRow>
    </React.Fragment>
  );
};

export default FooterComponent;
