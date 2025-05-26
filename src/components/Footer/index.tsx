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
        <StyledCol style={{ backgroundColor: " #ff6d00" }} xs={24} xl={8}>
          <Image
            preview={false}
            src="/Hero-Section/policies (3).avif"
            width="50%"
            alt=""
          />
        </StyledCol>
        <StyledCol style={{ backgroundColor: " #ff9505" }} xs={24} xl={8}>
          <Image
            preview={false}
            src="/Hero-Section/policies (2).avif"
            width="50%"
            alt=""
          />
        </StyledCol>
        <StyledCol style={{ backgroundColor: " #eeb902" }} xs={24} xl={8}>
          <Image
            preview={false}
            src="/Hero-Section/policies (1).avif"
            width="50%"
            alt=""
          />
        </StyledCol>
      </Row>

      <Row>
        <StyledCol xs={24} xl={12}>
          <StyledFlex vertical>
            <Title level={5}>Let's stay in touch</Title>
            <Text>
              Get updates on sales <br /> specials and more
            </Text>
          </StyledFlex>
          <Space.Compact>
            <Input placeholder="Enter Your Email Address" />
            <Button>&gt;</Button>
          </Space.Compact>
        </StyledCol>

        <StyledCol xs={24} xl={12}>
          <StyledFlex vertical>
            <Title level={5}>Follow Mi</Title>
            <Text>We want to hear from you!</Text>
          </StyledFlex>
          <Space.Compact>
            <Image preview={false} src="/Socials/facebook.png" alt="" />
            <Image preview={false} src="/Socials/youtube.png" alt="" />
            <Image preview={false} src="/Socials/instagram.png" alt="" />
            <Image preview={false} src="/Socials/twitter.png" alt="" />
            <Image preview={false} src="/Socials/tiktok.png" alt="" />
          </Space.Compact>
        </StyledCol>
      </Row>

      <Row>
        <StyledHelpCol xs={24} xl={8}>
          <InfoCircleOutlined />
          <span>About Smartlink</span>
        </StyledHelpCol>
        <StyledHelpCol xs={24} xl={8}>
          <QuestionCircleOutlined />
          <span>FAQ's</span>
        </StyledHelpCol>
        <StyledHelpCol xs={24} xl={8}>
          <MessageOutlined />
          <span>Need Help?</span>
        </StyledHelpCol>
      </Row>
      <StyledDetailsRow>
        {/* Footer Get to know us Section */}
        <Col xs={24} xl={6}>
          <Flex align="center" vertical>
            <StyledTitle>GET TO KNOW US</StyledTitle>
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
        <Col xs={24} xl={6}>
          <Flex align="center" vertical>
            <StyledTitle>AFTER SALE SERVICES</StyledTitle>
            {AFTER_SALE_SERVICES.map((completeLink) => {
              return (
                <StyledLink to={completeLink.link}>
                  {completeLink.linkedText}
                </StyledLink>
              );
            })}
          </Flex>
        </Col>
        <Col xs={24} xl={6}>
          <Flex align="center" vertical>
            <StyledTitle>LET US HELP YOU</StyledTitle>
            {AFTER_SALE_SERVICES.map((completeLink) => {
              return (
                <StyledLink to={completeLink.link}>
                  {completeLink.linkedText}
                </StyledLink>
              );
            })}
          </Flex>
        </Col>
        <Col xs={24} xl={6}>
          <Flex vertical align="center">
            <StyledTitle>CUSTOMER CARE</StyledTitle>
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
